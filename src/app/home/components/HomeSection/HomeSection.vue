<template>
  <section :id="id" :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <div
      :class="$style.background"
      v-rellax="{
        speed: 4,
      }"
    ></div>
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <div :class="$style.grid">
            <vue-image :src="image" :native="false" :class="$style.image" />
          </div>
        </vue-grid-item>
        <vue-grid-item :class="$style.text"><slot /></vue-grid-item>
      </vue-grid-row>
    </vue-grid>
    <!-- <div class="Next">Next</div> -->
  </section>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';

export default {
  name: 'HomeSection',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    flip: {
      type: Boolean,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.homeSection {
  min-height: 100vh;
  padding: $space-48 0;
  box-shadow: 2px 0px #4c6075, -17px -9px 0px #ec7225, -20px -4px 5px 5px #191f26;
  padding-top: $space-84;

  @include mediaMin(tabletPortrait) {
    padding: $space-84 0;
  }

  //background: rgb(240, 240, 240);//$brand-bg-color;
  //background: #4b6c96; //$brand-bg-color;

  // .background {
  //   background-image: url("/snow.jpg");
  //   width: 100%;
  //   height: 200%;
  //   background-size: cover;
  //   position: fixed;
  //   z-index: -11;
  // }
}

.alternative {
  background: #253547; // $brand-bg-color-variant;
}

.flip {
  color: rgb(255, 255, 255);
  //border-radius: 1em;
  //background: rgb(240, 240, 240);//$brand-bg-color;

  @include mediaMin(tabletPortrait) {
    flex-direction: row-reverse;
  }

  .image {
    //transform: rotate(2deg);
  }
}

div.Next {
  position: sticky;
  bottom: 0;
}

div.grid {
  //background-image: url("/grid.png");
  //background-position-x: center;
  background-size: cover;
}

.image {
  min-height: 256px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: $space-32;
  position: relative;

  //transform: rotate(-2deg);

  //padding-right: 1em;
  //padding-left: 1em;

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
  }
}

/*
.image:before
{
  z-index: -1;
  position: absolute;
  content: "";
    bottom: 16%;
  left: 0.1em;
  width: 50%;
  top: 80%;
  max-width:300px;
  box-shadow: 20px 16px 12px #38536d;
  transform: rotate(-3deg);

  @include mediaMin(tabletPortrait) {
    bottom: 18px;
  }
}
*/
</style>
