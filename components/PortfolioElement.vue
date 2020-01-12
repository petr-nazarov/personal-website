<template>
  <div>
    <div class="modal__wrapper">
      <div class="columns">
        <div class="column">
          <b-carousel
            :pause-info="false"
            icon-pack="fa"
            indicator-style="is-lines"
          >
            <b-carousel-item v-for="(img, i) in element.full" :key="i">
              <img :src="img" :alt="element.title" class="modal__image" />
            </b-carousel-item>
          </b-carousel>
        </div>
        <div class="column">
          <h6 class="title">{{ element.title }}</h6>
          <div
            v-if="element.about && element.about.length > 0"
            class="modal__block"
          >
            <p><b>About this project:</b></p>
            <p v-html="element.about"></p>
          </div>
          <div class="modal__block">
            <h6 class="modal__block-title">My role:</h6>
            <p class="tags modal__tags">
              <span
                v-for="(role, index) in element.roles"
                :key="index"
                class="tag modal__tag"
              >
                {{ role }}
              </span>
            </p>
          </div>
          <div
            v-if="element.skills && element.skills.length > 0"
            class="modal__block"
          >
            <h6 class="modal__block-title">Skills applied:</h6>
            <p class="tags modal__tags">
              <span
                v-for="(skill, index) in element.skills"
                :key="index"
                class="tag modal__tag"
              >
                {{ skill }}
              </span>
            </p>
          </div>
          <div
            v-if="element.links && element.links.length > 0"
            class="modal__block"
          >
            <h6 class="modal__block-title">Links:</h6>
            <p v-for="(link, index) in element.links" :key="index">
              <a :href="link.link" target="_blank">{{ link.title }} </a>
            </p>
          </div>
          <div class="modal__block">
            <h6 class="modal__block-title">Developed for:</h6>
            <a :href="element.client.link" target="_blank">
              {{ element.client.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PortfolioElement',
  props: {
    element: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.animation-content {
  z-index: 2;
}
.modal {
  &__wrapper {
    background-color: $white;
    padding: 20px;
  }
  &__image {
    width: 100%;
    height: 600px;
    margin-bottom: 16px;
    object-fit: contain;

    @media (max-width: $mobile) {
      height: 400px;
    }
  }
  &__block {
    margin-bottom: 8px;
  }
  &__block-title {
    font-weight: bold;
  }
  &__tags {
    margin-bottom: 0 !important;
  }
  &__tag {
    margin-bottom: 0 !important;
  }
}
</style>
