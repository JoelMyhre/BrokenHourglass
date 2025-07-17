/* reader.js ────────────────────────────────────────────── */

/* 1 ▸ Grab DOM nodes */
const viewer  = document.getElementById('viewer');
let   pageBox = document.getElementById('page');
if (!pageBox){
  pageBox = document.createElement('div');
  pageBox.id = 'page';
  viewer.prepend(pageBox);
}

/* 2 ▸ Track current page */
let pageIdx = 0;

/* 3 ▸ Render the current page */
function render () {
  pageBox.innerHTML = '';                     // clear only the grid
  const { grid, panels } = pages[pageIdx];

  /* apply page-level grid */
  Object.assign(pageBox.style, {
    display      : 'grid',
    gap          : '6px',
    gridTemplate : grid.template
  });

  /* one wrapper per grid-area so overlays stack cleanly */
  const areaMap = new Map();

  panels.forEach(p => {
    /* get / create the wrapper <div class="panel"> for this area */
    let wrapper = areaMap.get(p.area);
    if (!wrapper){
      wrapper = document.createElement('div');
      wrapper.className   = 'panel';          // gives position:relative (CSS)
      wrapper.style.gridArea = p.area;
      areaMap.set(p.area, wrapper);
      pageBox.appendChild(wrapper);
    }

    /* build the actual content node */
    let el;
    switch (p.type){
      case 'img':
        el = Object.assign(new Image(), {
          src: p.src, alt: p.alt || '', loading: 'lazy'
        });
        break;

      case 'video':
        el = Object.assign(document.createElement('video'), {
          src: p.src, autoplay: true, loop: true,
          muted: true, playsInline: true
        });
        break;

      case 'text':
        el = document.createElement('div');
        el.className   = p.class || 'caption-box';
        el.textContent = p.content || '';
        break;

      default:
        console.warn('Unknown panel type:', p.type);
        return;  // skip bad entry
    }
    // ← Add this block right here before you append `el` to its wrapper:
    if (p.style) {
    Object.assign(el.style, p.style);
    }
    wrapper.appendChild(el);
  });
}

/* 4 ▸ Navigation buttons */
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateNavState () {
  prevBtn.disabled = pageIdx === 0;
  nextBtn.disabled = pageIdx === pages.length - 1;
}

prevBtn.onclick = () => {
  if (pageIdx > 0){
    pageIdx--;
    render();
    updateNavState();
  }
};
nextBtn.onclick = () => {
  if (pageIdx < pages.length - 1){
    pageIdx++;
    render();
    updateNavState();
  }
};

/* 5 ▸ Initial paint */
render();
updateNavState();