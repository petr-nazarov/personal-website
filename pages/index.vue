<template>
  <div>
    <v-header :contacts="contacts" />
    <about-me id="aboutme" :socials="socials" />
    <services id="services" />
    <!-- Timelines -->
    <div class="wrapper">
      <div class="container">
        <div class="columns">
          <div class="column">
            <timeline id="education" :elements="education" title="Education" />
          </div>
          <div class="column">
            <timeline
              id="employment"
              :elements="employment"
              title="Employment"
            />
          </div>
        </div>
      </div>
    </div>
    <hire-me />
    <skills id="skills" :skills="skills" />
    <portfolio id="portfolio" />
    <contact-me id="contactme" />
    <v-footer :contacts="contacts" :socials="socials" />
  </div>
</template>

<script lang="ts">
import VHeader from '~/components/Header.vue'
import AboutMe from '~/components/AboutMe.vue'
import Services from '~/components/Services.vue'
import Timeline from '~/components/Timeline.vue'
import Skills from '~/components/Skills.vue'
import ContactMe from '~/components/ContactMe.vue'
import VFooter from '~/components/Footer.vue'
import HireMe from '~/components/HireMe.vue'
import Portfolio from '~/components/Portfolio.vue'
export default {
  components: {
    VHeader,
    AboutMe,
    Services,
    Timeline,
    Skills,
    ContactMe,
    HireMe,
    Portfolio,
    VFooter
  },
  data() {
    return {
      socials: [
        {
          link: 'https://www.facebook.com/petrnazarov',
          icon: 'fa-facebook-f'
        },
        {
          link: 'https://www.instagram.com/nazarov.petr_97/',
          icon: 'fa-instagram'
        },
        {
          link: 'https://www.linkedin.com/in/nazarov-petr/',
          icon: 'fa-linkedin-in'
        },
        {
          link: 'https://github.com/nazarov-petr',
          icon: 'fa-github'
        },
        {
          link: 'https://medium.com/@mrzueck',
          icon: 'fa-medium-m'
        },
        {
          link: 'https://t.me/zueck',
          icon: 'fa-telegram-plane'
        },
        {
          link: 'https://wa.me/79140660444',
          icon: 'fa-whatsapp'
        }
      ],
      education: [
        {
          date: '2019 - now',
          title: 'Ulpan, Tel-Aviv, Israel',
          subtitle: 'Learning Hebrew at Ulpan'
        },
        {
          date: '2018 - now',
          title: 'Far Eastern Federal University',
          subtitle: 'Master of Applied Mathematics and Computer Science'
        },
        {
          date: '2014 - 2018',
          title: 'Far Eastern Federal University',
          subtitle: 'Bachelor of Mathematics and Computer Sciences'
        },
        {
          date: '2012 - 2014',
          title: `Far Eastern Federal University - College of Humanities and Economics`,
          subtitle: 'Information Technologies class'
        }
      ],
      employment: [
        {
          date: '2016 - now',
          title: 'Founded FrrCode.com agency',
          subtitle: `We develop Web and mobile applications for digital agencies. My main responsibility is to work with clients, manage the development of products`
        },
        {
          date: '2014 - 2016',
          title: 'LTD DVIGA',
          subtitle: `I was a lead developer at this company, and focused mostly on E-Comerce sites`
        },
        {
          date: '2012 - 2014',
          title: 'Freelance',
          subtitle: 'Developed of personal web-sites and E-Comerce sites'
        }
      ],
      skills: [
        {
          title: 'Languages',
          skills: [
            'English (Advanced)',
            'Russian (Native)',
            'Hebrew (Beginner)'
          ]
        },
        {
          title: 'Front end',
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
            'Bootstrap'
          ]
        },
        {
          title: 'Back end',
          skills: [
            'Node.js',
            'Koa.js',
            'Express.js',
            'Strapi.io',
            'PHP',
            'Laravel',
            '1C-Bitrix'
          ]
        },
        {
          title: 'Mobile',
          skills: ['React Native', 'React Native Redux', 'Native Script']
        },
        {
          title: 'Databases',
          skills: ['MongoDB', 'MySQL', 'SQLite', 'PostgreSQL']
        },
        {
          title: 'Other',
          skills: [
            'Java',
            'Typescript',
            'PWA',
            'Docker',
            'Git',
            'REST API',
            'Postman',
            'Photoshop',
            'Sketch',
            'Figma',
            'Avocode'
          ]
        }
      ],
      contacts: {
        email: {
          value: 'mrzueck@gmail.com'
        },
        tel: {
          value: '+7 914 066 - 0444'
        }
      }
    }
  }
}
</script>
