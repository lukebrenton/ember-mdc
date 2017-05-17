import Ember from 'ember';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Object} */
  attributes: {},

  /** @var {Boolean} */
  checked: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  form: null,

  /** @var {?String} */
  id: null,

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  required: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: [
    'checked', 'disabled', 'form', 'id', 'name', 'required', 'type', 'value',
    'tabindex'
  ],

  /** @var {String[]} */
  classNames: ['mdc-radio__native-control'],

  /** @var {Function} */
  init() {
    this._super(...arguments);

    const id = this.get('id');
    this.set('id', `${id}-radio`);

    const attributes = this.get('attributes');
    Object.keys(attributes || {}).forEach((key) => {
      this.set(key, attributes[key]);
    });
  },

  tagName: 'input',

  /**************
   * Properties *
   **************/
  /** @var {String} */
  type: 'radio'
});
