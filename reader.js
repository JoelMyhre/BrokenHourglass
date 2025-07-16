/* reader.js  ────────────────────────────────────────── */

/* 1.  Grab DOM nodes */
const viewer  = document.getElementById('viewer');
/*   If #page doesn't exist yet, create it so the script never crashes. */
let pageBox   = document.getElementById('page');
if (!pageBox){
  pageBox = document.createElement('div');
  pageBox.id = 'page';
  viewer.prepend(pageBox);
}

/* 2.  Track which page is showing */
let pageIdx = 0;

/* 3.  Render everything in pages[pageIdx] */
function render () {
  /* clear ONLY the panel grid — keep buttons alive */
  pageBox.innerHTML = '';

  /* pull layout + panels for this page */
  const { grid, panels } = pages[pageIdx];

  /* apply page‑specific grid to #page */
  pageBox.style.display      = 'grid';
  pageBox.style.gap          = '6px';
  pageBox.style.gridTemplate = grid.template;

  /* create each panel and drop it into its grid‑area */
  panels.forEach(p => {
    const el = (p.type === 'img')
      ? Object.assign(new Image(), { src: p.src, alt: p.alt || '', loading: 'lazy' })
      : Object.assign(document.createElement('video'),
          { src: p.src, autoplay: true, loop: true, muted: true, playsInline: true });

    el.style.gridArea = p.area;
    pageBox.appendChild(el);
  });
}

/* 4.  Navigation buttons */
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateNavState () {
  prevBtn.disabled = pageIdx === 0;
  nextBtn.disabled = pageIdx === pages.length - 1;
}

prevBtn.onclick = () => {
  if (pageIdx > 0) {
    pageIdx--;
    render();
    updateNavState();
  }
};

nextBtn.onclick = () => {
  if (pageIdx < pages.length - 1) {
    pageIdx++;
    render();
    updateNavState();
  }
};

/* 5.  Initial display */
render();
updateNavState();