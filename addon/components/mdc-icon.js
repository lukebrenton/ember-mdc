import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-icon';
import { MDCIconToggle } from '@material/mdc-icon-toggle';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  accent: false,

  /** @var {?String} */
  class: null,

  /** @var {?String} */
  content: null,

  /** @var {Boolean} */
  dark: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  iconInnerSelector: null,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  inactive: false,

  /** @var {?String} */
  label: null,

  /** @var {Boolean} */
  material: true,

  /** @var {?String} */
  offContent: null,

  /** @var {?String} */
  offCSSClass: null,

  /** @var {?String} */
  offLabel: null,

  /** @var {?String} */
  onContent: null,

  /** @var {?String} */
  onCSSClass: null,

  /** @var {?String} */
  onLabel: null,

  /** @var {Boolean} */
  pressed: false,

  /** @var {Boolean} */
  primary: false,

  /** @var {Number} */
  size: 24,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: [
    'aria-disabled', 'aria-hidden', 'aria-label', 'aria-pressed',
    'iconInnerSelector:data-icon-inner-selector', 'data-toggle-off', 'data-toggle-on',
    'id', 'role'
  ],

  /** @var {String[]} */
  classNameBindings: [
    'accent:mdc-theme--accent',
    'dark:md-dark',
    'disabled:mdc-icon-toggle--disabled',
    'inactive:md-inactive',
    'light:md-light',
    'material:material-icons',
    'primary:mdc-theme--primary',
    'size18:md-18',
    'size24:md-24',
    'size36:md-36',
    'size48:md-48',
    'toggle:mdc-icon-toggle'
  ],

  /** @var {Function} */
  didInsertElement() {
    if (this.get('toggle')) {
      const id = this.get('id');
      const root = window.document.getElementById(id);

      const toggle = new MDCIconToggle(root);
      this.set('iconToggle', toggle);
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    if (this.get('toggle')) {
      if (this.get('iconInnerSelector')) {
        this.set('material', false);
        this.set('tagName', 'span');
      }

      this.set('aria-hidden', null);
      this.set('aria-pressed', this.get('pressed') ? 'true' : 'false');
      this.set('role', 'button');

      if (this.get('disabled')) {
        this.set('aria-disabled', 'true');
      }

      const off = {};

      const offContent = this.get('offContent');
      const offLabel = this.get('offLabel');
      const offCSSClass = this.get('offCSSClass');

      if (offCSSClass) {
        off.cssClass = offCSSClass;
      } else if (offContent) {
        off.content = offContent;
      }

      if (offLabel) {
        off.label = offLabel;
      }

      this.set('data-toggle-off', JSON.stringify(off));

      const on = {};

      const onContent = this.get('onContent');
      const onLabel = this.get('onLabel');
      const onCSSClass = this.get('onCSSClass');

      if (onCSSClass) {
        on.cssClass = onCSSClass;
      } else if (onContent) {
        on.content = onContent;
      }

      if (onLabel) {
        on.label = onLabel;
      }

      this.set('data-toggle-on', JSON.stringify(on));
    } else {
      const label = this.get('label');
      if (label) {
        this.set('aria-label', label);
      } else {
        this.set('aria-hidden', 'true');
      }

      this.set('disabled', false);
    }

    if (this.get('material')) {
      const size = this.get('size');
      this.set(`size${size}`, true);
    }

    const id = this.get('id');
    if (!id) {
      this.set('id', Ember.generateGuid());
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'i',

  /**************
   * Properties *
   **************/
  /** @var {MDCIconToggle} */
  iconToggle: null,

  /** @var {Boolean} */
  toggle: Ember.computed('{offContent,onContent,iconInnerSelector,offCSSClass,onCSSClass}', function() {
    return (this.get('offContent') !== null && this.get('onContent') !== null)
    || (this.get('iconInnerSelector') !== null && this.get('offCSSClass') !== null && this.get('onCSSClass') !== null);
  })
});
