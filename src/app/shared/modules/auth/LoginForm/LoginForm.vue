<template>
  <form :class="$style.loginForm" @request.stop.prevent="onSubmit">
    <vue-headline level="3">{{ $t('auth.LoginForm.title' /* Login Example */) }}</vue-headline>

    <br />

    <div>
      <canvas ref="qrcodecanvas" class="Image" />

      <div v-if="showQrCode">
        <h3>Scan me with VoteID mobile app</h3>
        <h1>Time left: {{ timeLeft }}</h1>
      </div>
    </div>
    <!--
    <vue-input
      id="username"
      name="username"
      type="text"
      autofocus
      :label="$t('common.username' /* Username */)"
      :placeholder="$t('common.username.placeholder' /* Enter any username */)"
      validation="required"
      :error-message="$t('auth.LoginForm.username.error' /* The username can not be empty */)"
      v-model="username"
    />

    <vue-input
      id="password"
      name="password"
      type="password"
      :label="$t('common.password' /* Password */)"
      :placeholder="$t('common.password.placeholder' /* Enter any password */)"
      validation="required|min:6"
      :error-message="$t('auth.LoginForm.password.error' /* The password has to have at least 6 characters */)"
      v-model="password"
    />

    <vue-button color="primary" tabindex="3" type="submit" :disabled="isSubmitDisabled" :loading="loading">
      {{ $t('auth.LoginForm.cta' /* Login */) }}
    </vue-button>
    -->
  </form>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueInput from '@components/VueInput/VueInput.vue';
//import VueButton from '@components/VueButton/VueButton.vue';

import { /* QRCode,*/ QRCodeRenderersOptions, toCanvas } from 'qrcode';

export default {
  $_veeValidate: {
    validator: 'new' as 'new',
  },
  name: 'LoginForm',
  components: { VueInput, VueHeadline },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: '',
    },
    timeLeft: {
      type: Number,
      default: 0,
    },
    showQrCode: {
      type: Boolean,
    },
  },
  watch: {
    url: function(newUrl, oldUrl) {
      if (newUrl != '') {
        this.updateQrCode(newUrl);
      }
    },
  },
  data(): any {
    return {};
  },
  computed: {
    hasErrors() {
      return this.errors && this.errors.items.length > 0;
    },
    hasEmptyFields() {
      return this.username.trim() === '' || this.password.trim() === '';
    },
    isSubmitDisabled() {
      return this.hasErrors || this.hasEmptyFields;
    },
  },
  methods: {
    onSubmit() {
      console.info('EMIT');
      this.$emit('request', this.$data);
    },
    updateQrCode() {
      if (this.showQrCode) {
        const opts = {
          errorCorrectionLevel: 'H',
          width: 240,
          height: 240,
          margin: 1,
        } as QRCodeRenderersOptions;

        //const url = window.location.origin + process.env.publicPath + "?" // + this.ballotQuery;

        toCanvas(this.$refs.qrcodecanvas, this.url, opts).then((res) => {
          console.info('QRCode created');
          console.info(res);
          //console.info(res);
          //this.qrcodeContainer.appendChild(res);
        });
      }
    },
  },
  mounted() {
    if (this.url && this.url != '') {
      this.updateQrCode();
    }
    this.$emit('request', this.$data);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.loginForm {
  display: block;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 2em;
  padding-right: 2em;

  @include mediaMin(tabletPortrait) {
    min-width: auto;
  }
}
</style>
