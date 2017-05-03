/* eslint-env node */
'use strict';

/* Based on https://github.com/secondstreet/ember-material-components-web/blob/master/index.js */

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var materialPackages = [
  { css: true, js: true, name: 'animation', path: 'animation' },
  { css: false, js: true, name: 'autoInit', path: 'auto-init' },
  { css: false, js: true, name: 'base', path: 'base' },
  { css: true, js: false, name: 'button', path: 'button' },
  { css: true, js: false, name: 'card', path: 'card' },
  { css: true, js: true, name: 'checkbox', path: 'checkbox' },
  { css: true, js: true, name: 'dialog', path: 'dialog' },
  { css: true, js: true, name: 'drawer', path: 'drawer' },
  { css: true, js: false, name: 'elevation', path: 'elevation' },
  { css: true, js: false, name: 'fab', path: 'fab' },
  { css: true, js: false, name: 'formField', path: 'form-field' },
  { css: true, js: true, name: 'gridList', path: 'grid-list' },
  { css: true, js: true, name: 'iconToggle', path: 'icon-toggle' },
  { css: true, js: false, name: 'layoutGrid', path: 'layout-grid' },
  { css: true, js: false, name: 'list', path: 'list' },
  { css: true, js: true, name: 'menu', path: 'menu' },
  { css: true, js: true, name: 'radio', path: 'radio' },
  { css: true, js: true, name: 'ripple', path: 'ripple' },
  { css: false, js: false, name: 'rtl', path: 'rtl' },
  { css: true, js: true, name: 'select', path: 'select' },
  { css: true, js: true, name: 'snackbar', path: 'snackbar' },
  { css: true, js: false, name: 'switch', path: 'switch' },
  { css: true, js: true, name: 'textfield', path: 'textfield' },
  { css: true, js: false, name: 'theme', path: 'theme' },
  { css: true, js: false, name: 'toolbar', path: 'toolbar' },
  { css: true, js: false, name: 'typography', path: 'typography' }
];

module.exports = {
  name: 'ember-mdc',

  /**
   * Invoked at the beginning of the build process, this hook allows us to
   * use the `import()` method to include files from our `vendor` tree into
   * the built app.
   */
  included: function(app) {
    materialPackages.forEach(function(pkg) {
      if (pkg.js) {
        app.import(`vendor/ember-mdc/@material/${pkg.path}/mdc.${pkg.name}.min.js`, {
          using: [{ as: `@material/${pkg.path}`, transformation: 'amd' }]
        });
      }
      if (pkg.css) {
        app.import(`vendor/ember-mdc/@material/${pkg.path}/mdc.${pkg.name}.min.css`);
        // app.import(`vendor/ember-mdc/@material/${pkg.path}/mdc-${pkg.path}.scss`);
      }
    });
  },

  /**
   * Returns a Broccoli tree for the addon's `vendor` directory. The `vendor`
   * directory isn't explicitly used for anything, but files can be `import()`ed
   * which we do in the `included` hook above.
   *
   * This is necessary because Ember CLI doesn't currently support `import()`ing
   * anything directly from a `node_modules/` folder.
   */
  treeForVendor: function() {
    var trees = materialPackages.map(function(pkg) {
      var include = [];
      if (pkg.css) {
        include.push(`@material/${pkg.path}/**/mdc.${pkg.name}.min.css`);
        include.push(`@material/${pkg.path}/*.scss`);
      }
      if (pkg.js) {
        include.push(`@material/${pkg.path}/**/mdc.${pkg.name}.min.js`);
      }

      return new Funnel(`node_modules`, {
        destDir: 'ember-mdc',
        include: include
      });
    });

    return this._super(mergeTrees(trees, { overwrite: true }));
  }
};
