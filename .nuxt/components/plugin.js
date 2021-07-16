import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BaseButton: () => import('../..\\components\\base\\BaseButton.vue' /* webpackChunkName: "components/base-button" */).then(c => wrapFunctional(c.default || c)),
  BaseModal: () => import('../..\\components\\base\\BaseModal.vue' /* webpackChunkName: "components/base-modal" */).then(c => wrapFunctional(c.default || c)),
  CommonAddHelp3: () => import('../..\\components\\common\\AddHelp3.vue' /* webpackChunkName: "components/common-add-help3" */).then(c => wrapFunctional(c.default || c)),
  CommonAddHelpModal1: () => import('../..\\components\\common\\AddHelpModal1.vue' /* webpackChunkName: "components/common-add-help-modal1" */).then(c => wrapFunctional(c.default || c)),
  CommonAddHelpModal2: () => import('../..\\components\\common\\AddHelpModal2.vue' /* webpackChunkName: "components/common-add-help-modal2" */).then(c => wrapFunctional(c.default || c)),
  CommonCard: () => import('../..\\components\\common\\Card.vue' /* webpackChunkName: "components/common-card" */).then(c => wrapFunctional(c.default || c)),
  CommonHeader: () => import('../..\\components\\common\\Header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c)),
  CommonHeaderHelp: () => import('../..\\components\\common\\HeaderHelp.vue' /* webpackChunkName: "components/common-header-help" */).then(c => wrapFunctional(c.default || c)),
  CommonRegistrationModal: () => import('../..\\components\\common\\RegistrationModal.vue' /* webpackChunkName: "components/common-registration-modal" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
