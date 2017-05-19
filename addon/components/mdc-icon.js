import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-icon';
import { MDCIconToggle } from '@material/icon-toggle';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  accent: false,

  /** @var {Boolean} */
  button: false,

  /** @var {?String} */
  class: null,

  /** @var {?String} */
  content: null,

  /** @var {Boolean} */
  dark: false,

  /** @var {?String} */
  dialog: null,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  drawer: null,

  /** @var {Boolean} */
  gridList: false,

  /** @var {?String} */
  href: null,

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
  menu: null,

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

  /** @var {Boolean} */
  tab: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: [
    'aria-disabled', 'aria-hidden', 'aria-label', 'aria-pressed',
    'iconInnerSelector:data-icon-inner-selector', 'data-toggle-off', 'data-toggle-on',
    'href', 'id', 'role'
  ],

  /** @var {String[]} */
  classNameBindings: [
    'accent:mdc-theme--accent',
    'button:md-button',
    'dark:md-dark',
    'disabled:mdc-icon-toggle--disabled',
    'gridList:mdc-grid-tile__icon',
    'inactive:md-inactive',
    'light:md-light',
    'material:material-icons',
    'primary:mdc-theme--primary',
    'size18:md-18',
    'size24:md-24',
    'size36:md-36',
    'size48:md-48',
    'tab:mdc-tab__icon',
    'toggle:mdc-icon-toggle'
  ],

  /** @var {Function} */
  didInsertElement() {
    if (this.get('toggle')) {
      const id = this.get('id');
      const root = window.document.getElementById(id);

      const toggle = new MDCIconToggle(root);
      this.set('iconToggle', toggle);
    } else {
      const dialog = this.get('dialog');
      if (dialog) {
        this.set('button', true);
        this.$().on('click', () => emberMDC.get(dialog).show());
      }

      const drawer = this.get('drawer');
      if (drawer) {
        this.set('button', true);
        this.$().on('click', () => {
          const _drawer = emberMDC.get(drawer);
          _drawer.open = !_drawer.open;
        });
      }

      const menu = this.get('menu');
      if (menu) {
        this.set('button', true);
        this.$().on('click', () => {
          const _menu = emberMDC.get(menu);
          _menu.open = !_menu.open;
        });
      }
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

      if (this.get('href')) {
        this.set('aria-hidden', null);
        this.set('tagName', 'a');
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
