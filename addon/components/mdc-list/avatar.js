import Ember from 'ember';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  alt: null,

  /** @var {Number} */
  height: 40,

  /** @var {?String} */
  src: null,

  /** @var {Number} */
  width: 40,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['alt', 'height', 'src', 'width'],

  /** @var {String} */
  tagName: 'img'
});
