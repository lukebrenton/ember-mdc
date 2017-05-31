import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-tabs/scroller';
import { MDCTabBarScroller } from '@material/tabs';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  accent: false,

  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  customIcons: false,

  /** @var {Boolean} */
  icons: false,

  /** @var {Boolean} */
  iconsWithText: false,

  /** @var {?String} */
  id: null,

  /** @var {String} */
  name: null,

  /** @var {Boolean} */
  primary: false,

  /** @var {Boolean} */
  tabs: [],

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['id'],

  /** @var {String[]} */
  classNames: ['mdc-tab-bar-scroller'],

  /** @var {Function} */
  didInsertElement() {
    const root = this.$()[0];

    const tabBarScroller = new MDCTabBarScroller(
      root,
      undefined,
      () => root.querySelector('.mdc-tab-bar').mdcInstance
    );

    this.set('mdcInstance', tabBarScroller);
    root.mdcInstance = tabBarScroller;

    const name = this.get('name');
    if (name) {
      emberMDC.set(name, tabBarScroller);
    }
  },

  /** @var {Object} */
  layout,

  /**************
   * Properties *
   **************/
  /** @var {MDCTabBarScroller} */
  mdcInstance: null,

  /** @var {Object} */
  yieldBack: {back: true},

  /** @var {Object} */
  yieldForward: {forward: true},

  /** @var {Object} */
  yieldIcon: {icon: true}
});
