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
        class:  'caption-box caption-bottom',
        content:'It was cold tonight, cold enough for a jacket, but not so cold you noticed. \n\nShe looked Happy. \n\nIt had been a long time since we met, different work shifts and now she lived across town.',
        style: {
          width:    '30%',    // 30% of the panel width
          height:   'auto',    // 50% of the panel height
          top:      'auto',   // disable the default top:0 inset
          bottom:   '12px',   // 12px up from the bottom edge
          left:     '12px',    // 12px in from the left edge
          fontSize: '1.25rem'
        }
      }
    ]
    },
  
/* PAGE 3 – video + side-text, gutter, panorama + top-right caption, gutter, new image + 75%-wide overlay */
{
    grid: {
      template: `
        "a b" 1fr     /* row 1: video + side text */
        ". ." 12px    /* row 2: first gutter */
        "c c" auto    /* row 3: full-width panorama */
        ". ." 12px    /* row 4: second gutter */
        "d d" auto    /* row 5: new image */
        / 40% 60%     /* two columns: 40% / 60% */
      `
    },
    panels: [
      // row 1
      {
        area: 'a',
        type: 'video',
        src:  'assets/vid/walkatnight.mp4',
        alt:  'Twinkling skyline'
      },
      {
        area:    'b',
        type:    'text',
        class:   'caption-box',
        content: `
  "I don't know why you still want to see me, after all this time. I'm not so special, you know?"
  
  "I know you think that... Always humble to a fault. Besides, I have an excuse since you saved my life."
  
  She chuckled.
  
  "I suppose you're right."
  `,
        style: {
          width: '90%'   // same as before
        }
      },
  
      // row 3
      {
        area: 'c',
        type: 'img',
        src:  'assets/img/0003.png',
        alt:  'Panoramic cityscape'
      },
      {
        area:    'c',
        type:    'text',
        class:   'caption-box',
        content: 'I had known <strong><span style="font-size:1.3em">Kat</span></strong> for years, and I felt like I knew her well, despite the age differnce. \n\nWhen I had met her she had been working as a Social Officer. \n\n She had come and found me almost a decade ago.',
        style: {
          width: '30%',
          top:   '12px',
          right: '12px',
          left:  'auto'
        }
      },
  
      // row 5 (new)
      {
        area: 'd',
        type: 'img',
        src:  'assets/img/0004.png',
        alt:  'Detail shot'
      },
      {
        area:    'd',
        type:    'text',
        class:   'caption-box',
        content: '"I\'m normally right. For all the good that does me."\n\n I was Kat\'s star case. When she found me I was a adict to <strong><span style="font-size:1.3em">VR</span></strong>. Emaciated and barely able to function. I needed help, and I hadn\'t wanted it. \n\n I had been picked up for some scum hacking I\'d been doing. Small targets normally didn\'t get you much attention, but I had got unlucky. \n\n Or as lucky as humanely possible. \n\n I still heard the buzz and got the VR shakes in my hands.',
        style: {
          width: '60%',
          top:   '12px',
          left:  '12px',
          right: 'auto'
        }
      }
    ]
  }
  
    /* — add more pages here — */
  ];