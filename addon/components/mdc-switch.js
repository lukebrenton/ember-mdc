import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-switch';

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

  /** @var {?String} */
  label: null,

  /** @var {?String} */
  name: null,

  /** @var {?String} */
  value: null,

  /***************
   * Ember Hooks *
   ***************/
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
  tagName: ''
});
