<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="title is-2 has-text-centered">CONTACT ME</h2>
      <p class="has-text-centered">
        Please fill the form below. I will contact you as soon as possible.
      </p>
      <form>
        <div class="columns form">
          <div class="column">
            <input
              class="input form-input"
              required="true"
              type="name"
              name="name"
              placeholder="Your Name"
            />
            <input
              class="input form-input form-input_margin"
              required="true"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="column">
            <textarea
              class="textarea form-input form-input__textarea"
              required="true"
              name="msg"
              placeholder="e.g. I want to work with you!"
            ></textarea>
          </div>
        </div>
        <div class="has-text-centered">
          <input type="submit" text="Send message" class="button UI-button" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactMe',
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
  background-color: #333;
  color: $white;
  overflow: hidden;
  padding-bottom: 64px;
}
.title {
  margin-top: 64px;
  color: $white;
}
.form {
  margin-top: 16px;
}
.form-input {
  color: $white;
  background: none;
  border: 2px solid #333;
  border-radius: 0;
  border-bottom: 2px solid #bbb;
  outline: none;
  &::placeholder {
    color: $white;
  }
  &__textarea {
    height: 110px;
  }
  &_margin {
    margin-top: 49px;
  }
}
</style>
