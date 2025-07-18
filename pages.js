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
  
/* PAGE 3 – video + side‑text, gutter, panorama + top‑right caption, gutter, new image + 75%-wide overlay */
{
    grid: {
      template: `
        "a b" 1fr     /* row 1: video + side text */
        ". ." 12px    /* row 2: first gutter */
        "c c" auto    /* row 3: full‑width panorama */
        ". ." 12px    /* row 4: second gutter */
        "d d" auto    /* row 5: new image */
        / 40% 60%     /* two columns: 40% / 60% */
      `
    },
    panels: [
      // row 1
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
          width: '90%'   // first caption uses your global clamp sizing
        }
      },
  
      // row 3 (panorama)
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
        content: `
  I had known <strong>Kat</strong> for years, and I felt like I knew her well, despite the age difference.
  
  When I had met her she had been working as a Social Officer.
  
  She had come and found me almost a decade ago.
        `,
        style: {
          width: '30%',
          top:   '12px',
          right: '12px',
          left:  'auto'
          // fontSize override removed so container‐query clamp() applies
        }
      },
  
      // row 5 (detail shot + overlay)
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
        content: `
  "I'm normally right. For all the good that does me."
  
  I was Kat's star case. When she found me I was a addict to <strong>VR</strong>. Emaciated and barely able to function. I needed help, and I hadn't wanted it.
  
  I had been picked up for some scum hacking I'd been doing. Small targets normally didn't get you much attention, but I had got unlucky.
  
  Or as lucky as humanely possible.
  
  I still heard the buzz and got the VR shakes in my hands.
        `,
        style: {
          width: '60%',
          top:   '12px',
          left:  '12px',
          right: 'auto'
          // fontSize override removed here as well
        }
      }
    ]
  },
/* PAGE 4 – caption box at fixed 50vh, 12px gutter, then image */
{
    grid: {
      template: `
        "a" 40vh    /* row 1: exactly half the viewport height */
        "." 12px    /* row 2: gutter */
        "c" auto    /* row 3: image auto‑height */
        / 1fr       /* single full‑width column */
      `
    },
    panels: [
      // Row 1 – caption filling that 50vh
      {
        area:   'a',
        type:   'text',
        class:  'caption-box',
        content: `
  It's calm up here in the Spires. Rusted and worn habs cobbled from second hand material built around the ever rising urban jungle below. Not too many people make it up here. The novelty of scenic vistas doesn't seem to draw a crowd here. Too residential this part of <strong><span style="font-size:1.3em">Metro</span></strong>.
  
  This was mine and Kat's favourite place to have our talks and catch up. The urban canyons down below were moving at a different pace. Up here it was quiet, except for the wind.
  
  Kat always had a lot to say, but it took a little probing to get her to open up and relax. It was in her nature to be reserved, but she was a good person. Not many people were as old as her. <strong><span style="font-size:1.3em">Firsts</span></strong> were a strange people. Metro was quite tonight, the air was crisp, and she seemed to be in a good mood.
  
  She looked at me.
        `,
        style: {
          /* restore absolute inset so it fills the 50vh cell */
          position: 'absolute',
          inset:    '0',
          margin:   '12px',
          /* constrain width inside that 50vh cell */
          width:    '90%'
        }
      },
  
      // Row 3 – the big image below
      {
        area: 'c',
        type: 'img',
        src:  'assets/img/0005.png',
        alt:  'The Spires glow down below them'
      }
    ]
  },
/* PAGE 5 – first row: single column (image + caption overlay)
   second row: two equal columns (image left, caption right) */
   {
    grid: {
      template: `
        "a a"   auto   /* row 1: image+caption */
        "c d" auto   /* row 2: image + caption */
        / 1fr  1fr   /* two equal‑width columns */
      `
    },
    panels: [
      // ── Row 1: full‑width image with caption overlay ──
      {
        area: 'a',
        type: 'img',
        src:  'assets/img/0006.png',
        alt:  'First row image'
      },
      {
        area:   'a',
        type:   'text',
        class:  'caption-box',
        content: `
  "You're better now Andron. I know you have trouble with your demons.
  
  We all do.
  
  Coming to terms with the things we've done... the things we can do, that's part of life."`,
        style: {
            width:    '50%',      // whatever your aesthetic width is
            top:      '55%',     // pin it 12px from top
            bottom:   '-10%',     // **clear** the CSS bottom:0
            left:     '12px',
            right:    'auto',
            //position: 'relative'  // opt: take it out of absolute flow if you want
        }
      },
  
      // ── Row 2: left image ──
      {
        area: 'c',
        type: 'img',
        src:  'assets/img/page5-row2.png',
        alt:  'Second row image'
      },
      // ── Row 2: right caption ──
      {
        area:   'd',
        type:   'text',
        class:  'caption-box',
        content: `
  Your second-row caption goes here. It will sit in the right column.`,
        style: {
          width:  '90%',   // 90% of the right column
          top:    '12px',
          right:  '12px',
          left:   'auto'
        }
      }
    ]
  }
    /* — add more pages here — */
  ];