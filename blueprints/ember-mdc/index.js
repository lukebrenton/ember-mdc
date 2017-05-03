/* global module */
module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addPackagesToProject([
      { name: '@material/animation', target: '^0.2.0' },
      { name: '@material/auto-init', target: '^0.1.1' },
      { name: '@material/base', target: '^0.1.2' },
      { name: '@material/button', target: '^0.3.4' },
      { name: '@material/card', target: '^0.1.8' },
      { name: '@material/checkbox', target: '^0.3.2' },
      { name: '@material/dialog', target: '^0.2.2' },
      { name: '@material/drawer', target: '^0.4.0' },
      { name: '@material/elevation', target: '^0.1.5' },
      { name: '@material/fab', target: '^0.3.6' },
      { name: '@material/form-field', target: '^0.2.4' },
      { name: '@material/grid-list', target: '^0.2.1' },
      { name: '@material/icon-toggle', target: '^0.1.9' },
      { name: '@material/layout-grid', target: '^0.1.1' },
      { name: '@material/list', target: '^0.2.7' },
      { name: '@material/menu', target: '^0.2.4' },
      { name: '@material/radio', target: '^0.2.2' },
      { name: '@material/ripple', target: '^0.6.0' },
      { name: '@material/rtl', target: '^0.1.3' },
      { name: '@material/select', target: '^0.3.4' },
      { name: '@material/snackbar', target: '^0.1.9' },
      { name: '@material/switch', target: '^0.1.5' },
      { name: '@material/textfield', target: '^0.2.7' },
      { name: '@material/theme', target: '^0.1.4' },
      { name: '@material/toolbar', target: '^0.3.0' },
      { name: '@material/typography', target: '^0.2.1' }
    ]);
  }
};
