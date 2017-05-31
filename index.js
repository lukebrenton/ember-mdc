/* eslint-env node */
'use strict';

/* Based on https://github.com/secondstreet/ember-material-components-web/blob/master/index.js */

var fs = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var materialPackages = [
  {
    css: true,
    js: true,
    name: 'animation',
    path: 'animation'
  },
  {
    css: false,
    js: true,
    name: 'autoInit',
    path: 'auto-init'
  },
  {
    css: false,
    js: true,
    name: 'base',
    path: 'base'
  },
  {
    css: true,
    depends: ['animation', 'elevation', 'ripple', 'theme', 'typography'],
    js: false,
    name: 'button',
    path: 'button'
  },
  {
    css: true,
    depends: ['elevation', 'theme', 'typography', 'rtl'],
    js: false,
    name: 'card',
    path: 'card'
  },
  {
    css: true,
    depends: ['animation', 'ripple', 'rtl'],
    js: true,
    name: 'checkbox',
    path: 'checkbox'
  },
  {
    css: true,
    depends: ['animation', 'elevation', 'rtl', 'theme', 'typography'],
    js: true,
    name: 'dialog',
    path: 'dialog'
  },
  {
    css: true,
    depends: ['animation', 'elevation', 'rtl', 'theme'],
    js: true,
    name: 'drawer',
    path: 'drawer',
    structure: ['permanent', 'persistent', 'slidable', 'temporary']
  },
  {
    css: true,
    depends: ['animation'],
    js: false,
    name: 'elevation',
    path: 'elevation'
  },
  {
    css: true,
    depends: ['animation', 'elevation', 'ripple', 'theme'],
    js: false,
    name: 'fab',
    path: 'fab'
  },
  {
    css: true,
    depends: ['rtl', 'theme', 'typography'],
    js: true,
    name: 'formField',
    path: 'form-field'
  },
  {
    css: true,
    depends: ['rtl', 'theme', 'typography'],
    js: true,
    name: 'gridList',
    path: 'grid-list'
  },
  {
    css: true,
    depends: ['animation', 'ripple', 'theme'],
    js: true,
    name: 'iconToggle',
    path: 'icon-toggle'
  },
  {
    css: true,
    js: false,
    name: 'layoutGrid',
    path: 'layout-grid'
  },
  {
    css: true,
    depends: ['ripple', 'rtl', 'theme', 'typography'],
    js: false,
    name: 'list',
    path: 'list'
  },
  {
    css: true,
    depends: ['animation', 'elevation', 'theme', 'typography'],
    js: true,
    name: 'menu',
    path: 'menu',
    structure: ['simple']
  },
  {
    css: true,
    depends: ['animation', 'ripple', 'theme'],
    js: true,
    name: 'radio',
    path: 'radio'
  },
  {
    css: true,
    depends: ['animation'],
    js: true,
    name: 'ripple',
    path: 'ripple'
  },
  {
    css: false,
    js: false,
    name: 'rtl',
    path: 'rtl'
  },
  {
    css: true,
    depends: ['animation', 'rtl', 'theme', 'typography'],
    js: true,
    name: 'select',
    path: 'select'
  },
  {
    css: true,
    depends: ['animation', 'rtl', 'theme', 'typography'],
    js: true,
    name: 'snackbar',
    path: 'snackbar'
  },
  {
    css: true,
    depends: ['animation', 'elevation', 'theme'],
    js: false,
    name: 'switch',
    path: 'switch'
  },
  {
    css: true,
    depends: ['animation', 'ripple', 'rtl', 'theme', 'typography'],
    js: true,
    name: 'tabs',
    path: 'tabs',
    structure: ['tab-bar-scroller', 'tab-bar', 'tab']
  },
  {
    css: true,
    depends: ['animation', 'rtl', 'theme', 'typography'],
    js: true,
    name: 'textfield',
    path: 'textfield'
  },
  {
    css: true,
    js: false,
    name: 'theme',
    path: 'theme'
  },
  {
    css: true,
    depends: ['elevation', 'rtl', 'theme', 'typography'],
    js: true,
    name: 'toolbar',
    path: 'toolbar'
  },
  {
    css: true,
    js: false,
    name: 'typography',
    path: 'typography'
  }
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
      if (pkg.css) {
        app.import(`vendor/@material/${pkg.path}/dist/mdc.${pkg.path}.min.css`);
      }

      if (pkg.js) {
        app.import(`vendor/@material/${pkg.path}/dist/mdc.${pkg.name}.min.js`, {
          using: [{ as: `@material/${pkg.path}`, transformation: 'amd' }]
        });
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
    function getDependencyTree(path, depends) {
      var trees = depends.map(function(dependency) {
        var pkg = materialPackages.filter(function(pkg) {
          return pkg.name == dependency;
        })[0];

        var tree = new Funnel('node_modules/@material', {
          destDir: `${path}/@material`,
          include: ['*/*.scss']
        });

        if (pkg.depends) {
          return mergeTrees([tree, getDependencyTree(`${path}/@material/${pkg.path}`, pkg.depends)], { overwrite: true });
        }

        return tree;
      });

      return mergeTrees(trees, { overwrite: true });
    }

    var trees = materialPackages.map(function(pkg) {
      var include = [];
      if (pkg.css) {
        include.push(`dist/mdc.${pkg.path}.min.css`);
        include.push(`*.scss`);
      }

      if (pkg.js) {
        include.push(`dist/mdc.${pkg.name}.min.js`);
      }

      if (pkg.name == 'rtl') {
        include.push('_mixins.scss');
      }

      var tree = new Funnel(`node_modules/@material/${pkg.path}`, {
        destDir: `@material/${pkg.path}`,
        include: include
      });

      if (pkg.structure) {
        var trees = [tree];

        pkg.structure.forEach(function(dir) {
          trees.push(new Funnel(`node_modules/@material/${pkg.path}/${dir}`, {
            destDir: `@material/${pkg.path}/${dir}`,
            include: ['*.scss', '*.css'] // include *.css for drawer/slidable/*.css
          }));

          if (pkg.depends) {
            trees.push(getDependencyTree(`@material/${pkg.path}/${dir}`, pkg.depends));
          }
        });

        tree = mergeTrees(trees, { overwrite: true });
      }

      if (pkg.depends) {
        return mergeTrees([tree, getDependencyTree(`@material/${pkg.path}`, pkg.depends)], { overwrite: true });
      }

      return tree;
    });

    if (fs.existsSync('node_modules/ember-mdc')) {
      trees.push(new Funnel('node_modules/ember-mdc', {
        destDir: 'material-components-web',
        include: ['material-components-web.scss']
      }));
    }

    return this._super(mergeTrees(trees, { overwrite: true }));
  }
};
