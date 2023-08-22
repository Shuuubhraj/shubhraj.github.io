// gitprofile.config.js

const config = {
  github: {
    username: 'shuuubhraj', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'shuuubhraj',
    twitter: 'shuuubhraj',
    instagram: 'shuuubhraj',
    website: 'https://shubhraj.com',
    phone: '',
    email: 'contact@shubhraj.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'PHP',
    'MySQL',
    'CSS',
  ],
  /* experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ], */
  certifications: [
    {
      name: 'Introduction to Cybersecurity',
      body: 'Issued by Cisco',
      year: 'March 2021',
      link: 'https://www.credly.com/badges/e05b1436-03f8-4c62-a810-b625d0f995f9?source=linked_in_profile',
    },
    {
      name: 'Google Cloud Platform Fundamentals for AWS Professionals',
      body: 'Google Cloud - Minnesota USA ',
      year: 'April 2021',
      link: 'https://www.coursera.org/account/accomplishments/verify/PG2H56YL6PKS',
    },
  ], 
  education: [
    {
      institution: 'Winners English High School',
      degree: 'Higher Secondary School Certificate (HSC)',
      from: '2005',
      to: '2019',
    },
     {
      institution: 'Government Polytechnic, Dahod',
      degree: 'Computer Engineering',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'ITM (SLS) Baroda University (ITMBU)',
      degree: 'CSE with Specialization in Cyber Security',
      from: '2022',
      to: '2025',
    },
  ],

// To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Rosyobook - Rent or Sell your Old Book',
      description:
        'Jul 2021 - May 2022'
        'Associated to GP Dahod',
      imageUrl: 'https://lh3.googleusercontent.com/a/AAcHTtd2f-WGZfNiK1QpLNSQeRYuSi_6dqAsI5NjTZ6QcaIN9A=s360-c-no',
      link: 'https://example.com',
    },
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
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
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://github.com/shuuubhraj"
      target="_blank"
      rel="noreferrer"
    >@Shuuubhraj</a> with ❤️`,
};

export default config;
