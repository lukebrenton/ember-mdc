import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-checkbox';
import { MDCCheckbox, MDCCheckboxFoundation } from '@material/mdc-checkbox';
import { getCorrectEventName } from '@material/mdc-animation';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  checked: false,

  /** @var {Boolean} */
  dark: false,

  /** @var {Boolean} */
  disabled: false,

  /** @var {?String} */
  form: null,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  indeterminate: false,

  /** @var {Object} */
  inputAttributes: {},

  /** @var {?String} */
  label: null,

  /** @var {?String} */
  name: null,

  /** @var {Boolean} */
  required: false,

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
    const input = root.find('input');

    const elements = this.get('elements');
    elements.root = root;
    elements.input = input;

    const animationend = getCorrectEventName('animationend');
    this.set('animationend', animationend);

    const foundation = this.createFoundation();
    const checkbox = new MDCCheckbox(root[0], foundation);
    this.set('checkbox', checkbox);

    root.on(animationend, (event) => {
      this.get('eventHandlers')
      .filter((handler) => handler.name == animationend)
      .forEach((handler) => handler.fn(event));
    });

    if (this.get('indeterminate')) {
      input[0].indeterminate = true;
    }
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
    const animationend = this.get('animationend');

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

    return new MDCCheckboxFoundation({
      addClass: addClass.bind(this, 'root'),
      deregisterAnimationEndHandler: deregisterHandler.bind(this, animationend),
      deregisterChangeHandler: deregisterHandler.bind(this, 'change'),
      forceLayout: () => elements.root[0].clientHeight,
      getNativeInput: () => elements.input[0],
      isAttachedToDOM: () => elements.root[0].parentNode !== undefined,
      registerAnimationEndHandler: registerHandler.bind(this, animationend),
      registerChangeHandler: registerHandler.bind(this, 'change'),
      removeClass: removeClass.bind(this, 'root')
    });
  },

  /**************
   * Properties *
   **************/
  /** @var {String} */
  animationend: '',

  /** @var {MDCCheckbox} */
  checkbox: null,

  /** @var {Object} */
  elements: {},

  /** @var {Object[]} */
  eventHandlers: []
});
