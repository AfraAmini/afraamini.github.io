// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. please refer to Google Scholar for the most up-to-date list.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-started-my-ph-d-at-eth-ai-center",
          title: 'I started my Ph.D. at ETH AI Center 👩‍💻',
          description: "",
          section: "News",},{id: "news-i-will-spend-a-year-part-time-as-a-student-researcher-at-google-deepmind-zurich",
          title: 'I will spend a year (part-time) as a student researcher at Google Deepmind,...',
          description: "",
          section: "News",},{id: "news-we-gave-a-tutorial-at-acl-2023-on-generating-text-from-language-models-️",
          title: 'We gave a tutorial at ACL 2023 on Generating Text from Language Models...',
          description: "",
          section: "News",},{id: "news-i-received-the-qualcomm-innovation-fellowship-europe-reward-for-my-research-on-controllable-text-generation",
          title: 'I received the Qualcomm Innovation Fellowship Europe Reward for my research on Controllable...',
          description: "",
          section: "News",},{id: "news-i-started-a-3-month-research-internship-at-allen-institue-of-ai-ai2",
          title: 'I started a 3-month research internship at Allen Institue of AI (Ai2)!',
          description: "",
          section: "News",},{id: "news-i-successfully-passed-my-ph-d-defense-thanks-to-my-advisor-prof-ryan-cotterell-and-my-co-examiners-prof-elliott-ash-and-prof-çağlar-gülçehre",
          title: 'I successfully passed my Ph.D. defense! 🎓 Thanks to my advisor Prof. Ryan...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%66%72%61.%61%6D%69%6E%69@%69%6E%66.%65%74%68%7A.%63%68", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=poPe_B0AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/afra_amini", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
