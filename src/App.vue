<template>
  <main :style="styleObject">
    <div class="profile-block">
      <img
        alt="Profile Image"
        :src="avatarImage"
        class="profile-image"
        :style="styleObject"
      />
      <h1
        class="username"
        :style="styleObject"
      >{{ profileJson.username }}</h1>
      <h2
        class="context"
        :style="styleObject"
      >{{ profileJson.context }}</h2>
    </div>
    <div class="social-button-block">
      <SocialButton
        v-for="social in profileJson.socialsList"
        :key="social.name"
        :text="social.name"
        :url="social.url"
      />
    </div>
  </main>
</template>

<script>
import SocialButton from '@/components/SocialButton.vue'
import profileJson from '@/assets/profile.json'
import avatarImage from '@/assets/avatar.png?url'

export default {
  name: 'App',
  components: {
    SocialButton
  },
  computed: {
    styleObject() {
      return {
        '--background-liner-color-1': profileJson.style.backgroundLinerColor[0],
        '--background-liner-color-2': profileJson.style.backgroundLinerColor[1],
        '--font-color': profileJson.style.fontColor,
        '--profile-border-color': profileJson.style.profileBorderColor,
      };
    },
  },
  setup() {
    return {
      profileJson,
      avatarImage
    }
  }
}
</script>

<style>
html, body, #app, main {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}

main {
  overflow: auto;

  background: linear-gradient(to bottom, var(--background-liner-color-1), var(--background-liner-color-2))
}

.profile-block {
  padding-top: 60px;
  margin-bottom: 20px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;

  border: 5px solid var(--profile-border-color);
}

.username {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: .5rem;

  color: var(--font-color);
}
.context {
  font-size: 1rem;
  margin: 0;

  color: var(--font-color);
}

.social-button-block {
  margin: 0 1rem;
  padding-bottom: 1rem;
}
</style>
