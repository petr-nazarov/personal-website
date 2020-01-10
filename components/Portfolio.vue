<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="title is-2 has-text-centered">
        Portfolio
      </h2>
      <div class="columns is-multiline potfolio__container">
        <div
          v-for="(item, index) in portfolio"
          :key="index"
          class="column is-4"
        >
          <div class="portfolio__element" @click="openModal(index)">
            <div class="portfolio__magnifire has-text-centered">
              <i class="fas fa-search-plus fa-3x"></i>
            </div>
            <img
              :src="item.preview"
              :alt="item.title"
              class="portfolio__preview"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PortfolioElement from './PortfolioElement.vue'

export default {
  name: 'Portfolio',
  data() {
    return {
      portfolio: [
        {
          title: 'Птицы Амура',
          type: 'mobile',
          about: 'asdadsd',
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
        {
          title: 'Mikhail Company',
          type: 'website',
          about: 'asdadsd',
          preview: require('@/assets/images/portfolio/mikhail/preview.png'),
          full: [
            require('@/assets/images/portfolio/mikhail/preview.png'),
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
        {
          title: 'OstOptik',
          type: 'website',
          about: 'asdadsd',
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
        {
          title: 'Ha-na',
          type: 'website',
          about: `I was asked to make develop some functionality for Hana Kim - a product designer to her website.
                  The main 3 things I did:
                  1. I added a beautiful contact me form, designed by Hana. You should check it out :-)
                  2. I added passcode protection to the projects. So now you can view the project only if you know the passcode.
                  3. I added testimonials page`,
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
        },
        {
          title: 'Financial Accounting tool',
          type: 'website',
          about: `My job was to develop a web-based application, that would allow to financially plan and manage company cashflow and commitments. The application was also supposed to build reports based on this data. While developing, I was faced with such challenges as:
                  -- user permission management
                  -- database backup
                  -- the application should be self hosted, so I created an installer.
                  -- creating PDF invoices
                  I used the following stack of technologies:
                  -- Node.js (Koa.js)
                  -- mongoDB + mongoose
                  -- Vue.js (Nuxt.js)
                  -- Dockker
                  -- bash installer`,
          preview: require('@/assets/images/portfolio/finance/full-1.jpg'),
          full: [
            require('@/assets/images/portfolio/finance/full-1.jpg'),
            require('@/assets/images/portfolio/finance/full-2.jpg')
          ],
          client: {
            name: 'FrrCode',
            link: 'https://frrcode.com/'
          },
          skills: ['Vue.js', 'Vuex', 'Node.js', 'Koa.js', 'MongoDB'],
          roles: [
            'Front end developer',
            'Back end developer',
            'Project manager'
          ]
        },
        {
          title: 'Цветы жизни',
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
        }
      ]
    }
  },
  methods: {
    openModal(index: number) {
      this.$buefy.modal.open({
        parent: this,
        props: {
          element: this.portfolio[index]
        },
        component: PortfolioElement
        // width: 320
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
/deep/ .modal-close {
  display: none;
}
.portfolio {
  &__container {
    //
  }
  &__magnifire {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
  }
  &__element {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    &:hover .portfolio__magnifire {
      display: flex;
    }
  }
  &__preview {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
