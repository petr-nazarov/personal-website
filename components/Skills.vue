<template>
  <div class="container wrapper">
    <h2 class="title is-2 has-text-centered">Skills</h2>
    <div class="columns">
      <div v-for="(group, index) in skills" :key="index" class="column">
        <div class="skill-group">
          <p class="group-title">{{ group.title }}:</p>
          <div class="skills tags">
            <span
              v-for="(skill, index) in group.skills"
              :key="index"
              class="skill tag"
            >
              {{ skill }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Skills',
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      //
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.wrapper {
  padding-bottom: 64px;
}
.title {
  margin-top: 64px;
}
.group-title {
  font-weight: 700;
  margin-bottom: 8px;
}
</style>
