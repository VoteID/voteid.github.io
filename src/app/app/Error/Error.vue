<template>
  <div :class="$style.error">
    <div :class="$style.subTitle">
      <vue-headline level="1">Error</vue-headline>
      <vue-headline level="3">Try again later!</vue-headline>
    </div>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'vuesion - an error occurred',
    meta: [
      {
        name: 'robots',
        content: 'NOINDEX,NOFOLLOW',
      },
    ],
  },
  name: 'Error',
  components: { VueHeadline },
  props: {},
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.error {
  padding-top: $nav-bar-height;
  text-align: center;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 25%;
  z-index: 1;
}

.subTitle {
  background: #fce02b;
  width: 100%;
  font-size: medium;
  font-weight: 500;
  color: #000;
  padding: 0.3em;

  @include mediaMin(tabletPortrait) {
    margin-left: 10em;
    margin-right: 10em;
  }
}
</style>
