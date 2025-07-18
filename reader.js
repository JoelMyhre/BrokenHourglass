/* reader.js ────────────────────────────────────────────── */

/* ── One‑time programmatic reload to “fix” initial sizing ── Note, this is very inefficient, but you t/s a few hours and could fix the adaptive text bug */
if (!sessionStorage.getItem('captionReloaded')) {
    sessionStorage.setItem('captionReloaded', 'true');
    window.location.reload();
  }
  
  /* 1 ▸ Grab DOM nodes */
  const viewer  = document.getElementById('viewer');
  let   pageBox = document.getElementById('page');
  if (!pageBox) {
    pageBox = document.createElement('div');
    pageBox.id = 'page';
    viewer.prepend(pageBox);
  }
  
  /* 2 ▸ Track current page */
  let pageIdx = 0;
  
  /* 3 ▸ Render the current page */
  function render() {
    pageBox.innerHTML = '';
    const { grid, panels } = pages[pageIdx];
  
    Object.assign(pageBox.style, {
      display      : 'grid',
      gap          : '6px',
      gridTemplate : grid.template
    });
  
    const areaMap = new Map();
  
    panels.forEach(p => {
      let wrapper = areaMap.get(p.area);
      if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className      = 'panel';
        wrapper.style.gridArea = p.area;
        pageBox.appendChild(wrapper);
        areaMap.set(p.area, wrapper);
      }
  
      let el;
      if (p.type === 'img') {
        el = Object.assign(new Image(), {
          src:     p.src,
          alt:     p.alt || '',
          loading: 'eager'
        });
      } else if (p.type === 'video') {
        el = Object.assign(document.createElement('video'), {
          src:         p.src,
          autoplay:    true,
          loop:        true,
          muted:       true,
          playsInline: true
        });
      } else if (p.type === 'text') {
        el = document.createElement('div');
        el.className = p.class || 'caption-box';
        el.innerHTML = p.content || '';
      } else {
        console.warn('Unknown panel type:', p.type);
        return;
      }
  
      if (p.style) Object.assign(el.style, p.style);
      wrapper.appendChild(el);
    });
  
    // Initial adaptive sizing pass
    requestAnimationFrame(() => {
      pageBox.querySelectorAll('.caption-box').forEach(el => fitTextToBox(el, 12));
    });
  }
  
  /* Shrink‑to‑fit helper (unchanged) */
  function fitTextToBox(el, minPx = 12) {
    const style     = getComputedStyle(el);
    let   fontSize  = parseFloat(style.fontSize);
    const lineRatio = parseFloat(style.lineHeight) / fontSize;
    el.style.overflow = 'hidden';
  
    while ((el.scrollHeight > el.clientHeight ||
            el.scrollWidth  > el.clientWidth) &&
           fontSize > minPx) {
      fontSize -= 1;
      el.style.fontSize   = fontSize + 'px';
      el.style.lineHeight = (fontSize * lineRatio) + 'px';
    }
  }
  
  /* 4 ▸ Navigation buttons (unchanged) */
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  function updateNavState() {
    prevBtn.disabled = pageIdx === 0;
    nextBtn.disabled = pageIdx === pages.length - 1;
  }
  prevBtn.onclick = () => { if (pageIdx>0){ pageIdx--; render(); updateNavState(); }};
  nextBtn.onclick = () => { if (pageIdx<pages.length-1){ pageIdx++; render(); updateNavState(); }};
  
  /* 5 ▸ Initial paint */
  render();
  updateNavState();