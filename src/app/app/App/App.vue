<template>
  <div id="app" :class="$style.app">
    <div
      :class="$style.background"
      v-rellax="{
        speed: 4,
      }"
    ></div>
    <div
      :class="$style.glassWrapper"
      v-rellax="{
        speed: 4,
      }"
    >
      <div :class="$style.glass" />
    </div>
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      height="0"
      width="0"
      x="0px"
      y="0px"
      viewBox="0 0 490 490"
      style="enable-background:new 0 0 490 490;"
      xml:space="preserve"
    >
      <defs>
        <clipPath id="Hexagons" clipPathUnits="objectBoundingBox" transform="scale(0.032, 0.031)">
          <path
            d="M19.585,16.999c-0.572,0-1.099,0.312-1.372,0.813l-3.23,5.939c-0.253,0.465-0.253,1.025,0,1.491l3.23,5.938
			c0.273,0.502,0.8,0.815,1.372,0.815h6.3c0.572,0,1.1-0.313,1.372-0.815l3.231-5.938c0.253-0.467,0.253-1.027,0-1.493l-3.231-5.938
			c-0.272-0.502-0.8-0.814-1.372-0.814L19.585,16.999L19.585,16.999z M25.586,28.367c-0.225,0.391-0.642,0.632-1.092,0.632h-3.518
			c-0.449,0-0.866-0.241-1.092-0.631l-1.868-3.239c-0.226-0.391-0.226-0.87,0-1.261l1.868-3.239c0.226-0.39,0.643-0.63,1.092-0.63
			h3.518c0.45,0,0.867,0.24,1.092,0.631l1.868,3.239c0.225,0.39,0.225,0.869,0,1.259L25.586,28.367z"
          />
          <path
            d="M13.785,8.814c-0.273-0.502-0.8-0.815-1.372-0.815H6.111c-0.572,0-1.099,0.312-1.372,0.815l-3.23,5.939
			c-0.253,0.465-0.253,1.026,0,1.491l3.23,5.939c0.273,0.502,0.8,0.814,1.372,0.814h6.302c0.572,0,1.099-0.314,1.372-0.814
			l3.23-5.939c0.253-0.465,0.253-1.026,0-1.491L13.785,8.814z"
          />
          <path
            d="M25.885,14.999c0.572,0,1.1-0.313,1.372-0.815l3.231-5.939c0.253-0.466,0.253-1.027,0-1.493l-3.231-5.938
			C26.985,0.312,26.458,0,25.885,0h-6.3c-0.572,0-1.099,0.312-1.372,0.814l-3.23,5.939c-0.253,0.465-0.253,1.026,0,1.491l3.23,5.94
			c0.273,0.502,0.8,0.815,1.372,0.815H25.885z"
          />
        </clipPath>
      </defs>
    </svg>
    <vue-notification-stack class="navstack" />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar>
      <!--
      <vue-sidebar>
        <vue-sidebar-group title="Languages">
          <vue-sidebar-group-item>
            <vue-select name="lang" id="lang" :options="languages" @input="localeSwitch" :value="getLocale" />
          </vue-sidebar-group-item>
        </vue-sidebar-group>

        <vue-sidebar-group title="Navigation">
          <vue-sidebar-group-item to="/">
            <vue-icon-code />
            Home
          </vue-sidebar-group-item>

          <vue-sidebar-group-item :to="{ name: 'counter' }">
            <vue-icon-hashtag />
            VueX Example
          </vue-sidebar-group-item>

          <vue-sidebar-group-item :to="{ name: 'form' }">
            <vue-icon-hashtag />
            Form Example
          </vue-sidebar-group-item>
        </vue-sidebar-group>

        <vue-sidebar-group title="Documentation">
          <vue-sidebar-group-item>
            <a href="https://vuesion.github.io/docs/en/">
              <vue-icon-book />
              Documentation
            </a>
          </vue-sidebar-group-item>

          <vue-sidebar-group-item>
            <a href="/storybook/?path=/story/design-system-design-system--intro">
              <vue-icon-book />
              Design System
            </a>
          </vue-sidebar-group-item>

          <vue-sidebar-group-item>
            <a href="/storybook/?path=/story/atoms-badge--badge-variants">
              <vue-icon-puzzle-piece />
              Components
            </a>
          </vue-sidebar-group-item>
        </vue-sidebar-group>

        <vue-sidebar-group title="Community">
          <vue-sidebar-group-item>
            <a href="https://github.com/vuesion/vuesion" target="_blank" rel="noopener">
              <vue-icon-github />
              Github
            </a>
          </vue-sidebar-group-item>

          <vue-sidebar-group-item>
            <a href="https://discord.gg/59x5cg2" target="_blank" rel="noopener"> Discord </a>
          </vue-sidebar-group-item>

          <vue-sidebar-group-item>
            <a href="https://slack-vuesion.herokuapp.com/" target="_blank" rel="noopener"> Slack </a>
          </vue-sidebar-group-item>

          <vue-sidebar-group-item>
            <a href="https://chat.vuejs.org/" target="_blank" rel="noopener"> VueLand </a>
          </vue-sidebar-group-item>

          <vue-sidebar-group-item>
            <a href="https://twitter.com/vuesion1" target="_blank" rel="noopener">
              <vue-icon-twitter-square />
              Twitter
            </a>
          </vue-sidebar-group-item>
        </vue-sidebar-group>
      </vue-sidebar>
      -->

      <div :class="$style.navbuttons">
        <vue-button slot="right" v-if="isAuthenticated === false" color="none" @click="showFeatures">
          Features
        </vue-button>

        <vue-button slot="right" v-if="isAuthenticated === false" color="none" @click="showUsecases">
          Usecases
        </vue-button>

        <vue-button slot="right" v-if="isAuthenticated === false" color="none" @click="showRoadmap">
          Roadmap
        </vue-button>
        <!--
        <vue-button slot="right" v-if="isAuthenticated === false" color="none" @click="showContactModal = true">
          Contact Us
        </vue-button>
        -->
        <!--
        <vue-button slot="left" v-if="isAuthenticated === false" color="primary" @click="showLoginModal = true">
          Login
        </vue-button>

        <vue-button slot="right" v-if="isAuthenticated" color="primary" @click="onLogout">
          Logout
        </vue-button>
        -->
      </div>
    </vue-nav-bar>

    <router-view :class="$style.content" />

    <vue-footer />

    <vue-cookie-consent
      current-version="1.0.0"
      :cookie-consent-version="cookieConsentVersion"
      :set-cookie-consent-version="setCookieConsentVersion"
    >
      We use cookies and other tracking technologies to improve your browsing experience on our website, to analyze our
      website traffic, and to understand where our visitors are coming from.
    </vue-cookie-consent>

    <vue-modal :show="showLoginModal" @close="showLoginModal = false">
      <login-form
        :loading="isLoginPending"
        :timeLeft="timeLeft"
        :url="url"
        :showQrCode="showQrCode"
        @request="onLoginRequest"
      />
    </vue-modal>

    <!--
    <vue-modal :show="showContactModal" @close="showContactModal = false">
      <login-form :loading="isLoginPending" :timeLeft="timeLeft" @request="onContactSubmit" />
    </vue-modal>
    -->
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { loadLocaleAsync } from '@shared/plugins/i18n/i18n';
import '@shared/designSystem/global.scss';
import VueNavBar from '@components/VueNavBar/VueNavBar.vue';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueFooter from '@components/VueFooter/VueFooter.vue';
import VueNotificationStack from '@components/VueNotificationStack/VueNotificationStack.vue';
import VueCookieConsent from '@components/VueCookieConsent/VueCookieConsent.vue';
import VueNavigationProgress from '@components/VueNavigationProgress/VueNavigationProgress.vue';
import VueSidebar from '@components/VueSidebar/VueSidebar.vue';
import VueSidebarGroup from '@components/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
import VueSidebarGroupItem from '@components/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';
import VueIconCode from '@components/icons/VueIconCode/VueIconCode.vue';
import VueIconBook from '@components/icons/VueIconBook/VueIconBook.vue';
import VueIconHashtag from '@components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconRedditSquare from '@components/icons/VueIconRedditSquare/VueIconRedditSquare.vue';
import VueSelect from '@components/VueSelect/VueSelect.vue';
import VueIconPuzzlePiece from '@components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueModal from '@components/VueModal/VueModal.vue';
import LoginForm from '@shared/modules/auth/LoginForm/LoginForm.vue';
import { addNotification } from '@components/VueNotificationStack/utils';
import { store } from '@/app/store';

//import * as voteidsdk from 'voteidsdk';
//import IPFS from 'ipfs';

const getMultiAddr = store.getters['lobby/getMultiAddr'];

export default {
  name: 'App',
  components: {
    LoginForm,
    VueModal,
    VueButton,
    VueIconPuzzlePiece,
    VueSelect,
    VueIconRedditSquare,
    VueIconGithub,
    VueIconHashtag,
    VueIconBook,
    VueIconCode,
    VueSidebarGroupItem,
    VueSidebarGroup,
    VueSidebar,
    VueNavigationProgress,
    VueCookieConsent,
    VueNavBar,
    VueGrid,
    VueGridItem,
    VueFooter,
    VueNotificationStack,
  },
  data(): any {
    return {
      timer: undefined,
      timeLeft: 300,
      showQrCode: false,
      url: '',
      isNavigating: false,
      languages: [
        { label: 'English', value: 'en' },
        { label: 'Deutsch', value: 'de' },
        { label: 'Português', value: 'pt' },
        { label: '中文', value: 'zh-cn' },
      ],
      showLoginModal: false,
      showContactModal: false,
      isLoginPending: false,
    };
  },
  computed: {
    ...mapGetters('app', ['cookieConsentVersion', 'getLocale']),
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
    ...mapActions('auth', ['createToken', 'revokeToken']),
    ...mapActions('lobby', ['createLobby']),
    localeSwitch(locale: string) {
      loadLocaleAsync(locale).catch((error: Error) => console.log(error)); // tslint:disable-line

      this.changeLocale(locale);
    },
    initProgressBar() {
      this.$router.beforeEach((to: any, from: any, next: any) => {
        this.isNavigating = true;
        next();
      });
      this.$router.afterEach(() => {
        this.isNavigating = false;
      });
    },

    async onContactSubmit(formData: any) {
      this.showContactModal = false;
    },
    async onLoginRequest(formData: any) {
      console.info('onLoginRequest2');
      console.info(this);
      console.info(this.$store);
      this.isLoginPending = true;

      if (!this.timer || this.timeLeft == 0) {
        console.info('new countdown?');
        await this.createLobby();
        this.startCountdown();

        const multiAddr = this.$store.getters['lobby/getMultiAddr'];
        console.info('MULTIADDR:');
        console.info(multiAddr);

        //const io = voteidsdk.default.ipfsio("voteid.io");
        //io.utils(IPFS).joinLobby(multiAddr);

        this.url = 'http://localhost:8080/auth/using/ipfs/lobby/' + multiAddr + '/on/voteid.io';
      }

      this.showQrCode = true;
      /*
      try {
        await this.createToken(formData);

        this.$router.push({ name: 'dashboard' });
      } catch (e) {
        addNotification({ title: 'Error during login', text: 'Please try again!' });
      }

      this.isLoginPending = false;
      this.showLoginModal = false;
      */
    },
    async onLogout() {
      this.isLoginPending = true;

      await this.revokeToken();

      this.$router.push('/');

      this.isLoginPending = false;
      this.showLoginModal = false;
    },

    async showFeatures() {
      //console.info("showFeatures");
      this.$router.push('#voting');
      //const element = document.getElementById('features');
      //element.scrollIntoView({ behavior: 'smooth' });
    },
    async showUsecases() {
      //console.info("showUsecases");
      this.$router.push('#usecases');
      //const element = document.getElementById('usecases');
      //element.scrollIntoView({ behavior: 'smooth' });
    },
    async showRoadmap() {
      //console.info("showDocs");
      this.$router.push('#roadmap');
      //const element = document.getElementById('docs');
      //element.scrollIntoView({ behavior: 'smooth' });
    },
    startCountdown() {
      if (!this.timer) {
        console.info('Starting countdown once');
        this.timer = setInterval(() => {
          if (this.timeLeft >= 1) {
            this.timeLeft -= 1;
          } else {
            clearInterval(this.timer);
          }
        }, 1000);
      }
    },
  },
  created() {
    this.initProgressBar();
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';
@import '~@/app/shared/designSystem/reset';
@import '~@/app/shared/designSystem/typo';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.logo {
  position: relative;
  top: $space-4;
  width: $space-24;
  height: $space-24;
}

.navstack {
  margin-bottom: 10em;
}

.glassWrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.514));
}

.glass {
  background-image: url('/dubai.jpg');
  background-attachment: fixed;
  background-size: cover;
  clip-path: url(#Hexagons);
  width: 490px;
  height: 490px;
  margin: auto;
  margin-top: 10vh;
}

.background {
  background-image: url('/dubai_blur.jpg');
  background-position-x: center;
  width: 100%;
  height: 250%;
  background-size: cover;
  position: fixed;
  z-index: -11;
  //    filter: blur(5px);
}

.navbuttons {
  visibility: hidden;
  @include mediaMin(tabletPortrait) {
    visibility: inherit;
  }

  //color: #000;
  //background: #ffffff;
  button {
    border: none;
    background: none;
    color: white;
  }
}
</style>
