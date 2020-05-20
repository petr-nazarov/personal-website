<template>
  <div class="wrapper portfolio-wrapper">
    <div class="container">
      <h2
        id="portfolio"
        class="title is-2 has-text-centered"
        data-aos="fade-right"
      >
        Portfolio
      </h2>
      <div class="portfolio__taglist">
        <div class="tags are-large">
          <a
            v-for="(tag, tagIndex) in tags"
            :key="tagIndex"
            href="#"
            class="tag"
            :class="{
              'is-dark': selectedTag == tag,
              'is-light': selectedTag != tag
            }"
            @click.prevent="onTagSelect(tag)"
          >
            {{ tag }}
          </a>
        </div>
      </div>
      <div class="columns is-multiline potfolio__container">
        <div v-for="(item, index) in data" :key="index" class="column is-3">
          <div
            class="portfolio__element"
            data-aos="zoom-in"
            @click="openModal(item.title)"
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
    <div class="modal" :class="{ 'is-active': modalActive }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="closeModal"
        ></button>
        <section class="modal-card-body">
          <template v-if="modalActive">
            <portfolio-element :element="portfolioElement" />
          </template>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PortfolioElement from './PortfolioElement.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioElement
  },
  props: {
    portfolio: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      data: null,
      tags: [
        'All',
        'Back end',
        'Administration',
        'Front end',
        'Mobile',
        'Management'
      ],
      portfolioElement: {},
      modalActive: false,
      selectedTag: 'All'
    }
  },
  mounted() {
    this.filterPortfolio()
  },
  methods: {
    onTagSelect(tag) {
      this.selectedTag = tag
      this.filterPortfolio()
    },
    filterPortfolio() {
      let data = []
      if (this.selectedTag === 'All') {
        data = this.portfolio
      } else {
        data = this.portfolio.filter((el) => el.tags.includes(this.selectedTag))
      }

      if (data.length > 8) {
        data = data.slice(0, 8)
      }
      this.data = data
    },
    openModal(title: string) {
      const element = this.portfolio.find((el) => el.title === title)
      this.portfolioElement = element
      this.modalActive = true
    },
    closeModal() {
      this.modalActive = false
      this.portfolioElement = {}
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';

.portfolio {
  &__taglist {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
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
    border-radius: 16px;
  }
}
.portfolio-wrapper {
  position: relative;
}
.modal {
  position: fixed;
}
.modal-card {
  overflow-y: hidden;
  padding: 0 20px !important;
  border-radius: 16px;
  background: $white;
}
.modal-card-body {
  padding: 20px 0 !important;
  overflow-y: scroll;
}
.modal-close {
  position: absolute;
  z-index: 100;
}
</style>
