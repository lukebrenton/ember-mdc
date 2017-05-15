import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-form-field', 'Integration | Component | mdc-form-field', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-form-field id="test"}}{{/mdc-form-field}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports the alignEnd attribute', function(assert) {
  this.render(hbs`{{#mdc-form-field alignEnd=true}}{{/mdc-form-field}}`);

  assert.equal(this.$('div').hasClass('mdc-form-field--align-end'), true);
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-form-field class="test"}}{{/mdc-form-field}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it only initializes MDCFormField when a div and label is wrapped', function(assert) {
  this.render(hbs`{{#mdc-form-field}}<div></div><label></label>{{/mdc-form-field}}`);

  assert.ok(this.$('div')[0].mdcInstance);
});
