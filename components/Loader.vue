<template>
  <div class="loader__wrapper">
    <img :src="require('@/assets/images/icons/loader.gif')" alt="loading..." />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Loader'
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.loader {
  &__wrapper {
    position: fixed;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: $white;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
