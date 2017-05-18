import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-grid-list';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  aspect: null,

  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  header: false,

  /** @var {Boolean} */
  iconAlignEnd: false,

  /** @var {Boolean} */
  iconAlignStart: false,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  imageOnly: false,

  /** @var {Object[]} */
  items: [],

  /** @var {Boolean} */
  smallGutter: false,

  /** @var {Boolean} */
  useDiv: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['id'],

  /** @var {String[]} */
  classNameBindings: [
    'dynamicClassNames',
    'hasCaption:mdc-grid-list--twoline-caption',
    'header:mdc-grid-list--header-caption',
    'iconAlignEnd:mdc-grid-list--with-icon-align-end',
    'iconAlignStart:mdc-grid-list--with-icon-align-start',
    'smallGutter:mdc-grid-list--tile-gutter-1'
  ],

  /** @var {String[]} */
  classNames: ['mdc-grid-list'],

  /** @var {Object} */
  layout,

  /**************
   * Properties *
   **************/
  /** @var {String} */
  dynamicClassNames: Ember.computed('aspect', function() {
    const classes = [];

    const aspect = this.get('aspect');
    if (aspect) {
      classes.push(`mdc-grid-list--tile-aspect-${aspect}`);
    }

    return classes.join(' ');
  }),

  /** @var {Boolean} */
  hasCaption: Ember.computed('items.[]', function() {
    const items = this.get('items');
    for (let i = 0, l = items.length; i < l; i++) {
      const item = items[i];

      if (item.caption) {
        return true;
      }
    }

    return false;
  }),

  /** @var {Boolean} */
  hasIcon: Ember.computed('{iconAlignEnd,iconAlignStart}', function() {
    return this.get('iconAlignEnd') || this.get('iconAlignStart');
  })
});
