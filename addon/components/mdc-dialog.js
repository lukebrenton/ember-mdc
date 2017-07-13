import Ember from 'ember';
import { MDCDialog } from '@material/dialog';
import layout from 'ember-mdc/templates/components/mdc-dialog';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  dark: false,

  /** @var {?String} */
  id: null,

  /** @var {?String} */
  name: null,

  /** @var {?String} */
  role: null,

  /** @var {Boolean} */
  scrollable: false,

  /** @var {?String} */
  title: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['aria-describedby', 'aria-hidden', 'aria-labelledby', 'id', 'role', 'style'],

  /** @var {String[]} */
  classNameBindings: ['dark:mdc-dialog--theme-dark'],

  /** @var {String[]} */
  classNames: ['mdc-dialog'],

  /** @var {Function} */
  didInsertElement() {
    const id = this.get('id');
    const root = window.document.getElementById(id);

    const dialog = new MDCDialog(root);
    this.set('mdcInstance', dialog);
    root.mdcInstance = dialog;

    const name = this.get('name');
    if (name) {
      emberMDC.set(name, dialog);
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    let id = this.get('id');
    if (!id) {
      id = Ember.generateGuid();
      this.set('id', id);
    }

    this.set('aria-describedby', `${id}-description`);
    this.set('aria-hidden', 'true');
    this.set('aria-labelledby', `${id}-label`);
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'aside',

  /**************
   * Properties *
   **************/
  /** @var {MDCDialog} */
  mdcInstance: null,

  /** @var {Object} */
  yieldDescription: {description: true},

  /** @var {Object} */
  yieldFooter: {footer: true}
});
