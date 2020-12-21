<template>
  <div :class="$style.vueNavBar" ref="nav">
    <img src="voteid_white.svg" width="38" alt="VoteID" />
    <div>
      <slot></slot>
      <slot name="left" :class="$style.Left" />
    </div>
    <!--
    <div>
      <slot name="middle" />
    </div>
    -->
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
var prevScroll: number = 0;
var curScroll: number = 0;
var direction: number = 0;
var prevDirection: number = 0;

export default {
  name: 'VueNavBar',
  /*
  props: {
    prevScroll: {
      type: Number
    },// = w.scrollY || doc.scrollTop;
    curScroll: {
      type: Number
    },
    direction: {
      type: Number
    },// = 0;
    prevDirection: {
      type: Number
    }// = 0;
  },
  */
  mounted() {
    //prevScroll = 0;
    prevScroll = window.scrollY || document.documentElement.scrollTop;
    console.info('nav mounted');

    window.addEventListener('scroll', this.checkScroll);
  },
  methods: {
    checkScroll() {
      /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */

      curScroll = window.scrollY || document.documentElement.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        this.toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    },

    toggleHeader(direction: number, curScroll: number) {
      if (direction === 2 && curScroll > 52) {
        this.$refs.nav.classList.add('hidden');
        prevDirection = direction;
      } else if (direction === 1) {
        this.$refs.nav.classList.remove('hidden');
        prevDirection = direction;
      }
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueNavBar.v-hidden {
  top: -5em !important;
}

.Left {
  background: #ec7225;
  padding: inherit;

  &::before {
    content: 'before';
  }
}

.vueNavBar {
  width: $nav-bar-width;
  min-height: $nav-bar-height;
  color: $nav-bar-color;
  padding: $nav-bar-padding;
  z-index: $nav-bar-index;
  position: fixed;
  top: 0;
  left: 0;
  //background: $nav-bar-bg;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  transition: all 0.5s ease;

  div {
    flex: 0 0 33.333333%;
    align-content: center;
    justify-content: center;
    display: flex;

    &:last-child {
      justify-content: flex-end;
    }
  }
}

/* PSEUDO ELEMENTS to create drop-shadow */
.vueNavBar::before,
.vueNavBar::after {
  content: '';
  display: block;
  height: 16px;
  /* make pseudo elements sticky as well */
  position: sticky;
  -webkit-position: sticky;
}

/* SHADOW */
.vueNavBar::before {
  top: 48px; /* shadow is at bottom of element, so at 48 + 16 = 64px */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}

/* COVER */
.vueNavBar::after {
  /* linear gradient from background color to transparent acts as
     a transition effect so the shadow appears gradually */
  background: linear-gradient(white 10%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.4) 70%, transparent);
  top: 0;
  /* cover should fall over shadow */
  z-index: 2;
}
</style>
