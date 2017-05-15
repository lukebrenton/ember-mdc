import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-toolbar';
import { MDCToolbar } from '@material/toolbar';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  fixed: false,

  /** @var {Boolean} */
  fixedLastRow: false,

  /** @var {Boolean} */
  flexible: false,

  /** @var {Boolean} */
  flexibleNoDefault: false,

  /** @var {?String} */
  id: null,

  /** @var {Number} */
  rows: 1,

  /** @var {Boolean} */
  waterfall: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  classNameBindings: [
    'fixed:mdc-toolbar--fixed',
    'fixedLastRow:mdc-toolbar--fixed-lastrow-only',
    'flexible:mdc-toolbar--flexible',
    'flexibleDefaultBehavior:mdc-toolbar--flexible-default-behavior',
    'waterfall:mdc-toolbar--waterfall'
  ],

  /** @var {String[]} */
  classNames: ['mdc-toolbar'],

  /** @var {Function} */
  didInsertElement() {
    const root = this.$()[0];

    const toolbar = new MDCToolbar(root);
    this.set('mdcInstance', toolbar);
    root.mdcInstance = toolbar;

    if (this.get('fixed')) {
      const fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
      if (fixedAdjustElement) {
        toolbar.fixedAdjustElement = fixedAdjustElement;
      }
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    if (this.get('waterfall')) {
      this.set('fixed', true);
    }

    if (this.get('fixedLastRow')) {
      this.set('fixed', true);
    }

    if (this.get('flexible')) {
      this.set('flexibleDefaultBehavior', true);
    } else if (this.get('flexibleNoDefault')) {
      this.set('flexible', true);
    }

    const rows = this.get('rows');
    if (rows) {
      const arr = [];
      for (let i = 0, l = rows; i < l; i++) {
        const row = {};
        row[i + 1] = true;

        arr.push(i + 1);
      }

      this.set('rows', arr);
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'header',

  /**************
   * Properties *
   **************/
  /** @var {Boolean} */
  flexibleDefaultBehavior: false,

  /** @var {Number} */
  index: 0,

  /** @var {MDCToolbar} */
  mdcInstance: null
});
