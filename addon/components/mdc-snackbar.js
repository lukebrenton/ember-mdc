import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-snackbar';
import { MDCSnackbar } from '@material/snackbar';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {?String} */
  id: null,

  /** @var {?String} */
  name: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: [
    'aria-atomic', 'aria-hidden', 'aria-live', 'id'
  ],

  /** @var {String[]} */
  classNames: ['mdc-snackbar'],

  /** @var {Function} */
  didInsertElement() {
    const root = this.$()[0];

    const snackbar = new MDCSnackbar(root);
    this.set('mdcInstance', snackbar);
    root.mdcInstance = snackbar;

    const name = this.get('name');
    if (name) {
      emberMDC.set(name, snackbar);
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    this.set('aria-atomic', 'true');
    this.set('aria-hidden', 'true');
    this.set('aria-live', 'assertive');
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'div',

  /**************
   * Properties *
   **************/
  /** @var {MDCSnackbar} */
  mdcInstance: null
});
