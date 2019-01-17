import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import plan_store from './plan.js';  //引入计划对象
import card_store from './card.js';  //引入计划对象

export default new vuex.Store({
    modules: {
        plan: plan_store,
        card: card_store,
    }
})