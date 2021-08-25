<template>
  <div class="language-switcher">
    <h3>switch language</h3>
    <ul>
      <li
        v-for="(language, index) in languages"
        :key="index"
        @click="changeActiveLanguage(language.language)"
      >
        {{ language.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

const languages = [
  {
    language: 'de',
    label: 'German',
  },
  {
    language: 'en',
    label: 'English',
  },
  {
    language: 'es',
    label: 'Espanol',
  },
];

const changeActiveLanguage = (language) => {
  store.dispatch('setLanguage', language)
};
</script>

<style>
.language-switcher {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.language-switcher ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.language-switcher ul li {
  margin-right: 24px;
  cursor: pointer;
}
</style>


