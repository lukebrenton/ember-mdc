import Ember from 'ember';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  href: null,

  /** @var {Boolean} */
  menu: false,

  /** @var {Boolean} */
  nav: false,

  /** @var {Boolean} */
  permanentDrawer: false,

  /** @var {Boolean} */
  persistentDrawer: false,

  /** @var {Boolean} */
  selected: false,

  /** @var {?Number} */
  tabindex: null,

  /** @var {Boolean} */
  temporaryDrawer: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['href', 'role', 'tabindex'],

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
  init() {
    this._super(...arguments);

    if (this.get('menu')) {
      this.set('role', 'menuitem');
    }

    if (this.get('nav')) {
      if (!this.get('href')) {
        this.set('href', '#');
      }

      this.set('tagName', 'a');
    } else {
      this.set('href', null);
    }

    if (this.get('selected')) {
      const type = this.get('type');
      this.set(`${type}Selected`, true);
    }
  },

  /** @var {String} */
  tagName: 'li',

  /**************
   * Properties *
   **************/
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
  }),
});
