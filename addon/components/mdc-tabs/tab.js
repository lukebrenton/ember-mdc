import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-tabs/tab';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  active: false,

  /** @var {?String} */
  href: null,

  /** @var {Boolean} */
  icons: false,

  /** @var {Boolean} */
  iconsWithText: false,

  /** @var {?String} */
  name: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['href'],

  /** @var {String[]} */
  classNameBindings: [
    'active:mdc-tab--active',
    'iconsWithText:mdc-tab--with-icon-and-text'
  ],

  /** @var {String[]} */
  classNames: ['mdc-tab'],

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'a'
});
