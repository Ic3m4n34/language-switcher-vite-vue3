<template>
  <div>
    <h1> Hello Medium 👋</h1>
    <br />
    <h2>
      {{ translateString('greeting') }}
    </h2>
    <LanguageSwitcher />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import TRANSLATIONS from './translations.json';
const store = useStore();


const activeLanguage = computed(() => store.getters.activeLanguage);
// get the current language from location
const activeLanguageFromBrowser = window.location.pathname.split('/')[1];

if (activeLanguageFromBrowser) {
  store.dispatch('setLanguage', activeLanguageFromBrowser);
}

const translateString = (string) => {
  return TRANSLATIONS[activeLanguage.value][string];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
