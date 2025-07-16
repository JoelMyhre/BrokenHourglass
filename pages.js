/* pages.js ---------------------------------------------------- */
const pages = [
    /* PAGE 1 – single full‑width still */
    {
      grid: { template: `"a" 65% / 1fr` },
      panels: [
        { area:'a', type:'img', src:'assets/img/0001.png', alt:'Broken Hourglass' }
      ]
    },
  
    /* PAGE 2 – single still (nav test) */
    {
      grid: { template: `"a" 65% / 1fr` },
      panels: [
        { area:'a', type:'img', src:'assets/img/0002.png', alt:'Broken Hourglass' }
      ]
    },
  
    /* PAGE 3 – motion panel with twinkling lights */
    {
      grid: { template: `"a" 65% / 1fr` },
      panels: [
        { area:'a', type:'video', src:'assets/vid/walkatnight.mp4', alt:'Twinkling skyline' }
        // if you also saved a WebM version, swap the src or add another entry
        // { area:'a', type:'video', src:'assets/vid/0002.webm', alt:'Twinkling skyline' }
      ]
    }
  
    /* — add more pages here — */
  ];