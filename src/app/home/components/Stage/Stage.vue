<template>
  <div
    :class="$style.stage"
    ref="stage"
    v-rellax="{
      speed: -4,
    }"
  >
    <!-- <canvas :class="$style.canvas" ref="canvas"></canvas> -->

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <div>
            <img :class="$style.logo" src="pro1.png" alt="voteid" width="1300" height="856" />
 
          </div>
          <vue-headline level="1" :class="$style.glitchTitle" data-text="VoteID">VoteID</vue-headline>
          <div :class="$style.subTitle">
            {{
              $t(
                'App.core.description' /* The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices */,
              )
            }}
          </div>

          <br />

          <a :class="$style.github" href="#" target="_blank" rel="noopener" aria-label="Get it on Google Play">
            <vue-icon-play-store>
              <!-- <div :class="$style.comingsoon"/> -->
            </vue-icon-play-store>
          </a>
          <a :class="$style.github" href="#" target="_blank" rel="noopener" aria-label="Get it on App Store">
            <vue-icon-app-store>
              <!-- <div :class="$style.comingsoon"/> -->
            </vue-icon-app-store>
          </a>

        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { CircleAnimation } from '../../../shared/animations/CircleAnimation';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueIconPlayStore from '@components/icons/VueIconPlayStore/VueIconPlayStore.vue';
import VueIconAppStore from '@components/icons/VueIconAppStore/VueIconAppStore.vue';

export default {
  components: { VueHeadline, VueIconGithub, VueGridItem, VueGridRow, VueGrid, VueIconPlayStore, VueIconAppStore },
  props: {
    disableParticles: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleResize() {
      /*
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: ClientRect =
        stage.getClientRects().length > 0
          ? stage.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as ClientRect);

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;
      */
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();
    /*
    if (!this.disableParticles) {
      CircleAnimation(this.$refs.canvas);
    }
    */
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.stage {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  //text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $space-84;

  img {
    max-width: 12.8rem;
  }

  img.logo {
    max-width: 26.6rem;
  }

  h1 {
    margin-bottom: $space-32;
    font-weight: $font-weight-light;
  }

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
    img.Button {
      max-width: 25.6rem;
    }

    img.logo {
      max-width: 40.6rem;
    }
  }
}

img.Button {
  max-width: 26.8rem !important;
}

.canvas {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
  }
}


/* Our mixin positions a copy of our text
directly on our existing text, while
also setting content to the appropriate
text set in the data-text attribute. */
@mixin glitchCopy { 
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
}

.glitchTitle {
  background: linear-gradient(to left, #2f3b4a00, #3b4e60 50%, #43546a00 100%, #333 75%);
	position: relative;
	color: white;
	//font-size: 4em;
	letter-spacing: .5em;
	/* Animation provies a slight random skew. Check bottom of doc
	for more information on how to random skew. */
	animation: glitch-skew 1s infinite linear alternate-reverse;
	
	// Creates a copy before our text. 
	&::before{
		// Duplicates our text with the mixin.
		@include glitchCopy;
		// Scoots text slightly to the left for the color offset.
		left: 2px;
		// Creates the color 'shadow' that happens on the glitch.
		text-shadow: -2px 0 #ff00c1;
		/* Creates an initial clip for our glitch. This works in
		a typical top,right,bottom,left fashion and creates a mask
		to only show a certain part of the glitch at a time. */
		clip: rect(44px, 450px, 56px, 0);
		/* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
		with an alternating animation to keep things fresh. */
		animation: glitch-anim 5s infinite linear alternate-reverse;
	}
	
	// Creates a copy after our text. Note comments from ::before.
	&::after {
		@include glitchCopy;
		left: -2px;
		text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
		animation: glitch-anim2 1s infinite linear alternate-reverse;
	}
}

/* Creates an animation with 20 steaps. For each step, it calculates 
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
			transform: skew((random(100) / 100) + deg);
    }
  }
}

// Same deal, just duplicated for ultra randomness.
@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
			transform: skew((random(100) / 100) + deg);
    }
  }
}

.subTitle {
  transform: rotate(2deg);
  background: #fce02b;
  font-size: medium;
  font-weight: 500;
  color: #000;
  padding: 0.3em;
  max-width: 32em;

  @include mediaMin(tabletPortrait) {
    margin-left: auto;
    margin-right: auto;
  }
}

.logo {
  height: auto;
  //width: 20em;
  max-width: 40rem;
  -webkit-filter: drop-shadow(1px 1px 5px #ccf05b);
  filter: drop-shadow(1px 1px 5px #ccf05b);
}

.player {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: auto;
  height: 100%;
}

.comingsoon {
  background-image: url('/comingsoon.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.downloads {
  display: flex;
  flex-direction: row;
}

.github {
  //display: contents;
  //font-size: $font-size-h1;
  /*display: inline-block;
  background: $brand-bg-color;
  */
  transition: $button-transition;
  transition-property: box-shadow, background-color;
  color: $brand-link-color;

  &:hover {
    box-shadow: $button-active-shadow;
  }

  i {
    height: $font-size-h1;
    width: $font-size-h1;
  }
}
</style>
