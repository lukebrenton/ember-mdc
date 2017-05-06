import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-card';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  dark: false,

  /** @var {Boolean} */
  hasActions: false,

  /** @var {Boolean} */
  hasMedia: false,

  /** @var {Boolean} */
  hasSupportingText: false,

  /** @var {Boolean} */
  horizontal: false,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  largeTitle: true,

  /** @var {String} */
  mediaSize: '1',

  /** @var {?String} */
  mediaSrc: null,

  /** @var {?String} */
  subtitle: null,

  /** @var {?String} */
  title: null,

  /** @var {Boolean} */
  verticalActions: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['id'],

  /** @var {String[]} */
  classNameBindings: [
    'class',
    'dark:mdc-card--theme-dark',
    'horizontal:mdc-card__horizontal-block:mdc-card'
  ],

  /** @var {Function} */
  init() {
    this._super(...arguments);

    const id = this.get('id');
    if (!id) {
      this.set('id', Ember.generateGuid());
    }
  },

  /** @var {Object} */
  layout,

  /**************
   * Properties *
   **************/
  /** @var {Boolean} */
  isHorizontalContainer: Ember.computed('{hasActions,hasMedia,hasSupportingText,horizontal,primary}', function() {
    return !this.get('hasActions') && !this.get('hasMedia') && !this.get('hasSupportingText') && !this.get('horizontal') && !this.get('primary');
  }),

  /** @var {Object} */
  yieldActions: {actions: true},

  /** @var {Object} */
  yieldMedia: {media: true},

  /** @var {Boolean} */
  primary: Ember.computed('{subtitle,title}', function() {
    return this.get('subtitle') || this.get('title');
  }),

  /** @var {Object} */
  yieldSupportingText: {supportingText: true}
});
