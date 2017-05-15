import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-checkbox';
import { MDCCheckbox } from '@material/checkbox';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  checked: false,

  /** @var {Boolean} */
  dark: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  form: null,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  indeterminate: false,

  /** @var {Object} */
  inputAttributes: {},

  /** @var {?String} */
  label: null,

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  required: false,

  /** @var {?String} */
  value: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {Function} */
  didInsertElement() {
    const id = this.get('id');
    const root = window.document.getElementById(id);
    const input = root.querySelector('input');

    const checkbox = new MDCCheckbox(root);
    this.set('mdcInstance', checkbox);
    root.mdcInstance = checkbox;

    if (this.get('indeterminate')) {
      input.indeterminate = true;
    }
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
  tagName: '',

  /**************
   * Properties *
   **************/
  /** @var {MDCCheckbox} */
  mdcInstance: null
});
