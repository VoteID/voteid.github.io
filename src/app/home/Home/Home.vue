<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <div :class="$style.BulletPoints">
      <div :class="$style.foreground">
        <home-section id="voting" image="/vote_portrait.png" alternative>
          <vue-headline level="2" :class="$style.warning">✓ Voting</vue-headline>
          <br />
          <vue-headline level="3" :class="$style.Underline">Truly Anonymous</vue-headline>
          <p>
            VoteID tickets are tallied in their encrypted form and are never decrypted. Your vote never leaves your
            device.
          </p>
          <br />
          <vue-headline level="3">Mathematically sound</vue-headline>
          <p>
            VoteID gives it's users a mathematical proof that voting took place. It's almost impossible to manipulate
            the votes which makes it perfect even for most important decisions.
          </p>
          <br />
          <vue-headline level="3">Decentralized</vue-headline>
          <p>
            VoteID doesn't have a single point of failure and can always connect users together when you need it the
            most.
          </p>
          <br />
          <vue-headline level="3">Offline voting</vue-headline>
          <p>
            We are working on enabling communication over Bluetooth or WiFi when internet connection is unstable or
            unavailable. Some user experiences are best done completely offline.
          </p>
        </home-section>

        <home-section id="usecases" image="results.png" flip>
          <vue-headline level="2" :class="$style.warning">Usecases</vue-headline>
          <br />
          <vue-headline level="3">Team decisions</vue-headline>
          <p>
            Example: An e-sports team consisting of 5 players can vote on sensitive subjects, for example who should
            leave the team, without destroying friendships.
          </p>
          <br />
          <vue-headline level="3">Quick surveys</vue-headline>
          <p>
            VoteID works perfectly for small decision making, for example which movie you should watch next with your
            friends. Just open the app, scan the QR code and put your vote in.
          </p>
          <br />
          <vue-headline level="3">Business use</vue-headline>
          <p>
            Our app can be used for board-level decisions within a company to remove any bias. Also very useful to get a
            quorum during an undecisive zoom call.
          </p>
        </home-section>

        <!--
    <home-section
      id="pro"
      image="/identity.jpg"
      alternative
    >
      <vue-headline level="2" :class="$style.warning">Identity wallet</vue-headline>
      <br />
      <vue-headline level="3">You're in control</vue-headline>
      <p>
        With VoteID you can create digital identities that can be used to authenticate to 3rd party services and as a means of accreditation. 
      </p>
      <br />
      <vue-headline level="3">Never leave your ID behind</vue-headline>
      <p>
        Your identity is not stored by one central party but on a decentralized network that is always online and only you have access to it.
      </p>
      <br />
      <vue-headline level="3">Industry's new best practice</vue-headline>
      <p>Identities created within VoteID are following the DID standard which means greater interoperability between VoteID and various software.</p>
      <br />
      <a href="#usecases">Next</a>
    </home-section>

  
  <section :class="[$style.enterpriseReady, 'featureSection']">
    <vue-grid-item fill class="vueGridItem">
      <vue-headline level="2" :class="$style.warning">Compare plans</vue-headline>
      <br>
    </vue-grid-item>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <vue-card class="vueCard">
            <vue-card-body>
              <vue-icon-github />
              <vue-headline level="3">VoteID Free</vue-headline>
              <hr />
              
              <p>Max participants: 5</p>
              <p>Ads: Yes</p>
              <p>Github integration: No</p>
              <p>Zoom integration: No</p>
              
              <vue-button slot="right" color="primary">
                Download Now!
              </vue-button>
            </vue-card-body>
          </vue-card>
        </vue-grid-item>

        <vue-grid-item>
          <vue-card class="vueCard">
            <vue-card-body>
              <vue-icon-github />
              <vue-headline level="3">VoteID Pro</vue-headline>
              <hr/>
              <p>Max participants: Unlimited</p>
              <p>Ads: No</p>
              <p>Github integration: Yes</p>
              <p>Zoom integration: Yes</p>
            </vue-card-body>
          </vue-card>
        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
  </section>
    


    <home-section
      id="experimental"
      image="/signature.jpg"
      flip
    >
      <vue-headline level="2" :class="$style.warning">Experimental features (coming soon)</vue-headline>
      <br />
      <vue-headline level="3">Document signing</vue-headline>
      <p>
        Sign documents quickly and easily using our app. Context fingerprinting allows you to sign the context of a document capturing the maning of the text being signed.
      </p>
      <br />
      <vue-headline level="3">Unified login system</vue-headline>
      <p>
        We offer a secure and reliable way of authorization to any website using our SDK. The peer to peer nature guarantees 100% uptime and scalability that other solutions just can't provide.
      </p>
      <br />
      <vue-headline level="3">Mass elections</vue-headline>
      <p>
        We are working hard to bring our system to the masses and enable our users to hold large elections and surveys.
      </p>
    </home-section>
    -->

        <home-section id="roadmap" image="roadmap.svg" alternative>
          <vue-headline level="2" :class="$style.warning">Roadmap</vue-headline>
          <br />
          <vue-headline level="3">(Q1 2021)</vue-headline>
          <br />
          <ol>
            <li>
              DID Wallet
            </li>
            <p>
              With VoteID you can create digital identities that can be used to authenticate to 3rd party services and
              as a means of accreditation.
            </p>
          </ol>
          <ol>
            <li>
              Document Signing
            </li>
            <p>
              Sign documents quickly and easily using our app and store them privately on a decentralized network.
            </p>
          </ol>
          <br />
          <br />
          <vue-headline level="3">(Q3 2021)</vue-headline>
          <br />
          <ol>
            <li>
              Offline support
            </li>
            <p>
              Allow devices to communicate offline using BLE or WiFi when internet connection is unstable or
              unavailable. Some users experiences are best done completely offline.
            </p>
          </ol>
          <br />
          <br />
          <vue-headline level="3">(Q2 2022)</vue-headline>
          <br />
          <ol>
            <li>
              Mass elections
            </li>
            <p>
              We are working hard to bring our system to the masses and enable our users to hold large elections and
              surveys at scale.
            </p>
          </ol>
        </home-section>
      </div>

      <div :class="$style.Last"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';

import VueCard from '@components/VueCard/VueCard.vue';
import VueCardBody from '@components/VueCard/VueCardBody/VueCardBody.vue';

import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueButton from '@components/VueButton/VueButton.vue';

export default {
  metaInfo: {
    title: 'voteid - p2p decentralized voting app',
    meta: [
      {
        name: 'description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vote, peer, did, decentralized, wifi, bluetooth, ipfs, offline',
      },

      { name: 'og:url', content: 'https://voteid.io/' },
      { name: 'og:site_name', content: 'voteid' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content: 'VoteID - Peer-to-peer Anonymous Voting App of the future',
      },
      {
        name: 'og:description',
        content: 'Peer-to-peer Anonymous Voting App of the future',
      },
      { name: 'og:image:url', content: 'https://voteid.io/voteid.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content: 'Peer-to-peer Anonymous Voting App of the future',
      },
      { name: 'twitter:url', content: 'https://voteid.io/' },
      { name: 'twitter:image', content: 'https://voteid.io/voteid.png' },
      {
        name: 'twitter:description',
        content: 'Peer-to-peer Anonymous Voting App of the future',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
    VueIconGithub,
    VueCardBody,
    VueCard,
    VueGrid,
    VueGridItem,
    VueGridRow,
    VueButton,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.BulletPoints {
  position: absolute;
  top: 100%;
  width: 100%;

  //@include mediaMin(tabletPortrait) {
  //  margin-bottom: 4.9em;
  //}

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 5;
  pointer-events: none;
}

.Last {
  min-height: 8em;
  pointer-events: none;

  @include mediaMin(tabletPortrait) {
    min-height: 4.9em;
  }
}

.Underline {
  background: url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='1px' height='1px' viewBox='0 0 1 1' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='1' height='1' fill='%FCE' /%3E%3C/svg%3E")
    no-repeat 100% 100%;
  background-size: 100% 50%;
}

.enterpriseReady {
  display: block;
  text-align: center;

  padding: $space-48 0;
  box-shadow: 2px 0px #4c6075, -17px -9px 0px #ec7225, -20px -4px 5px 5px #191f26;
  padding-top: $space-84;

  @include mediaMin(tabletPortrait) {
    padding: $space-84 0;
  }

  background: #1b242c; // $brand-primary;
  color: foreground-color($brand-secondary);
  i {
    display: inline-block;
    height: $font-size-h1;
    width: $font-size-h1;
    margin-top: $space-8;
  }
  :global {
    .vueCard {
      background: #4d6b91;
      border-radius: 1em;
      color: foreground-color($brand-bg-color);
      min-height: 24em;
      p {
        text-align: initial;
      }
    }
  }
}

.foreground {
  pointer-events: auto;
  background: #0e161b;
  /*
  background-image: url("/fg.jpg");
  background-position-x: center;
  width: 100%;
  height: auto;
  background-size: cover;
  position: fixed;
  z-index: -11;
  */
}

.warning {
  transform: rotate(2deg);
  background: #fce02b;
  color: black;
  padding: 0.2em;
}

vue-grid-item {
  max-width: 24em;
  margin-bottom: 4em;
}

.Test {
  background: azure;
  border-radius: 1em;
}

vue-grid-item {
  margin: 2em;
}
</style>
