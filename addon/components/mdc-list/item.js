import Ember from 'ember';

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
    if (this.get('tagName') == 'a') {
      this.$().click((e) => {
        e.preventDefault();
        this.trigger('click', e);
      });
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
  })
});
