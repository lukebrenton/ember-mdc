import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-tabs';
import { MDCTabBar } from '@material/tabs';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  accent: false,

  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  icons: false,

  /** @var {Boolean} */
  iconsWithText: false,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  primary: false,

  /** @var {Object[]} */
  tabs: [],

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['id'],

  /** @var {String[]} */
  classNameBindings: [
    'accent:mdc-tab-bar--indicator-accent',
    'icons:mdc-tab-bar--icon-tab-bar',
    'iconsWithText:mdc-tab-bar--icons-with-text',
    'primary:mdc-tab-bar--indicator-primary'
  ],

  /** @var {String[]} */
  classNames: ['mdc-tab-bar'],

  /** @var {Function} */
  didInsertElement() {
    const id = this.get('id');
    const root = window.document.getElementById(id);

    const bar = new MDCTabBar(root);
    this.set('mdcInstance', bar);
    root.mdcInstance = bar;
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    const id = this.get('id');
    if (!id) {
      this.set('id', Ember.generateGuid());
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'nav',

  /**************
   * Properties *
   **************/
  /** @var MDCTabBar */
  mdcInstance: null
});
