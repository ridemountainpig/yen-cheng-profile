// gitprofile.config.js

const config = {
  github: {
    username: 'ridemountainpig', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['ridemountainpig', 'monkeytype', 'yen-cheng-profile', 'nextjs.tw', 'zeabur', 'jenkins'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ridemountainpig.github.io',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'Python',
    'Flask',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Feng Chia University',
      degree: 'undergraduate',
      from: '2020',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'MonkeyType Readme',
      description:
        'Share MonkeyType Story With The World',
      imageUrl: 'https://github.com/ridemountainpig/monkeytype-readme/blob/master/public/image/stupidMonkeyIcon.png?raw=true',
      link: 'https://monkeytype-readme.zeabur.app/',
    },
    {
      title: 'MonkeyType Chrome Extension',
      description:
        'Let you type more faster and accurate in MonkeyType',
      imageUrl: 'https://github.com/ridemountainpig/monkeytype-chrome-extension/blob/master/icon.png?raw=true',
      link: 'https://chrome.google.com/webstore/detail/monkeytype-extension/ekkfdhandgcjdkdlfppjkedoaiiccdaa?hl=zh-TW',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#8fbcbb',
      secondary: '#6a7791',
      accent: '#6a7791',
      neutral: '#6a7791',
      'base-100': '#eceff4',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;