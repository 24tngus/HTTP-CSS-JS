import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import todo from './modules/todo';
/* post를 import */
import post from './modules/post';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
    modules: {
        todo, 
        /* post 추가 */
        post
    }
});