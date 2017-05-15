import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-fab';
import { MDCRipple } from '@material/ripple';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {?String} */
  content: null,

  /** @var {?String} */
  id: null,

  /** @var {?String} */
  label: null,

  /** @var {Boolean} */
  mini: false,

  /** @var {Boolean} */
  plain: false,

  /** @var {Boolean} */
  ripple: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['label:aria-label'],

  /** @var {String[]} */
  classNameBindings: [
    'mini:mdc-fab--mini',
    'plain:mdc-fab--plain'
  ],

  /** @var {String[]} */
  classNames: ['mdc-fab', 'material-icons'],

  /** @var {Function} */
  didInsertElement() {
    if (this.get('ripple')) {
      MDCRipple.attachTo(this.$()[0]);
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'button'
});
