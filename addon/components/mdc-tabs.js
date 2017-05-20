import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-tabs';
import { MDCTabBar } from '@material/tabs';
import { emberMDC } from 'ember-mdc/util';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  accent: false,

  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  icons: false,

  /** @var {Boolean} */
  iconsWithText: false,

  /** @var {?String} */
  id: null,

  /** @var {Boolean} */
  primary: false,

  /** @var {Object[]} */
  tabs: [],

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['id'],

  /** @var {String[]} */
  classNameBindings: [
    'accent:mdc-tab-bar--indicator-accent',
    'icons:mdc-tab-bar--icon-tab-bar',
    'iconsWithText:mdc-tab-bar--icons-with-text',
    'primary:mdc-tab-bar--indicator-primary'
  ],

  /** @var {String[]} */
  classNames: ['mdc-tab-bar'],

  /** @var {Function} */
  didInsertElement() {
    const id = this.get('id');
    const root = window.document.getElementById(id);

    const tabBar = new MDCTabBar(root);
    this.set('mdcInstance', tabBar);
    root.mdcInstance = tabBar;

    const name = this.get('name');
    if (name) {
      emberMDC.set(name, tabBar);
    }

    this.setupPageListener(tabBar);
  },

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

  /** @var {String} */
  tagName: 'nav',

  /***********
   * Methods *
   ***********/
  /**
   * Finds the first element that matches the selector in the NodeList
   * @param {NodeList} nodeList The NodeList to search
   * @param {string} selector The selector to use
   * @return {HTMLElement}
   */
  find(nodeList, selector) {
    for (let i = 0, l = nodeList.length; i < l; i++) {
      const element = nodeList[i];
      if (element.matches(selector)) {
        return element;
      }
    }

    return null;
  },

  /**
   * Sets up the page listener for md-page elements
   */
  setupPageListener(tabBar) {
    tabBar.listen('MDCTabBar:change', (e) => {
      const index = e.detail.activeTabIndex;
      const tab = tabBar.root_.children[index];

      if (!tab || !tab.href || tab.href.indexOf('#') == -1) {
        return;
      }

      const href = tab.href.split('#')[1];

      const name = this.get('name');
      const pages = name ?
        document.querySelectorAll(`.md-page[data-tab-group="${name}"]`) :
        document.querySelectorAll('.md-page:not([data-tab-group])');

      const active = this.find(pages, '.md-page--active');
      const page = this.find(pages, `[data-tab="${href}"]`);

      if (active != page) {
        if (active) {
          active.classList.remove('md-page--active');
        }

        if (page) {
          page.classList.add('md-page--active');
        }
      }
    });
  },

  /**************
   * Properties *
   **************/
  /** @var MDCTabBar */
  mdcInstance: null
});
