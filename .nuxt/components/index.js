import { wrapFunctional } from './utils'

export { default as BaseButton } from '../..\\components\\base\\BaseButton.vue'
export { default as BaseModal } from '../..\\components\\base\\BaseModal.vue'
export { default as CommonAddHelp3 } from '../..\\components\\common\\AddHelp3.vue'
export { default as CommonAddHelpModal1 } from '../..\\components\\common\\AddHelpModal1.vue'
export { default as CommonAddHelpModal2 } from '../..\\components\\common\\AddHelpModal2.vue'
export { default as CommonCard } from '../..\\components\\common\\Card.vue'
export { default as CommonHeader } from '../..\\components\\common\\Header.vue'
export { default as CommonHeaderHelp } from '../..\\components\\common\\HeaderHelp.vue'
export { default as CommonRegistrationModal } from '../..\\components\\common\\RegistrationModal.vue'

export const LazyBaseButton = import('../..\\components\\base\\BaseButton.vue' /* webpackChunkName: "components/base-button" */).then(c => wrapFunctional(c.default || c))
export const LazyBaseModal = import('../..\\components\\base\\BaseModal.vue' /* webpackChunkName: "components/base-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonAddHelp3 = import('../..\\components\\common\\AddHelp3.vue' /* webpackChunkName: "components/common-add-help3" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonAddHelpModal1 = import('../..\\components\\common\\AddHelpModal1.vue' /* webpackChunkName: "components/common-add-help-modal1" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonAddHelpModal2 = import('../..\\components\\common\\AddHelpModal2.vue' /* webpackChunkName: "components/common-add-help-modal2" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonCard = import('../..\\components\\common\\Card.vue' /* webpackChunkName: "components/common-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonHeader = import('../..\\components\\common\\Header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonHeaderHelp = import('../..\\components\\common\\HeaderHelp.vue' /* webpackChunkName: "components/common-header-help" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonRegistrationModal = import('../..\\components\\common\\RegistrationModal.vue' /* webpackChunkName: "components/common-registration-modal" */).then(c => wrapFunctional(c.default || c))
