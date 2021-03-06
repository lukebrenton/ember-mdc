import Ember from 'ember';

export default Ember.TextField.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Object} */
  attributes: {},

  /** @var {?String} */
  form: null,

  /** @var {String} */
  helptext: '',

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['aria-controls', 'form', 'id'],

  /** @var {String[]} */
  classNames: ['mdc-textfield__input'],

  /** @var {Function} */
  init() {
    this._super(...arguments);

    const id = this.get('id');
    this.set('id', `${id}-input`);

    if (this.get('helptext')) {
      this.set('aria-controls', `${id}-helptext`);
    }

    const attributes = this.get('attributes');
    Object.keys(attributes || {}).forEach((key) => {
      this.set(key, attributes[key]);
    });
  }
});
