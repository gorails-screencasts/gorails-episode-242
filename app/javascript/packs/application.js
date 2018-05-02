/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import '../css/application.scss'

import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks'
Vue.use(TurbolinksAdapter)

import Dropdown from '../components/dropdown'
Vue.component('dropdown', Dropdown)

// Directive for handling clicks outside of the element.
// We use this to automatically close the dropdown if you
// click somewhere else on the page.
Vue.directive('click-outside', {
  bind: function (el, binding, vNode) {
    el.__vueClickOutside__ = event => {
      if (!el.contains(event.target)) {
        // call method provided in v-click-outside value
        vNode.context[binding.expression](event)
        event.stopPropagation()
      }
    }
    document.body.addEventListener('click', el.__vueClickOutside__)
  },
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  }
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: "[data-behavior='vue']",
  })
})
