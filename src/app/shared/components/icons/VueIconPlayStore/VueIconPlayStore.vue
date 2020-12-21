<template>
  <img :class="$style.Button" src="/google-play-badge.svg" alt="Download on Google Play" />
</template>

<script lang="ts">
export default {
  name: 'VueIconPlayStore',
};
</script>

<style lang="scss" module>
.Button {
  margin: 0.21em;
}
</style>
