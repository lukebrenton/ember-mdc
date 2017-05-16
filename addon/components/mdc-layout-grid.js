import Ember from 'ember';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {?String} */
  id: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  classNames: ['mdc-layout-grid'],

  /** @var {String} */
  tagName: 'div'
});
