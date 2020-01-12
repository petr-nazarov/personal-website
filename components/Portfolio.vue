<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="title is-2 has-text-centered" data-aos="fade-right">
        Portfolio
      </h2>
      <div class="columns is-multiline potfolio__container">
        <div
          v-for="(item, index) in portfolio"
          :key="index"
          class="column is-4"
        >
          <div
            @click="openModal(index)"
            class="portfolio__element"
            data-aos="zoom-in"
          >
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
  props: {
    portfolio: {
      type: Array,
      required: false,
      default: () => []
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
  &__overlay {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
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
