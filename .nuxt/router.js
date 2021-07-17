import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bc7faeaa = () => interopDefault(import('..\\pages\\addHelp.vue' /* webpackChunkName: "pages/addHelp" */))
const _d346d3d2 = () => interopDefault(import('..\\pages\\addHelp2.vue' /* webpackChunkName: "pages/addHelp2" */))
const _1c4ffcdf = () => interopDefault(import('..\\pages\\final.vue' /* webpackChunkName: "pages/final" */))
const _4d4cf130 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _51ef0efa = () => interopDefault(import('..\\pages\\help2.vue' /* webpackChunkName: "pages/help2" */))
const _56b9fa3e = () => interopDefault(import('..\\pages\\helpFInal.vue' /* webpackChunkName: "pages/helpFInal" */))
const _bcaee58a = () => interopDefault(import('..\\pages\\helpNoReg.vue' /* webpackChunkName: "pages/helpNoReg" */))
const _07ebc1e0 = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages/main" */))
const _32b0b440 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _51fd538a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/help/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addHelp",
    component: _bc7faeaa,
    name: "addHelp"
  }, {
    path: "/addHelp2",
    component: _d346d3d2,
    name: "addHelp2"
  }, {
    path: "/final",
    component: _1c4ffcdf,
    name: "final"
  }, {
    path: "/help",
    component: _4d4cf130,
    name: "help"
  }, {
    path: "/help2",
    component: _51ef0efa,
    name: "help2"
  }, {
    path: "/helpFInal",
    component: _56b9fa3e,
    name: "helpFInal"
  }, {
    path: "/helpNoReg",
    component: _bcaee58a,
    name: "helpNoReg"
  }, {
    path: "/main",
    component: _07ebc1e0,
    name: "main"
  }, {
    path: "/registration",
    component: _32b0b440,
    name: "registration"
  }, {
    path: "/",
    component: _51fd538a,
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
