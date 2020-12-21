<template>
  <i>
    <img :class="$style.DiscordButton" src="/discord.svg" alt="Discord" width="36" />
  </i>
</template>

<script lang="ts">
export default {
  name: 'VueIconDiscordSquare',
};
</script>

<style lang="scss" module>
.DiscordButton {
  margin: 4px;
}
</style>
