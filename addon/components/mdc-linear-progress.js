import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-linear-progress';
import { MDCLinearProgress } from '@material/linear-progress';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  accent: false,

  /** @var {?String} */
  class: null,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  indeterminate: false,

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  reversed: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['role'],

  /** @var {String[]} */
  classNameBindings: [
    'accent:mdc-linear-progress--accent',
    'indeterminate:mdc-linear-progress--indeterminate',
    'reversed:mdc-linear-progress--reversed'
  ],

  /** @var {String[]} */
  classNames: ['mdc-linear-progress'],

  /** @var {Function} */
  didInsertElement() {
    const root = this.$()[0];

    const linearProgress = new MDCLinearProgress(root);
    this.set('mdcInstance', linearProgress);
    root.mdcInstance = linearProgress;

    const name = this.get('name');
    if (name) {
      emberMDC.set(name, linearProgress);
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'div',

  /**************
   * Properties *
   **************/
  /** @var {MDCLinearProgress} */
  mdcInstance: null,

  /** @var {String} */
  role: 'progressbar'
});
