'use strict';
// KB: Vuex + Mutation, Step 4 : 然后定义对 state 操作的 action

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// 使用Vuex
Vue.use(Vuex);

// 后端Api地址
const host = 'http://127.0.0.1:7001';

// 定义会用到的所有 action
const actions = {

  // 定义一个action，用来取订单数据
  // 读取上一次提交的订单信息
  SET_ORDER_DETAIL: ({ commit, dispatch, state }) => {
    if (!state.order.id) {

      return axios.get(`${host}/app/api/article/list`)
        .then(response => {
          // Ajax返回数据时
          let data = response.data.list;
          // KB: commit 是 mutation 中很关键的方法，用于 调用 handle。
          commit(Type.SET_ORDER_DETAIL, data);
          return data;
        })
    }
    // KB: Promise.resolve() 方法学习， https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
    return Promise.resolve();
  }

};

export default actions;


