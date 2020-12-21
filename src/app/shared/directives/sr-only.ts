import Vue from 'vue';

Vue.directive('sr-only', (el: HTMLElement) => {
  el.classList.add('sr-only');
});

Vue.directive('hidden', (el: HTMLElement) => {
  el.classList.add('hidden');
});
