import Ember from 'ember';
import { MDCRipple } from '@material/ripple';
import { emberMDC } from 'ember-mdc/util';

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

  /** @var {?String} */
  dialog: null,

  /** @var {Boolean} */
  dialogAccept: false,

  /** @var {Boolean} */
  dialogCancel: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  drawer: null,

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
    'disabled', 'form', 'href', 'id', 'name', 'tabindex', 'type', 'value',

    // extra attributes for button elements
    'autofocus', 'autocomplete', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget',

    // extra attributes for a elements
    'download', 'hreflang', 'referrerpolicy', 'rel', 'target'
  ],

  /** @var {String[]} */
  classNameBindings: [
    'accent:mdc-button--accent',
    'cardAction:mdc-card__action',
    'compact:mdc-button--compact',
    'dark:mdc-button--theme-dark',
    'dense:mdc-button--dense',
    'dialogAccept:mdc-dialog__footer__button--accept',
    'dialogButton:mdc-dialog__footer__button',
    'dialogCancel:mdc-dialog__footer__button--cancel',
    'primary:mdc-button--primary',
    'raised:mdc-button--raised'
  ],

  /** @var {String[]} */
  classNames: ['mdc-button'],

  /** @var {Function} */
  didInsertElement() {
    const dialog = this.get('dialog');
    if (dialog) {
      this.$().on('click', () => emberMDC.get(dialog).show());
    }

    const drawer = this.get('drawer');
    if (drawer) {
      this.$().on('click', () => emberMDC.get(drawer).open = true);
    }

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

    if (this.get('dialogAccept') || this.get('dialogCancel')) {
      this.set('dialogButton', true);
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
  tagName: 'button',

  /**************
   * Properties *
   **************/
  /** @var {Boolean} */
  dialogButton: false
});
