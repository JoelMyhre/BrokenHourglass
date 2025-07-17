/* pages.js ---------------------------------------------------- */
const pages = [
    /* PAGE 1 – single full‑width still */
    {
      grid: { template: `"a" 65% / 1fr` },
      panels: [
        { area:'a', type:'img', src:'assets/img/cover01.png', alt:'Broken Hourglass' }
      ]
    },
  
    /* PAGE 2 – still + narration */
    {
    grid:{ template:`"a" 65% / 1fr` },
    panels:[
      { area:'a', type:'img',
        src:'assets/img/0002.png', alt:'Broken Hourglass' },
  
      /* narration overlay */
      { area:   'a',
        type:   'text',
        class:  'caption-box',
        content:'It was cold tonight, cold enough for a jacket, but not so cold you noticed. \n\nShe looked Happy. \n\nIt had been a long time since we met, different work shifts and now she lived across town.',
        style: {
          width:    '30%',    // 30% of the panel width
          height:   '30%',    // 50% of the panel height
          top:      'auto',   // disable the default top:0 inset
          bottom:   '12px',   // 12px up from the bottom edge
          left:     '12px',    // 12px in from the left edge
          fontSize: '1.25rem'
        }
      }
    ]
    },
  
    /* PAGE 3 – motion panel with twinkling lights */
    {
        grid: {          // grid-template-rows 1fr, grid-template-columns 40%
          template: `"a" 1fr / 40%`
        },
        panels: [
          { area:'a',
            type:'video',
            src:'assets/vid/walkatnight.mp4',   // 540 px wide master
            alt:'Twinkling skyline' }
        ]
      }
  
    /* — add more pages here — */
  ];