import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a24048fc = () => interopDefault(import('..\\pages\\addHelp.vue' /* webpackChunkName: "pages/addHelp" */))
const _2d333e20 = () => interopDefault(import('..\\pages\\addHelp2.vue' /* webpackChunkName: "pages/addHelp2" */))
const _eac70d14 = () => interopDefault(import('..\\pages\\final.vue' /* webpackChunkName: "pages/final" */))
const _79cf9bf1 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _7f88e8de = () => interopDefault(import('..\\pages\\help2.vue' /* webpackChunkName: "pages/help2" */))
const _ca8f5956 = () => interopDefault(import('..\\pages\\helpFInal.vue' /* webpackChunkName: "pages/helpFInal" */))
const _34b2335c = () => interopDefault(import('..\\pages\\helpNoReg.vue' /* webpackChunkName: "pages/helpNoReg" */))
const _af3c532e = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages/main" */))
const _62692169 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _454dd2d2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addHelp",
    component: _a24048fc,
    name: "addHelp"
  }, {
    path: "/addHelp2",
    component: _2d333e20,
    name: "addHelp2"
  }, {
    path: "/final",
    component: _eac70d14,
    name: "final"
  }, {
    path: "/help",
    component: _79cf9bf1,
    name: "help"
  }, {
    path: "/help2",
    component: _7f88e8de,
    name: "help2"
  }, {
    path: "/helpFInal",
    component: _ca8f5956,
    name: "helpFInal"
  }, {
    path: "/helpNoReg",
    component: _34b2335c,
    name: "helpNoReg"
  }, {
    path: "/main",
    component: _af3c532e,
    name: "main"
  }, {
    path: "/registration",
    component: _62692169,
    name: "registration"
  }, {
    path: "/",
    component: _454dd2d2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
