/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import config from '@/config'

Vue.use(Vuex) // Register and use a package in VueJs.

export default new Vuex.Store({
  state: {
    heroes: [],
    hero: [],
    imgUrl: [],
    imgSingleUrl: '',
    loading: false
  },

  mutations: {
    getHeroes(state) {
      state.heroes = [];
      state.loading = true;
      Axios.get(`${config.apiUrl}?apikey=${config.publicKey}`).then(response => {
        //console.log(response);
        state.loading = false;
        response.data.data.results.forEach(item => {
          state.heroes.push(item);
          state.imgUrl[item.id] = `${item.thumbnail.path}`;
        });
      }).catch((error) => {
        console.log(error)
      })
    },

    getHero(state, id) {
      state.hero = [];
      state.loading = true;
      const heroId = parseInt(id);
      Axios.get(`${config.apiUrl}/${heroId}?apikey=${config.publicKey}`).then(response => {
          //console.log(response);
          state.loading = false;
          response.data.data.results.forEach(item => {
            state.hero.push(item);
            state.imgSingleUrl = `${item.thumbnail.path}`;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  actions: {
    getHeroes: context => {
      context.commit('getHeroes')
    },

    getHero(context, id) {
      context.commit('getHero', id)
    }
  }
})