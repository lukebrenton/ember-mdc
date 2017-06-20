import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-textfield';
import { MDCTextfield } from '@material/textfield';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {?Number} */
  cols: null,

  /** @var {Boolean} */
  dark: false,

  /** @var {Boolean} */
  dense: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  form: null,

  /** @var {Boolean} */
  fullwidth: false,

  /** @var {?String} */
  helptext: null,

  /** @var {Boolean} */
  helptextPersistent: false,

  /** @var {Boolean} */
  helptextValidation: false,

  /** @var {?String} */
  id: null,

  /** @var {Object} */
  inputAttributes: {},

  /** @var {?String} */
  label: null,

  /** @var {Boolean} */
  multiline: false,

  /** @var {?String} */
  name: null,

  /** @var {Function} */
  oninput: () => {},

  /** @var {Boolean} */
  required: false,

  /** @var {?Number} */
  rows: null,

  /** @var {String} */
  type: 'text',

  /** @var {?String} */
  value: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {Function} */
  didInsertElement() {
    const id = this.get('id');
    const root = window.document.getElementById(id);

    const textfield = new MDCTextfield(root);
    this.set('mdcInstance', textfield);
    root.mdcInstance = textfield;

    const input = Ember.$(root).find('input');
    input.on('input', () => {
      this.get('oninput')(input.val());
    });
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
  /** @var {MDCTextfield} */
  mdcInstance: null
});
