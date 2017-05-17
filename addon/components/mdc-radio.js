import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-radio';
import { MDCRadio } from '@material/radio';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  checked: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  form: null,

  /** @var {?String} */
  id: null,

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

    const radio = new MDCRadio(root);
    this.set('mdcInstance', radio);
    root.mdcInstance = radio;
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
  /** @var {MDCRadio} */
  mdcInstance: null
});
