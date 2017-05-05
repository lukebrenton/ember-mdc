import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-textfield';
import { MDCTextfield, MDCTextfieldFoundation } from '@material/mdc-textfield';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {?Number} */
  cols: null,

  /** @var {Boolean} */
  dense: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {Boolean} */
  fullwidth: false,

  /** @var {?String} */
  helptext: null,

  /** @var {Boolean} */
  helptextPersistent: false,

  /** @var {Boolean} */
  helptextValidation: false,

  /** @var {?String} */
  id: null,

  /** @var {Object} */
  inputAttributes: {},

  /** @var {?String} */
  label: null,

  /** @var {Boolean} */
  multiline: false,

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  required: false,

  /** @var {?Number} */
  rows: null,

  /** @var {String} */
  type: 'text',

  /** @var {?String} */
  value: null,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {Object} */
  actions: {
    on(name, event) {
      this.get('eventHandlers')
      .filter((handler) => handler.name == name)
      .forEach((handler) => handler.fn(event));
    }
  },

  /** @var {Function} */
  didInsertElement() {
    const id = this.get('id');
    const root = Ember.$(`#${id}`);
    const input = root.find('input, textarea');
    const label = input.next();
    const helptext = Ember.$(`#${id}-helptext`);

    const elements = this.get('elements');
    elements.root = root;
    elements.input = input;
    elements.label = label;
    elements.helptext = helptext;

    const foundation = this.createFoundation();
    const textfield = new MDCTextfield(root[0], foundation);
    this.set('textfield', textfield);
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    this.set('elements', {});
    this.set('eventHandlers', new Ember.A());

    const id = this.get('id');
    if (!id) {
      this.set('id', Ember.generateGuid());
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: '',

  /***********
   * Methods *
   ***********/
  /**
   * Creates the foundation for
   */
  createFoundation() {
    const elements = this.get('elements');

    const addClass = function(element, className) {
      elements[element].addClass(className);
    };

    const deregisterHandler = function(name, fn) {
      this.get('eventHandlers').removeObject({fn: fn, name: name});
    };

    const registerHandler = function(name, fn) {
      this.get('eventHandlers').addObject({fn: fn, name: name});
    };

    const removeClass = function(element, className) {
      elements[element].removeClass(className);
    };

    return new MDCTextfieldFoundation({
      addClass: addClass.bind(this, 'root'),
      addClassToHelptext: addClass.bind(this, 'helptext'),
      addClassToLabel: addClass.bind(this, 'label'),
      deregisterInputBlurHandler: deregisterHandler.bind(this, 'blur'),
      deregisterInputFocusHandler: deregisterHandler.bind(this, 'focus'),
      deregisterInputInputHandler: deregisterHandler.bind(this, 'input'),
      deregisterInputKeydownHandler: deregisterHandler.bind(this, 'keydown'),
      getNativeInput: () => elements.input[0],
      helptextHasClass: (className) => elements.helptext.hasClass(className),
      isDisabled: () =>  elements.input[0].disabled,
      registerInputBlurHandler: registerHandler.bind(this, 'blur'),
      registerInputFocusHandler: registerHandler.bind(this, 'focus'),
      registerInputInputHandler: registerHandler.bind(this, 'input'),
      registerInputKeydownHandler: registerHandler.bind(this, 'keydown'),
      removeClass: removeClass.bind(this, 'root'),
      removeClassFromHelptext: removeClass.bind(this, 'helptext'),
      removeClassFromLabel: removeClass.bind(this, 'label'),
      removeHelptextAttr: (name) => elements.helptext.removeAttr(name),
      setDisabled: (disabled) => this.set('disabled', disabled),
      setHelptextAttr: (name, value) => elements.helptext.attr(name, value)
    });
  },

  /**************
   * Properties *
   **************/
  /** @var {Object} */
  elements: {},

  /** @var {Object[]} */
  eventHandlers: [],

  /** @var {String[]} */
  inputClasses: ['mdc-textfield__input'],

  /** @var {MDCTextfield} */
  textfield: null
});
