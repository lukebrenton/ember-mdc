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

  let label = container.find('label');
  assert.equal(label.attr('for') == 'email-input', true, 'the label has the correct ID');
});

test('it will generate an ID when not provided', function(assert) {
  this.render(hbs`{{mdc-textfield}}`);

  const id_regex = /^ember\d+/;

  let container = this.$().children();
  assert.equal(id_regex.test(container[0].id), true, 'the container has the correct ID');

  let input = container.find('input');
  assert.equal(id_regex.test(input[0].id), true, 'the input has the correct ID');

  let label = container.find('label');
  assert.equal(id_regex.test(label.attr('for')), true, 'the label has the correct ID');
});

test('it supports the dense attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" dense=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--dense mdc-textfield--upgraded">
    <input id="test-input" type="text" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the dense attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" dense=true multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--dense mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the disabled attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" disabled=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--disabled mdc-textfield--upgraded">
    <input id="test-input" type="text" disabled="" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the disabled attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" disabled=true multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--disabled mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" disabled="" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the fullwidth attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" fullwidth=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--fullwidth mdc-textfield--upgraded">
    <input id="test-input" type="text" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the fullwidth attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" fullwidth=true multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--fullwidth mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the helptext attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext"}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" aria-controls="test-helptext" type="text" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<p id="test-helptext" aria-hidden="true" class="mdc-textfield-helptext  ">
  Sample helptext
</p>
`);
});

test('it supports the helptext attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" aria-controls="test-helptext" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<p id="test-helptext" aria-hidden="true" class="mdc-textfield-helptext  ">
  Sample helptext
</p>
`);
});

test('it supports the helptextPersistent attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" helptextPersistent=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" aria-controls="test-helptext" type="text" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<p id="test-helptext" aria-hidden="true" class="mdc-textfield-helptext mdc-textfield-helptext--persistent ">
  Sample helptext
</p>
`);
});

test('it supports the helptextPersistent attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" helptextPersistent=true multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" aria-controls="test-helptext" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<p id="test-helptext" aria-hidden="true" class="mdc-textfield-helptext mdc-textfield-helptext--persistent ">
  Sample helptext
</p>
`);
});

test('it supports the helptextValidation attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" helptextValidation=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" aria-controls="test-helptext" type="text" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<p id="test-helptext" aria-hidden="true" class="mdc-textfield-helptext  mdc-textfield-helptext--validation-msg">
  Sample helptext
</p>
`);
});

test('it supports the helptextValidation attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" helptext="Sample helptext" helptextValidation=true multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" aria-controls="test-helptext" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<p id="test-helptext" aria-hidden="true" class="mdc-textfield-helptext  mdc-textfield-helptext--validation-msg">
  Sample helptext
</p>
`);
});

test('it supports the inputAttributes attribute for single-line textfields', function(assert) {
  this.set('inputAttributes', {maxlength: 8});
  this.render(hbs`{{mdc-textfield id="test" inputAttributes=inputAttributes}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" type="text" maxlength="8" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the inputAttributes attribute for multi-line textfields', function(assert) {
  this.set('inputAttributes', {maxlength: 8});
  this.render(hbs`{{mdc-textfield id="test" inputAttributes=inputAttributes multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" maxlength="8" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the label attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" label="Test"}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" type="text" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label ">Test</label>
</div>
<!---->`);
});

test('it supports the label attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" label="Test" multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label ">Test</label>
</div>
<!---->`);
});

test('it supports the name attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" name="test"}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" type="text" name="test" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the name attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" name="test" multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" name="test" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the required attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" required=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" type="text" required="" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the required attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" required=true multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" required="" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the value attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" value="test"}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" type="text" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label mdc-textfield__label--float-above"></label>
</div>
<!---->`);

  assert.equal(this.$().find('#test-input').val(), 'test');
});

test('it supports the value attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" value="test" multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label mdc-textfield__label--float-above"></label>
</div>
<!---->`);

  assert.equal(this.$().find('#test-input').val(), 'test');
});

test('it supports the type attribute for single-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" type="email"}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--upgraded">
    <input id="test-input" type="email" class="ember-text-field mdc-textfield__input ember-view">
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the cols attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" cols="80" multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" cols="80" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});

test('it supports the rows attribute for multi-line textfields', function(assert) {
  this.render(hbs`{{mdc-textfield id="test" rows="3" multiline=true}}`);

  assert.equal(this.$().html(), `<div id="test" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
    <textarea id="test-input" rows="3" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="test-input" class="mdc-textfield__label "></label>
</div>
<!---->`);
});
