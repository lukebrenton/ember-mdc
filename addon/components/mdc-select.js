import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-select';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  form: null,

  /** @var {Object} */
  groups: {},

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  multiple: false,

  /** @var {?String} */
  name: null,

  /** @var {Object} */
  options: {},

  /** @var {?String} */
  placeholder: null,

  /** @var {Boolean} */
  required: false,

  /** @var {String} */
  selected: '',

  /** @var {?Number} */
  size: null,

  /** @var {?Number} */
  tabindex: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['disabled', 'form', 'id', 'name', 'multiple', 'required', 'size', 'tabindex'],

  /** @var {String[]} */
  classNameBindings: [
    'multiple:mdc-multi-select:mdc-select',
    'multiple:mdc-list'
  ],

  /** @var {Function} */
  init() {
    this._super(...arguments);

    let formattedOptions = [];
    const selected = this.get('selected');

    const placeholder = this.get('placeholder');
    if (placeholder && !this.get('multiple')) {
      const item = {
        name: placeholder,
        value: ''
      };

      if (!selected) {
        item.selected = true;
      }

      formattedOptions.push(item);
    }

    formattedOptions = formattedOptions.concat(this.formatOptions(this.get('options')));

    this.set('formattedOptions', formattedOptions);

    const formattedGroups = [];
    const groups = this.get('groups');
    for (let label in groups) {
      if (groups.hasOwnProperty(label)) {
        const item = {
          label: label,
          options: this.formatOptions(groups[label])
        };

        if (formattedGroups.length) {
          formattedGroups.push({divider: true});
        }

        formattedGroups.push(item);
      }
    }

    this.set('formattedGroups', formattedGroups);
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'select',

  /***********
   * Methods *
   ***********/
  /** @var {Function} */
  formatOptions(options) {
    const selected = this.get('selected');
    const items = [];

    for (let value in options) {
      const name = options[value];

      const option = {
        name: name,
        value: value
      };

      if (value === selected) {
        option.selected = true;
      }

      items.push(option);
    }

    return items;
  },

  /**************
   * Properties *
   **************/
  /** @var {Object[]} */
  formattedGroups: [],

  /** @var {Object[]} */
  formattedOptions: [],

  /** @var {MDCMenu} */
  mdcInstance: null,

  /** @var {String} */
  role: 'listbox',

  /** @var {?Object} */
  selectedItem: null,
});
