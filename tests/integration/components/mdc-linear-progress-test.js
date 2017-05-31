import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-linear-progress', 'Integration | Component | mdc-linear-progress', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-linear-progress id="test"}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports the accent attribute', function(assert) {
  this.render(hbs`{{mdc-linear-progress accent=true}}`);

  assert.equal(this.$('div').hasClass('mdc-linear-progress--accent'), true);
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-linear-progress class="test"}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the indeterminate attribute', function(assert) {
  this.render(hbs`{{mdc-linear-progress indeterminate=true}}`);

  assert.equal(this.$('div').hasClass('mdc-linear-progress--indeterminate'), true);
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{mdc-linear-progress name="test"}}`);

  assert.ok(window.emberMDC.test);
});

test('it supports the reversed attribute', function(assert) {
  this.render(hbs`{{mdc-linear-progress reversed=true}}`);

  assert.equal(this.$('div').hasClass('mdc-linear-progress--reversed'), true);
});
