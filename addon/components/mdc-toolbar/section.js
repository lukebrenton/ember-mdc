import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-toolbar/section';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  alignEnd: false,

  /** @var {Boolean} */
  alignStart: false,

  /** @var {?String} */
  role: null,

  /** @var {Boolean} */
  shrink: false,

  /** @var {?String} */
  title: null,

  /***************
   * Ember Hooks *
   ***************/
  attributeBindings: ['role'],

  /** @var {String[]} */
  classNameBindings: [
    'alignEnd:mdc-toolbar__section--align-end',
    'alignStart:mdc-toolbar__section--align-start',
    'shrink:mdc-toolbar__section--shrink-to-fit'
  ],

  /** @var {String[]} */
  classNames: ['mdc-toolbar__section'],

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'section'
});
