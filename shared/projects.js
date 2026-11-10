// Single source of content for the portfolio.
window.PORTFOLIO = {
  name: 'Benjamin Fritz',
  role: 'Senior Design Engineer / Manager',
  line: 'I design interfaces, then I build them. <abbr title="Accessibility">A11Y</abbr> first \u2013 AI second.',
  contact: { label: 'Email', href: 'mailto:hibenjaminfritz@gmail.com', address: 'hibenjaminfritz@gmail.com' },
  about: {
    paragraphs: [
      'Most of my work happens where design meets engineering. Sketching in the browser shows what a static frame can\u2019t.',
      'I\u2019ve spent over 15 years in design and UX and currently work on the Design Systems team at Vodafone. Over more than six years of freelancing, I\u2019ve worked with clients like adidas, dm, Lidl and Native Instruments, and agencies including Parasol Island, Saatchi &amp; Saatchi, Scholz &amp; Friends and Stink.',
    ],
    focus: ['Interface design', 'Interaction and motion', 'Prototyping', 'Front-end engineering'],
  },
  projects: [
    {
      id: 'brix', name: 'brix/react',
      meta: 'Design Systems team, Vodafone Germany. <a href="https://www.npmjs.com/package/@vodafone_de/brix-components" rel="noopener">brix/react</a> by Team Tetris, shown unmodified under <a href="https://creativecommons.org/licenses/by-nd/4.0/" rel="noopener">CC BY-ND 4.0</a>. Example data.',
      summary: 'brix/react is our digital design system for vodafone.de: 100 React components in TypeScript and styled-components. I played a crucial role in designing and contributing to it.',
      slides: [
        { art: 'brix:tariff', kind: 'Live component', axis: 'TariffCard', title: 'TariffCard', note: 'A complete product card, composed from smaller brix/react parts.' },
        { art: 'brix:tabs', kind: 'Live component', axis: 'TabGroup', title: 'TabGroup', note: 'Arrow keys move between tabs and Enter selects.' },
        { art: 'brix:picker', kind: 'Live component', axis: 'PickerGroup', title: 'PickerGroup', note: 'One choice from a set, presented as large targets.' },
        { art: 'brix:switch', kind: 'Live component', axis: 'Switch', title: 'Switch', note: 'On and off states are drawn into the handle, not left to colour alone.' },
      ],
    },
    {
      id: 'highscore', name: 'Highscore',
      meta: 'Design and engineering, 2026. React, TypeScript, Vercel and Postgres.',
      summary: 'Highscore is our internal KPI dashboard for the design system, bringing Figma, code and Contentful metrics into one view with trends over time. Built end to end, from the interface to the database.',
      slides: [
        { art: 'img:shared/highscore/overview.jpg', alt: 'Highscore dashboard: filters for design, code and content, and a line chart of component usage and content entries over 30 days.', kind: 'Screen', axis: 'Overview', title: 'Dashboard overview', note: 'Design, code and content metrics in one view.' },
        { art: 'hs:trend', kind: 'Live component', axis: 'Trends', title: 'Metric trends', note: 'Explore how the metrics change over time. Invented data.' },
        { art: 'hs:activity', kind: 'Live component', axis: 'Ranking', title: 'Component activity', note: 'Switch between most used and most detached. Invented data.' },
        { art: 'note-highscore', kind: 'Process', axis: 'Architecture', title: 'Built to stay useful', note: 'What happens when a data source fails.' },
      ],
    },
    {
      id: 'kindercards', name: 'Kinder Cards',
      meta: 'Design and engineering, 2026. React and Netlify Functions. <a href="https://kindercards.netlify.app/" rel="noopener">Open the app</a> and try the speaker icon at the top for a hidden soundtrack.',
      summary: 'Kinder Cards is a Game Boy-inspired planning poker tool for our design system team: create a room, share the link and vote S to XL. Made from the logo to the room logic.',
      slides: [
        { art: 'kc:play', kind: 'Live product', axis: 'Play', title: 'Play a round', note: 'Pick a card, then reveal. Your teammates are simulated.' },
        { art: 'img:shared/kindercards/entry.jpg', alt: 'Kinder Cards start screen in green pixel style, with fields for your name and the room name and a Create room button.', kind: 'Screen', axis: 'Entry', title: 'New room', note: 'Two fields and you are in. No accounts.' },
        { art: 'img:shared/kindercards/logos.jpg', alt: 'Three logo directions side by side: a stacked deck, a shuffled hand of fanned cards, and block cards, each shown as an icon and with the wordmark.', kind: 'Process', axis: 'Logo', title: 'Logo exploration', note: 'Three directions. The shuffled hand won.' },
        { art: 'note-kinder', kind: 'Process', axis: 'Engineering', title: 'Secret until the reveal', note: 'How a vote stays hidden.' },
      ],
    },
    {
      id: 'buerokompass', name: 'Bürokompass',
      meta: 'Design and engineering, 2026. React, Tailwind and Cloudflare D1, with job research by Codex. In German, for its one user. Invented listings.',
      summary: 'Bürokompass is a job board made for one person’s search: office roles around Dortmund from three job portals, gathered into one calm list with favourites and a distance filter. Made from the research brief to the distance maths.',
      slides: [
        { art: 'bk:list', kind: 'Live product', axis: 'Collection', title: 'The job collection', note: 'Filter by distance, keep favourites and hide what doesn’t fit.' },
        { art: 'img:shared/buerokompass/overview.jpg', alt: 'Bürokompass overview: a search field, a distance slider set to Dortmund only, tabs for all, new, favourite and hidden jobs, the first job card, and a side panel counting nine unseen jobs.', kind: 'Screen', axis: 'Overview', title: 'Unseen jobs first', note: 'Seen jobs fade back, and portal searches are one click away.' },
        { art: 'img:shared/buerokompass/save.jpg', alt: 'Dialog for saving a job: a pasted Stepstone link, with the job title, company and town filled in automatically and a button to save it to favourites.', kind: 'Screen', axis: 'Save', title: 'Save any listing', note: 'Paste a link, and the title, company and town fill in.' },
        { art: 'note-buero', kind: 'Process', axis: 'Research', title: 'Researched by an agent', note: 'How the list fills itself.' },
      ],
    },
  ],
};
