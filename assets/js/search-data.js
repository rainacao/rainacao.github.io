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
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-art",
          title: "art",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/art/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-testing-testing-123",
        
          title: "testing testing 123",
        
        description: "is this thing on?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/testing/";
          
        },
      },{id: "art-2019madoka",
          title: '2019madoka',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/2019madoka/";
            },},{id: "art-2019nrt",
          title: '2019nrt',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/2019nrt/";
            },},{id: "art-hq2",
          title: 'Hq2',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/hq2/";
            },},{id: "art-hq-wlw-zine",
          title: 'Hq_wlw_zine',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/hq_wlw_zine/";
            },},{id: "art-hxh1",
          title: 'Hxh1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/hxh1/";
            },},{id: "art-hxh2",
          title: 'Hxh2',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/hxh2/";
            },},{id: "art-loveletter-001",
          title: 'Loveletter_001',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/loveletter_001/";
            },},{id: "art-lovelive-001",
          title: 'Lovelive_001',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/lovelive_001/";
            },},{id: "art-obs-001",
          title: 'Obs_001',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/obs_001/";
            },},{id: "art-obs-002",
          title: 'Obs_002',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/obs_002/";
            },},{id: "art-obs-003",
          title: 'Obs_003',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/obs_003/";
            },},{id: "art-pmmm2019",
          title: 'Pmmm2019',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2019/pmmm2019/";
            },},{id: "art-crimeandpunishment1",
          title: 'Crimeandpunishment1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/crimeandpunishment1/";
            },},{id: "art-ghibli1",
          title: 'Ghibli1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/ghibli1/";
            },},{id: "art-kon1",
          title: 'Kon1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/kon1/";
            },},{id: "art-lain1",
          title: 'Lain1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/lain1/";
            },},{id: "art-nana1",
          title: 'Nana1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/nana1/";
            },},{id: "art-original4",
          title: 'Original4',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/original4/";
            },},{id: "art-pmmm5-2020",
          title: 'Pmmm5 2020',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/pmmm5-2020/";
            },},{id: "art-pmmm7-2020",
          title: 'Pmmm7 2020',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/pmmm7-2020/";
            },},{id: "art-pmmm9",
          title: 'Pmmm9',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/pmmm9/";
            },},{id: "art-shrek1",
          title: 'Shrek1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/shrek1/";
            },},{id: "art-toloveyou-001",
          title: 'Toloveyou_001',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/toloveyou_001/";
            },},{id: "art-2020-comic",
          title: '2020_comic',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/2020_comic/";
            },},{id: "art-eastvan",
          title: 'Eastvan',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/eastvan/";
            },},{id: "art-nrt-sketch",
          title: 'Nrt_sketch',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2020/nrt_sketch/";
            },},{id: "art-art1",
          title: 'Art1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/art1/";
            },},{id: "art-hxh1",
          title: 'Hxh1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/hxh1/";
            },},{id: "art-original2-vrgallery",
          title: 'Original2_vrgallery',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/original2_vrgallery/";
            },},{id: "art-original3",
          title: 'Original3',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/original3/";
            },},{id: "art-original-004",
          title: 'Original_004',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/original_004/";
            },},{id: "art-persona-001",
          title: 'Persona_001',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/persona_001/";
            },},{id: "art-pmmm5-2021",
          title: 'Pmmm5 2021',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/pmmm5-2021/";
            },},{id: "art-pmmm6",
          title: 'Pmmm6',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/pmmm6/";
            },},{id: "art-pmmm7-2021",
          title: 'Pmmm7 2021',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/pmmm7-2021/";
            },},{id: "art-pmmm8",
          title: 'Pmmm8',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/pmmm8/";
            },},{id: "art-selfportrait-2021",
          title: 'Selfportrait_2021',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/selfportrait_2021/";
            },},{id: "art-ubyssey-001",
          title: 'Ubyssey_001',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2021/ubyssey_001/";
            },},{id: "art-fiction1",
          title: 'Fiction1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/fiction1/";
            },},{id: "art-guiltygear1",
          title: 'Guiltygear1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/guiltygear1/";
            },},{id: "art-pmmm2",
          title: 'Pmmm2',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/pmmm2/";
            },},{id: "art-pmmm3",
          title: 'Pmmm3',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/pmmm3/";
            },},{id: "art-pmmm4",
          title: 'Pmmm4',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/pmmm4/";
            },},{id: "art-wadanohara1-rpgmzine",
          title: 'Wadanohara1 Rpgmzine',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/wadanohara1-rpgmzine/";
            },},{id: "art-wadanohara2",
          title: 'Wadanohara2',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/wadanohara2/";
            },},{id: "art-wadanohara3",
          title: 'Wadanohara3',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2022/wadanohara3/";
            },},{id: "art-barbie",
          title: 'Barbie',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2023/barbie/";
            },},{id: "art-madoka1",
          title: 'Madoka1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2023/madoka1/";
            },},{id: "art-utena2",
          title: 'Utena2',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2023/utena2/";
            },},{id: "art-teto",
          title: 'Teto',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2024/teto/";
            },},{id: "art-utena1",
          title: 'Utena1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2024/utena1/";
            },},{id: "art-sketchbook1",
          title: 'Sketchbook1',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2025/sketchbook1/";
            },},{id: "art-sketchbook2",
          title: 'Sketchbook2',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/2025/sketchbook2/";
            },},{id: "books-seven-nights",
          title: 'Seven Nights',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/seven-nights_borges/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",},{id: "projects-painting-exercises-values",
          title: 'painting exercises — values',
          description: "an interactive tool for practicing value studies in painting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/painting-exercises/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%69%6E%61%63%61%6F%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rainacao", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rainacao", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QpUCG6AAAAAJ", "_blank");
        },
      },];
