/* global module */
module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'material-components-web', target: '^0.11.1' }
    ]);
  }
};
