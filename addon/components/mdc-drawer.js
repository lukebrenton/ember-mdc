import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-drawer';
import { MDCPersistentDrawer, MDCTemporaryDrawer } from '@material/drawer';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  hasHeader: false,

  /** @var {Boolean} */
  hasSpacer: false,

  /** @var {?String} */
  id: null,

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  permanent: false,

  /** @var {Boolean} */
  persistent: false,

  /** @var {Boolean} */
  temporary: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['id'],

  /** @var {String[]} */
  classNameBindings: [
    'permanent:mdc-permanent-drawer',
    'persistent:mdc-persistent-drawer',
    'temporary:mdc-temporary-drawer'
  ],

  /** @var {String[]} */
  classNames: ['mdc-typography'],

  /** @var {Function} */
  didInsertElement() {
    const id = this.get('id');
    const root = Ember.$(`#${id}`);

    if (this.get('slider')) {
      const type = this.get('type');
      root.wrapInner(`<nav class="mdc-${type}-drawer__drawer"></nav>`);

      let drawer = null;
      if (this.get('persistent')) {
        drawer = new MDCPersistentDrawer(root[0]);
      } else if (this.get('temporary')) {
        drawer = new MDCTemporaryDrawer(root[0]);
      }

      const name = this.get('name');
      if (name) {
        emberMDC.set(name, drawer);
      }

      root[0].mdcInstance = drawer;
      this.set('mdcInstance', drawer);
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    const id = this.get('id');
    if (!id) {
      this.set('id', Ember.generateGuid());
    }

    if (this.get('slider')) {
      this.set('tagName', 'aside');
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'nav',

  /**************
   * Properties *
   **************/
  /** @var {MDCSliderDrawer} */
  mdcInstance: null,

  /** @var {Boolean} */
  slider: Ember.computed('{persistent,temporary}', function() {
    return this.get('persistent') || this.get('temporary');
  }),

  /** @var {?String} */
  type: Ember.computed('{permanent,persistent,temporary}', function() {
    const types = ['permanent', 'persistent', 'temporary'];
    for (let i = 0, l = types.length; i < l; i++) {
      const type = types[i];
      if (this.get(type)) {
        return type;
      }
    }

    return null;
  }),

  /** @var {Object} */
  yieldContent: {content: true},

  /** @var {Object} */
  yieldHeader: {header: true},

  /** @var {Object} */
  yieldSpacer: {spacer: true}
});
