'use strict';

// KB: Vuex + Mutation, Step 3 : 然后定义 handle 方法

// KB: 引入mutation中的类型定义
import {
  SET_ORDER_DETAIL
} from './mutation-type';

const mutations = {
  [SET_ORDER_DETAIL] (state, items){
    // KB: Vuex + Mutation : 看需求，修改这个里的处理逻辑
    state.order = items;
  }
};

export default mutations
