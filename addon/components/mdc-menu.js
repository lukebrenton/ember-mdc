import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-menu';
import { MDCSimpleMenu } from '@material/menu';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  bottomLeft: false,

  /** @var {Boolean} */
  bottomRight: false,

  /** @var {?String} */
  class: null,

  /** @var {?String} */
  id: null,

  /** @var {Object[]} */
  items: [],

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  noAnchor: false,

  /** @var {Boolean} */
  open: false,

  /** @var {?Number} */
  tabindex: null,

  /** @var {Boolean} */
  topLeft: false,

  /** @var {Boolean} */
  topRight: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['tabindex'],

  /** @var {String[]} */
  classNameBindings: [
    'bottomLeft:mdc-simple-menu--open-from-bottom-left',
    'bottomRight:mdc-simple-menu--open-from-bottom-right',
    'open:mdc-simple-menu--open',
    'topLeft:mdc-simple-menu--open-from-top-left',
    'topRight:mdc-simple-menu--open-from-top-right'
  ],

  /** @var {String[]} */
  classNames: ['mdc-simple-menu'],

  /** @var {Function} */
  didInsertElement() {
    const root = this.$()[0];

    const menu = new MDCSimpleMenu(root);
    this.set('mdcInstance', menu);
    root.mdcInstance = menu;

    const name = this.get('name');
    if (name) {
      emberMDC.set(name, menu);
    }

    if (!this.get('noAnchor')) {
      root.parentNode.classList.add('mdc-menu-anchor');
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'div',

  /**************
   * Properties *
   **************/
  /** @var {MDCMenu} */
  mdcInstance: null
});
