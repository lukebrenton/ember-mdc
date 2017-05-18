import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-switch', 'Integration | Component | mdc-switch', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-switch id="test"}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-switch class="test"}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the checked attribute', function(assert) {
  this.render(hbs`{{mdc-switch checked=true}}`);

  assert.equal(this.$('div input')[0].checked, true);
});

test('it supports the disabled attribute', function(assert) {
  this.render(hbs`{{mdc-switch disabled=true}}`);

  assert.equal(this.$('div').hasClass('mdc-switch--disabled'), true);
  assert.equal(this.$('div input')[0].disabled, true);
});

test('it supports the form attribute', function(assert) {
  this.render(hbs`{{mdc-switch form="test"}}`);

  assert.equal(this.$('div input').attr('form'), 'test');
});

test('it supports the label attribute', function(assert) {
  this.render(hbs`{{mdc-switch label="test"}}`);

  assert.equal(this.$('div').next().text().trim(), 'test');
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{mdc-switch name="test"}}`);

  assert.equal(this.$('div input').attr('name'), 'test');
});

test('it supports the value attribute', function(assert) {
  this.render(hbs`{{mdc-switch value="test"}}`);

  assert.equal(this.$('div input').attr('value'), 'test');
});
