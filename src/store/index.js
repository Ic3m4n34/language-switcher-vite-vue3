import { createStore } from 'vuex';

export default createStore({
  state: {
    activeLanguage: 'en',
  },
  getters:{
    activeLanguage(state) {
      return state.activeLanguage;
    },
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.activeLanguage = language;
    },
  },
  actions: {
    setLanguage(context, language) {
      context.commit('SET_LANGUAGE', language);
    },
  },
});