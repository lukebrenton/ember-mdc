import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-snackbar', 'Integration | Component | mdc-snackbar', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-snackbar id="test"}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-snackbar class="test"}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{mdc-snackbar name="test"}}`);

  assert.ok(window.emberMDC.test);
});
