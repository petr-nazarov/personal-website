<template>
  <div>
    <template>
      <v-header :contacts="contacts" />
      <about-me :socials="socials" />
      <services />
      <!-- Timelines -->
      <div class="wrapper">
        <div class="container">
          <div class="columns">
            <div id="education" class="column">
              <timeline :elements="education" title="Education" />
            </div>
            <div id="employment" class="column">
              <timeline :elements="employment" title="Employment" />
            </div>
          </div>
        </div>
      </div>
      <hire-me />
      <skills :skills="skills" />
      <portfolio :portfolio="portfolio" />
      <v-footer :contacts="contacts" :socials="socials" />
    </template>
    <loader v-if="isLoading" />
  </div>
</template>

<script lang="ts">
import Loader from '~/components/Loader.vue'
import VHeader from '~/components/Header.vue'
import AboutMe from '~/components/AboutMe.vue'
import Services from '~/components/Services.vue'
import Timeline from '~/components/Timeline.vue'
import Skills from '~/components/Skills.vue'
// import ContactMe from '~/components/ContactMe.vue'
import VFooter from '~/components/Footer.vue'
import HireMe from '~/components/HireMe.vue'
import Portfolio from '~/components/Portfolio.vue'

export default {
  components: {
    Loader,
    VHeader,
    AboutMe,
    Services,
    Timeline,
    Skills,
    // ContactMe,
    HireMe,
    Portfolio,
    VFooter
  },
  data() {
    return {
      isLoading: true,
      socials: [
        {
          link: 'https://www.facebook.com/petrnazarov',
          icon: 'facebook-f'
        },
        {
          link: 'https://www.instagram.com/nazarov.petr_97/',
          icon: 'instagram'
        },
        {
          link: 'https://www.linkedin.com/in/nazarov-petr/',
          icon: 'linkedin-in'
        },
        {
          link: 'https://github.com/nazarov-petr',
          icon: 'github'
        },
        {
          link: 'https://medium.com/@mrzueck',
          icon: 'medium-m'
        },
        {
          link: 'https://t.me/zueck',
          icon: 'telegram-plane'
        },
        {
          link: 'https://wa.me/79140660444',
          icon: 'whatsapp'
        }
      ],
      education: [
        {
          date: '2019-2020',
          title: 'Ulpan, Tel-Aviv, Israel',
          subtitle: 'Learning Hebrew at Ulpan'
        },
        {
          date: '2018 - now',
          title: 'Far Eastern Federal University',
          link: 'https://www.dvfu.ru/en/',
          subtitle: 'Master of Applied Mathematics and Computer Science'
        },
        {
          date: '2014 - 2018',
          title: 'Far Eastern Federal University',
          link: 'https://www.dvfu.ru/en/',
          subtitle: 'Bachelor of Mathematics and Computer Sciences'
        },
        {
          date: '2012 - 2014',
          title: `Far Eastern Federal University - College of Humanities and Economics`,
          link: 'https://www.dvfu.ru/en/',
          subtitle: 'Information Technologies class'
        }
      ],
      employment: [
        {
          date: '2020 - now',
          title: 'Cred | Personalized Investing',
          link: 'https://www.credinvest.co/',
          subtitle: `I am a Full Stack web Developer and a DevOps Engineer for Cred - a company that develops investment portfolio personalization engine in Tel-Aviv, Israel`
        },
        {
          date: '2020 - now',
          title: 'Klerk.ru',
          link: 'klerk.ru',
          subtitle: `I work as an outsource front end developer for the largest internet journal for accountants in Russia`
        },
        {
          date: '2016 - 2020',
          title: 'Founded and directed FrrCode agency',
          link: 'frrcode.com',
          subtitle: `We develop Web and mobile applications for digital agencies. My main responsibility was to work with clients, manage the development of products`
        },
        {
          date: '2014 - 2016',
          title: 'LTD DVIGA',
          link: 'http://dviga.marketing/',
          subtitle: `I was a lead developer at this company, and focused mostly on E-Comerce sites`
        },
        {
          date: '2012 - 2014',
          title: 'Freelance',
          subtitle: 'Developed personal web-sites and E-Comerce sites'
        }
      ],
      skills: [
        {
          title: 'Back end',
          skills: [
            'Node.js',
            'Typescript',
            'Express.js',
            'Koa.js',
            'Python',
            'Strapi.io',
            'PHP',
            'Laravel',
            '1C-Bitrix',
            'MongoDB',
            'MySQL',
            'SQLite',
            'PostgreSQL'
          ]
        },
        {
          title: 'Administration',
          skills: [
            'CI/DI',
            'Docker',
            'Kubernetes (K8s)',
            'Bitbucket Pipelines',
            'AWS EC2',
            'AWS RDS',
            'AWS EKS',
            'AWS ECR',
            'Sentry',
            'GitLab CI/CD',
            'Bash'
          ]
        },
        {
          title: 'Front end & Mobile',
          skills: [
            'HTML',
            'CSS (SASS, SCSS)',
            'JavaScript',
            'Vue.js',
            'Nuxt.js',
            'Vuex',
            'React.js',
            'Redux',
            'jQuery',
            'Bulma',
            'Buefy',
            'Bootstrap',
            'React Native',
            'React Native Redux',
            'React Native Maps'
          ]
        },
        {
          title: 'Other',
          skills: [
            'PWA',
            'REST API',
            'Postman',
            'Photoshop',
            'Sketch',
            'Figma',
            'Avocode'
          ]
        },
        {
          title: 'Languages',
          skills: [
            'English (Advanced)',
            'Russian (Native)',
            'Hebrew (Beginner)'
          ]
        }
      ],
      portfolio: [
        // Klerk.ru
        {
          title: 'Klerk.ru',
          type: 'website',
          tags: ['Front end'],
          about: `Currently working as a front end developer for this project.`,
          preview: require('@/assets/images/portfolio/klerk/preview.jpg'),
          full: [require('@/assets/images/portfolio/klerk/full-1.jpg')],
          client: {
            name: 'Klerk.ru',
            link: 'https://klerk.ru'
          },
          skills: ['PHP', 'Vue.js', 'Vuex', 'REST API', 'HTML', 'JavaScript'],
          roles: ['Front end developer', 'Back end developer'],
          links: [
            {
              title: 'Website',
              link: `https://klerk.ru`
            }
          ]
        },
        // Первый парфюмерный Online
        {
          title: 'Первый парфюмерный Online',
          tags: ['Back end', 'Front end'],
          type: 'website',
          about: 'Online shop for premium perfumery',
          preview: require('@/assets/images/portfolio/1parfume/preview.jpg'),
          full: [
            require('@/assets/images/portfolio/1parfume/full-1.jpg'),
            require('@/assets/images/portfolio/1parfume/full-2.jpg'),
            require('@/assets/images/portfolio/1parfume/full-3.jpg')
          ],
          client: {
            name: 'DVIGA',
            link: 'https://dviga.marketing/'
          },
          skills: ['1C-Bitrix', 'PHP', 'MySQL', 'HTML', 'CSS (SASS, SCSS)'],
          roles: [
            'Front end developer',
            'Back end developer',
            'Project manager'
          ],
          links: [
            {
              title: 'Website',
              link: `https://1parfume.com/`
            }
          ]
        },
        // Приморская газета
        {
          title: 'Приморская газета',
          tags: ['Back end', 'Front end'],
          type: 'website',
          about: 'The official news of the Primorsky Territory',
          preview: require('@/assets/images/portfolio/primgazeta/preview.jpeg'),
          full: [
            require('@/assets/images/portfolio/primgazeta/full-1.jpg'),
            require('@/assets/images/portfolio/primgazeta/full-2.jpg'),
            require('@/assets/images/portfolio/primgazeta/full-3.jpg')
          ],
          client: {
            name: 'RENFORT',
            link: 'http://renfort.pro/'
          },
          skills: [
            'Laravel',
            'PHP',
            'PostgreSQL',
            'HTML',
            'CSS (SASS, SCSS)',
            'JavaScript'
          ],
          roles: ['Back end developer', 'Project manager'],
          links: [
            {
              title: 'Website',
              link: `http://primgazeta.ru/`
            }
          ]
        },
        // Птицы Амура
        {
          title: 'Птицы Амура',
          type: 'mobile',
          tags: ['Management'],
          preview: require('@/assets/images/portfolio/amur-birds/preview.png'),
          full: [
            require('@/assets/images/portfolio/amur-birds/preview.png'),
            require('@/assets/images/portfolio/amur-birds/full-1.png'),
            require('@/assets/images/portfolio/amur-birds/full-2.png')
          ],
          client: {
            name: 'RENFORT',
            link: 'http://renfort.pro/'
          },
          roles: ['Team lead', 'Consultant'],
          links: [
            {
              title: 'AppStore',
              link: `https://apps.apple.com/us/app/%D0%BF%D1%82%D0%B8%D1%86%D1%8B-%D0%B0%D0%BC%D1%83%D1%80%D0%B0-wwf/id1406838610`
            },
            {
              title: 'Google Play',
              link:
                'https://play.google.com/store/apps/details?id=ru.wwf.dvbirds&hl=ru'
            }
          ]
        },
        // OstOptik
        {
          title: 'OstOptik',
          tags: ['Back end', 'Front end', 'Management'],
          type: 'website',
          about: 'A company website for optics retailer',
          preview: require('@/assets/images/portfolio/ost-optik/preview.png'),
          full: [
            require('@/assets/images/portfolio/ost-optik/full-1.jpg'),
            require('@/assets/images/portfolio/ost-optik/full-2.jpg'),
            require('@/assets/images/portfolio/ost-optik/full-3.jpg')
          ],
          client: {
            name: 'DVIGA',
            link: 'https://dviga.marketing/'
          },
          skills: ['Vue.js', 'Vuex', 'Laravel', 'Bulma'],
          roles: ['Front end developer', 'Team leader'],
          links: [
            {
              title: 'Website',
              link: `https://ostoptik.ru/`
            }
          ]
        },
        // Цветы жизни
        {
          title: 'Цветы жизни',
          tags: ['Mobile'],
          type: 'mobile',
          about: `My job was to reanimate this application, update it to the new version of React Native, fix some bugs and add some functionality. And then to deploy this app to AppStore`,
          preview: require('@/assets/images/portfolio/flowers-of-life/preview.png'),
          full: [
            require('@/assets/images/portfolio/flowers-of-life/full-1.png'),
            require('@/assets/images/portfolio/flowers-of-life/full-2.png'),
            require('@/assets/images/portfolio/flowers-of-life/full-3.png'),
            require('@/assets/images/portfolio/flowers-of-life/full-4.png')
          ],
          client: {
            name: 'Websee',
            link: 'http://websee.ru/'
          },
          skills: ['React Native', 'Redux', 'JavaScript', 'REST API'],
          roles: ['Mobile developer'],
          links: [
            {
              title: 'AppStore',
              link: `https://apps.apple.com/ai/app/%D1%86%D0%B2%D0%B5%D1%82%D1%8B-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/id1433864597`
            }
          ]
        },
        // Financial Accounting tool
        {
          title: 'Financial Accounting tool',
          type: 'website',
          tags: ['Back end', 'Front end', 'Administration'],
          about: `My job was to develop a web-based application, that would allow to financially plan and manage company cashflow and commitments. The application was also supposed to build reports based on this data. While developing, I was faced with such challenges as: <br />
                  -- user permission management <br />
                  -- database backup <br />
                  -- the application should be self hosted, so I created an installer. <br />
                  -- creating PDF invoices
                  `,
          preview: require('@/assets/images/portfolio/finance/preview.jpg'),
          full: [
            require('@/assets/images/portfolio/finance/full-1.jpg'),
            require('@/assets/images/portfolio/finance/full-2.jpg')
          ],
          client: {
            name: 'FrrCode',
            link: 'https://frrcode.com/'
          },
          skills: [
            'Vue.js',
            'Vuex',
            'Node.js',
            'Koa.js',
            'MongoDB',
            'Dockkr',
            'Bash'
          ],
          roles: [
            'Front end developer',
            'Back end developer',
            'Project manager'
          ]
        },
        // Mikhail Company
        {
          title: 'Mikhail Company',
          type: 'website',
          about: 'A tool to place bids on japanese auto auctions',
          tags: ['Back end', 'Front end', 'Management', 'Administration'],
          preview: require('@/assets/images/portfolio/mikhail/preview.png'),
          full: [
            require('@/assets/images/portfolio/mikhail/full-1.png'),
            require('@/assets/images/portfolio/mikhail/full-2.png')
          ],
          client: {
            name: 'Mikhail company',
            link: 'http://mkcarsjp.com/'
          },
          skills: ['Vue.js', 'Vuex'],
          roles: ['Front end developer', 'Team leader'],
          links: [
            {
              title: 'Website',
              link: `http://mkcarsjp.com/`
            }
          ]
        },
        // Ha-na
        {
          title: 'Ha-na',
          type: 'website',
          tags: ['Front end'],
          about: `I was asked to make develop some functionality for Hana Kim - a product designer to her website. <br/>
                  The main 3 things I did: <br/>
                  1. I added a beautiful contact me form, designed by Hana. You should check it out :-) <br/>
                  2. I added passcode protection to the projects. So now you can view the project only if you know the passcode. <br/>
                  3. I added testimonials page <br/>`,
          preview: require('@/assets/images/portfolio/ha-na/preview.png'),
          full: [
            require('@/assets/images/portfolio/ha-na/full-1.jpg'),
            require('@/assets/images/portfolio/ha-na/full-2.jpg'),
            require('@/assets/images/portfolio/ha-na/full-3.jpg')
          ],
          client: {
            name: 'Ha-na',
            link: 'http://nameishana.com'
          },
          skills: ['PHP', 'Jquery', 'HTML', 'JavaScript'],
          roles: ['Front end developer', 'Back end developer'],
          links: [
            {
              title: 'Website',
              link: `http://nameishana.com`
            }
          ]
        }
        // КамчатПрофитБанк
        // Cred
        // Dream drivers
        // Zuumph
        // Logistic force
      ],
      contacts: {
        email: {
          value: 'mrzueck@gmail.com'
        },
        tel: {
          value: '+972 58-5007535'
        }
      }
    }
  },
  mounted() {
    if (process.browser) {
      // eslint-disable-next-line dot-notation
      window['onNuxtReady'](() => {
        this.isLoading = false
      })
    } else {
      this.isLoading = false
    }
  }
}
</script>
