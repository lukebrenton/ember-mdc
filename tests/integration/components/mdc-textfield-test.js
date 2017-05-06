import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-textfield', 'Integration | Component | mdc-textfield', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="email"}}`);

  let container = this.$().find('#email');
  assert.ok(container[0], 'the container has the correct ID');

  let input = container.find('#email-input');
  assert.ok(input[0], 'the input has the correct ID');
});

test('it will generate an ID when not provided', function(assert) {
  this.render(hbs`{{mdc-textfield}}`);

  const id_regex = /^ember\d+/;

  let container = this.$().children();
  assert.equal(id_regex.test(container[0].id), true, 'the container has the correct ID');

  let input = container.find('input');
  assert.equal(id_regex.test(input[0].id), true, 'the input has the correct ID');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" class="test"}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the dark attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" dark=true}}`);

  assert.equal(this.$('div').hasClass('mdc-textfield--theme-dark'), true);
});

test('it supports the dense attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" dense=true}}`);

  assert.equal(this.$('div').hasClass('mdc-textfield--dense'), true);
});

test('it supports the disabled attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" disabled=true}}`);

  assert.equal(this.$('div').hasClass('mdc-textfield--disabled'), true);
  assert.equal(this.$('input')[0].hasAttribute('disabled'), true);
});

test('it supports the disabled attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" disabled=true multiline=true}}`);

  assert.equal(this.$('div').hasClass('mdc-textfield--disabled'), true);
  assert.equal(this.$('textarea')[0].hasAttribute('disabled'), true);
});

test('it supports the form attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" form="test"}}`);

  assert.equal(this.$('input').attr('form'), 'test');
});

test('it supports the form attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" form="test" multiline=true}}`);

  assert.equal(this.$('textarea').attr('form'), 'test');
});

test('it supports the fullwidth attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" fullwidth=true}}`);

  assert.equal(this.$('div').hasClass('mdc-textfield--fullwidth'), true);
});

test('it supports the helptext attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext"}}`);

  assert.equal(this.$('input').attr('aria-controls'), 'test-helptext');
  assert.equal(this.$('#test-helptext').text().trim(), 'Sample helptext');
});

test('it supports the helptext attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" multiline=true}}`);

  assert.equal(this.$('textarea').attr('aria-controls'), 'test-helptext');
  assert.equal(this.$('#test-helptext').text().trim(), 'Sample helptext');
});

test('it supports the helptextPersistent attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" helptextPersistent=true}}`);

  assert.equal(this.$('#test-helptext').hasClass('mdc-textfield-helptext--persistent'), true);
});

test('it supports the helptextValidation attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" helptextValidation=true}}`);

  assert.equal(this.$('#test-helptext').hasClass('mdc-textfield-helptext--validation-msg'), true);
});

test('it supports the inputAttributes attribute for single-line textfields', function(assert) {
  this.set('inputAttributes', {maxlength: 8});
  this.render(hbs`{{mdc-textfield id="test" inputAttributes=inputAttributes}}`);

  assert.equal(this.$('input').attr('maxlength'), 8);
});

test('it supports the inputAttributes attribute for multi-line textfields', function(assert) {
  this.set('inputAttributes', {maxlength: 8});
  this.render(hbs`{{mdc-textfield id="test" inputAttributes=inputAttributes multiline=true}}`);

  assert.equal(this.$('textarea').attr('maxlength'), 8);
});

test('it supports the label attribute', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" label="Test"}}`);

  assert.equal(this.$('label').text().trim(), 'Test');
});

test('it supports the name attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" name="test"}}`);

  assert.equal(this.$('input').attr('name'), 'test');
});

test('it supports the name attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" name="test" multiline=true}}`);

  assert.equal(this.$('textarea').attr('name'), 'test');
});

test('it supports the required attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" required=true}}`);

  assert.equal(this.$('input')[0].hasAttribute('required'), true);
});

test('it supports the required attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" required=true multiline=true}}`);

  assert.equal(this.$('textarea')[0].hasAttribute('required'), true);
});

test('it supports the value attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" value="test"}}`);

  assert.equal(this.$('input').val(), 'test');
});

test('it supports the value attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" value="test" multiline=true}}`);

  assert.equal(this.$('textarea').val(), 'test');
});

test('it supports the type attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" type="email"}}`);

  assert.equal(this.$('input').attr('type'), 'email');
});

test('it supports the cols attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" cols="80" multiline=true}}`);

  assert.equal(this.$('textarea').attr('cols'), 80);
});

test('it supports the rows attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" rows="3" multiline=true}}`);

  assert.equal(this.$('textarea').attr('rows'), 3);
});
