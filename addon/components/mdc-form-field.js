import Ember from 'ember';
import { MDCFormField } from '@material/mdc-form-field';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  alignEnd: false,

  /** @var {?String} */
  class: null,

  /** @var {?String} */
  id: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  classNameBindings: [
    'alignEnd:mdc-form-field--align-end'
  ],

  /** @var {String[]} */
  classNames: ['mdc-form-field'],

  /** @var {Function} */
  didInsertElement() {
    const root = this.$()[0];
    const input = root.querySelector('div');
    const label = root.querySelector('label');

    if (input && label) {
      const formField = new MDCFormField(root);
      this.set('mdcInstance', formField);
      root.mdcInstance = formField;

      if (input.mdcInstance) {
        formField.input = input.mdcInstance;
      }
    }
  },

  /**************
   * Properties *
   **************/
  /** @var {MDCFormField} */
  mdcInstance: null
});
