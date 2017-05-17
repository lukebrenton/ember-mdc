import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-radio', 'Integration | Component | mdc-radio', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-radio id="food"}}`);

  let container = this.$().find('#food');
  assert.ok(container[0], 'the container has the correct ID');

  let input = container.find('#food-radio');
  assert.ok(input[0], 'the input has the correct ID');
});

test('it will generate an ID when not provided', function(assert) {
  this.render(hbs`{{mdc-radio}}`);

  const id_regex = /^ember\d+/;

  let container = this.$().children();
  assert.equal(id_regex.test(container[0].id), true, 'the container has the correct ID');

  let input = container.find('input');
  assert.equal(id_regex.test(input[0].id), true, 'the input has the correct ID');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-radio class="test"}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the checked attribute', function(assert) {
  this.render(hbs`{{mdc-radio checked=true}}`);

  assert.equal(this.$('input')[0].checked, true);
});

test('it supports the disabled attribute', function(assert) {
  this.render(hbs`{{mdc-radio disabled=true}}`);

  assert.equal(this.$('div').hasClass('mdc-radio--disabled'), true);
  assert.equal(this.$('input')[0].disabled, true);
});

test('it supports the form attribute', function(assert) {
  this.render(hbs`{{mdc-radio form="test"}}`);

  assert.equal(this.$('input').attr('form'), 'test');
});

test('it supports the inputAttributes attribute', function(assert) {
  this.set('inputAttributes', {tabindex: -1});
  this.render(hbs`{{mdc-radio inputAttributes=inputAttributes}}`);

  assert.equal(this.$('input').attr('tabindex'), -1);
});

test('it supports the label attribute', function(assert) {
  this.render(hbs`{{mdc-radio label="test"}}`);

  assert.equal(this.$('div').next().text().trim(), 'test');
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{mdc-radio name="test"}}`);

  assert.equal(this.$('input').attr('name'), 'test');
});

test('it supports the required attribute', function(assert) {
  this.render(hbs`{{mdc-radio required=true}}`);

  assert.equal(this.$('input')[0].required, true);
});

test('it supports the value attribute', function(assert) {
  this.render(hbs`{{mdc-radio value="test"}}`);

  assert.equal(this.$('input').val(), 'test');
});
