import Ember from 'ember';
import { MDCRipple } from '@material/mdc-ripple';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  accent: false,

  /** @var {Object} */
  attributes: {},

  /** @var {Boolean} */
  cardAction: false,

  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  compact: false,

  /** @var {Boolean} */
  dark: false,

  /** @var {Boolean} */
  dense: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  form: null,

  /** @var {?String} */
  href: null,

  /** @var {?String} */
  id: null,

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  primary: false,

  /** @var {Boolean} */
  raised: false,

  /** @var {Boolean} */
  ripple: false,

  /** @var {?String} */
  type: null,

  /** @var {?String} */
  value: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: [
    'disabled', 'form', 'href', 'id', 'name', 'type', 'value',

    // extra attributes for button elements
    'autofocus', 'autocomplete', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget',

    // extra attributes for a elements
    'download', 'hreflang', 'referrerpolicy', 'rel', 'target'
  ],

  /** @var {String[]} */
  classNameBindings: [
    'accent:mdc-button--accent',
    'cardAction:mdc-card__action',
    'class',
    'compact:mdc-button--compact',
    'dark:mdc-button--theme-dark',
    'dense:mdc-button--dense',
    'primary:mdc-button--primary',
    'raised:mdc-button--raised'
  ],

  /** @var {String[]} */
  classNames: ['mdc-button'],

  /** @var {Function} */
  didInsertElement() {
    if (this.get('ripple')) {
      MDCRipple.attachTo(this.$()[0]);
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    if (this.get('cardAction')) {
      this.set('compact', true);
    }

    if (this.get('href')) {
      this.set('form', null);
      this.set('name', null);
      this.set('value', null);

      if (!this.get('disabled')) {
        this.set('tagName', 'a');
      } else {
        this.set('href', null);
      }
    }

    const attributes = this.get('attributes');
    Object.keys(attributes || {}).forEach((key) => {
      this.set(key, attributes[key]);
    });
  },

  /** @var {String} */
  tagName: 'button'
});
