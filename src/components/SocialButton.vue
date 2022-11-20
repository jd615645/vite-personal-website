<template>
  <a
    :href="url"
    target="_blank"
    class="social-link"
    :style="styleObject"
  >
    <div
      class="social-button"
      :style="styleObject"
    >
      {{ text }}
    </div>
  </a>
</template>

<script>
import profileJson from '@/assets/profile.json'

export default {
  name: 'SocialButton',
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    styleObject() {
      return {
        '--button-font-color': profileJson.style.button.fontColor,
        '--button-background-color': profileJson.style.button.backgroundColor,
        '--button-border-color': profileJson.style.button.borderColor,
        '--button-font-color-hover': profileJson.style.button.hover.fontColor,
        '--button-background-color-hover': profileJson.style.button.hover.backgroundColor,
        '--button-border-color-hover': profileJson.style.button.hover.borderColor,
      };
    },
  },
  setup() {
    return {
      profileJson
    }
  },
}
</script>

<style scoped>
.social-link {
  text-decoration: none;
  color: var(--button-font-color);
}

.social-button {
  padding: 1rem 2.5rem;
  border: 1px solid var(--button-border-color);
  border-radius: 50px;

  font-weight: 700;

  margin: 0 auto .5rem;

  max-width: 600px;

  transition: background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
}

.social-button:hover {
  background: var(--button-background-color-hover);

  color: var(--button-font-color-hover);
}
</style>
