<template>
  <img :class="$style.Button" src="/app-store-badge.svg" alt="Download on Google Play" />
</template>

<script lang="ts">
export default {
  name: 'VueIconAppStore',
};
</script>

<style lang="scss" module>
.Button {
  margin: 0.22em;
}
</style>
