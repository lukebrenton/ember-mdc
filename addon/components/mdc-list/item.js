import Ember from 'ember';
import { MDCRipple } from '@material/ripple';

export default Ember.LinkComponent.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  menu: false,

  /** @var {Boolean} */
  nav: false,

  /** @var {Boolean} */
  permanentDrawer: false,

  /** @var {Boolean} */
  persistentDrawer: false,

  /** @var {Boolean} */
  ripple: false,

  /** @var {Boolean} */
  selected: false,

  /** @var {Boolean} */
  temporaryDrawer: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['role'],

  /** @var {String[]} */
  classNameBindings: [
    'selected',
    'permanentSelected:mdc-permanent-drawer--selected',
    'persistentSelected:mdc-persistent-drawer--selected',
    'temporarySelected:mdc-temporary-drawer--selected'
  ],

  /** @var {String[]} */
  classNames: ['mdc-list-item'],

  /** @var {Function} */
  didInsertElement() {
    if (this.get('tagName') == 'a' && !this.get('_isDisabled')) {
      this.$().click((e) => {
        e.preventDefault();
        this.trigger('click', e);
      });
    }

    if (this.get('ripple')) {
      MDCRipple.attachTo(this.$()[0]);
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    if (this.get('menu')) {
      this.set('role', 'menuitem');
    }

    if (this.get('nav')) {
      this.set('tagName', 'a');
    } else {
      this.set('_isDisabled', true);
    }

    if (this.get('selected')) {
      const type = this.get('type');
      this.set(`${type}Selected`, true);
    }

    const params = this.get('params');
    const model = this.get('model');
    if (model) {
      params.push(model);
    }
  },

  /** @var {String} */
  tagName: 'li',

  /**************
   * Properties *
   **************/
  /** @var {Boolean} */
  _isDisabled: false,

  /** @var {String} */
  role: null,

  /** @var {String} */
  type: Ember.computed('{permanentDrawer,persistentDrawer,temporaryDrawer}', function() {
    const types = ['permanentDrawer', 'persistentDrawer', 'temporaryDrawer'];
    for (let i = 0, l = types.length; i < l; i++) {
      const type = types[i];
      if (this.get(type)) {
        return type.replace('Drawer', '');
      }
    }

    return '';
  })
});
