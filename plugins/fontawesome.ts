import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faMobileAlt, faChalkboardTeacher, faUsers, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome, faFacebookF, faInstagram, faLinkedinIn, faGithub, faMediumM, faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faDesktop)
library.add(faMobileAlt)
library.add(faChalkboardTeacher)
library.add(faUsers)
library.add(faEnvelope)
library.add(faPhone)

library.add(faFontAwesome)
library.add(faFacebookF)
library.add(faInstagram)
library.add(faLinkedinIn)
library.add(faGithub)
library.add(faMediumM)
library.add(faTelegramPlane)
library.add(faWhatsapp)

Vue.component('font-awesome-icon', FontAwesomeIcon)
