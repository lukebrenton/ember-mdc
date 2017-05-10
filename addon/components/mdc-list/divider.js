import Ember from 'ember';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  group: false,

  /** @var {Boolean} */
  inset: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['role'],

  /** @var {String[]} */
  classNameBindings: ['inset:mdc-list-divider--inset'],

  /** @var {String[]} */
  classNames: ['mdc-list-divider'],

  /** @var {Function} */
  init() {
    this._super(...arguments);

    if (this.get('group')) {
      this.set('inset', false);
      this.set('tagName', 'hr');
    } else {
      this.set('role', 'separator');
    }
  },

  /** @var {String} */
  tagName: 'li'
});
