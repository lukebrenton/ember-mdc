import Ember from 'ember';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  alignBottom: false,

  /** @var {Boolean} */
  alignMiddle: false,

  /** @var {Boolean} */
  alignTop: false,

  /** @var {?Number} */
  desktop: null,

  /** @var {?Number} */
  order: null,

  /** @var {?Number} */
  phone: null,

  /** @var {?Number} */
  span: null,

  /** @var {?Number} */
  tablet: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  classNameBindings: [
    'alignBottom:mdc-layout-grid__cell--align-bottom',
    'alignMiddle:mdc-layout-grid__cell--align-middle',
    'alignTop:mdc-layout-grid__cell--align-top',
    'dynamicClassNames'
  ],

  /** @var {String[]} */
  classNames: ['mdc-layout-grid__cell'],

  /** @var {String} */
  tagName: 'div',

  /**************
   * Properties *
   **************/
  /** @var {String} */
  dynamicClassNames: Ember.computed('{desktop,order,phone,span,tablet}', function() {
    const classes = [];

    const desktop = +this.get('desktop');
    const order = +this.get('order');
    const phone = +this.get('phone');
    const span = +this.get('span');
    const tablet = +this.get('tablet');

    if (desktop) {
      classes.push(`mdc-layout-grid__cell--span-${desktop}-desktop`);
    }

    if (order) {
      classes.push(`mdc-layout-grid__cell--order-${order}`);
    }

    if (phone) {
      classes.push(`mdc-layout-grid__cell--span-${phone}-phone`);
    }

    if (span) {
      classes.push(`mdc-layout-grid__cell--span-${span}`);
    }

    if (tablet) {
      classes.push(`mdc-layout-grid__cell--span-${tablet}-tablet`);
    }

    return classes.join(' ');
  })
});
