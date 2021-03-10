<template>
  <div>
    <h6 class="title">{{ element.title }}</h6>
    <b-carousel
      :pause-info="false"
      icon-pack="fas"
      icon-size="is-medium"
      icon-prev="arrow-circle-left"
      icon-next="arrow-circle-right"
      indicator-style="is-dots"
    >
      <b-carousel-item v-for="(img, i) in element.full" :key="i">
        <img :src="img" :alt="element.title" class="modal__image" />
      </b-carousel-item>
    </b-carousel>
    <div v-if="element.about && element.about.length > 0" class="modal__block">
      <p><b>About this project:</b></p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="element.about"></p>
    </div>
    <div class="modal__block">
      <h6 class="modal__block-title modal__block-title_for-tags">My role:</h6>
      <p class="tags modal__tags">
        <span
          v-for="(role, index) in element.roles"
          :key="index"
          class="tag is-medium modal__tag"
        >
          {{ role }}
        </span>
      </p>
    </div>
    <div
      v-if="element.skills && element.skills.length > 0"
      class="modal__block"
    >
      <h6 class="modal__block-title modal__block-title_for-tags">
        Skills applied:
      </h6>
      <p class="tags modal__tags">
        <span
          v-for="(skill, index) in element.skills"
          :key="index"
          class="tag is-medium modal__tag"
        >
          {{ skill }}
        </span>
      </p>
    </div>
    <div v-if="element.links && element.links.length > 0" class="modal__block">
      <h6 class="modal__block-title">Links:</h6>
      <p v-for="(link, index) in element.links" :key="index">
        <a :href="link.link" class="UI-external-link" target="_blank">
          {{ link.title }}
          <font-awesome-icon
            size="sm"
            class="UI-external-link__icon"
            :icon="['fas', 'external-link-alt']"
          />
        </a>
      </p>
    </div>
    <div class="modal__block">
      <h6 class="modal__block-title">Developed for:</h6>
      <a :href="element.client.link" class="UI-external-link" target="_blank">
        {{ element.client.name }}
        <font-awesome-icon
          size="sm"
          class="UI-external-link__icon"
          :icon="['fas', 'external-link-alt']"
        />
      </a>
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
    height: 360px;
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
    &_for-tags {
      margin-bottom: 4px;
    }
  }
  &__tags {
    margin-bottom: 0 !important;
  }
  &__tag {
    margin-bottom: 0 !important;
  }
}
</style>
