'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

// KB: Vuex + Mutation, Step 1 : 先定义一个state，我们后面都要对它进行处理
const state = {
  order: {}
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});