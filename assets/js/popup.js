import Vue from 'vue';

import Popup from './component/Popup.vue'

const app = new Vue({
    el: "#app",
    render: createElement => createElement(Popup)
});