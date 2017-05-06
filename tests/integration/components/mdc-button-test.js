import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-button', 'Integration | Component | mdc-button', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test"}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').attr('id'), 'test');
});

test('it supports the accent attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" accent=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('mdc-button--accent'), true);
});

test('it supports the attributes attribute', function(assert) {
  this.set('attributes', {formenctype: "multipart/form-data"});
  this.render(hbs`{{#mdc-button id="test" attributes=attributes}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').attr('formenctype'), 'multipart/form-data');
});

test('it supports the cardAction attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" cardAction=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('mdc-card__action'), true);
  assert.equal(this.$('button').hasClass('mdc-button--compact'), true);
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" class="test"}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('test'), true);
});

test('it supports the compact attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" compact=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('mdc-button--compact'), true);
});

test('it supports the dark attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" dark=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('mdc-button--theme-dark'), true);
});

test('it supports the dense attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" dense=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('mdc-button--dense'), true);
});

test('it supports the disabled attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" disabled=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button')[0].hasAttribute('disabled'), true);
});

test('it supports disabling links', function(assert) {
  this.render(hbs`{{#mdc-button id="test" disabled=true href="/test"}}Test{{/mdc-button}}`);

  assert.equal(this.$('button')[0].hasAttribute('disabled'), true);
});

test('it supports the form attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" form="test"}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').attr('form'), 'test');
});

test('it supports the href attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" href="/test"}}Test{{/mdc-button}}`);

  assert.equal(this.$('a').attr('href'), '/test');
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" name="test"}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').attr('name'), 'test');
});

test('it supports the primary attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" primary=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('mdc-button--primary'), true);
});

test('it supports the raised attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" raised=true}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').hasClass('mdc-button--raised'), true);
});

test('it supports the ripple attribute', function(assert) {
  // TODO: figure out how to test for this
  assert.expect(0);
});

test('it supports the type attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" type="button"}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').attr('type'), 'button');
});

test('it supports the value attribute', function(assert) {
  this.render(hbs`{{#mdc-button id="test" value="test"}}Test{{/mdc-button}}`);

  assert.equal(this.$('button').attr('value'), 'test');
});
