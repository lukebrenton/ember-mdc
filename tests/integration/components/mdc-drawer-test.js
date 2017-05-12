import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-drawer', 'Integration | Component | mdc-drawer', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-drawer permanent=true id="test"}}{{/mdc-drawer}}`);

  assert.equal(this.$('nav').attr('id'), 'test');
});

test('it supports permanent drawers', function(assert) {
  this.render(hbs`{{#mdc-drawer permanent=true}}{{/mdc-drawer}}`);

  assert.equal(this.$('nav').hasClass('mdc-permanent-drawer'), true);
});

test('it supports persistent drawers', function(assert) {
  this.render(hbs`{{#mdc-drawer persistent=true}}{{/mdc-drawer}}`);

  assert.equal(this.$('aside').hasClass('mdc-persistent-drawer'), true);
});

test('it supports temporary drawers', function(assert) {
  this.render(hbs`{{#mdc-drawer temporary=true}}{{/mdc-drawer}}`);

  assert.equal(this.$('aside').hasClass('mdc-temporary-drawer'), true);
});

test('it supports the content block', function(assert) {
  this.render(hbs`{{#mdc-drawer permanent=true class="test"}}test{{/mdc-drawer}}`);

  assert.equal(this.$('nav .mdc-permanent-drawer__content').text().trim(), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-drawer permanent=true class="test"}}{{/mdc-drawer}}`);

  assert.equal(this.$('nav').hasClass('test'), true);
});

test('it supports the hasHeader attribute', function(assert) {
  this.render(hbs`{{#mdc-drawer permanent=true hasHeader=true}}{{/mdc-drawer}}`);

  assert.ok(this.$('nav header.mdc-permanent-drawer__header')[0]);
});

test('it supports the hasSpacer attribute', function(assert) {
  this.render(hbs`{{#mdc-drawer permanent=true hasSpacer=true}}{{/mdc-drawer}}`);

  assert.ok(this.$('nav div.mdc-permanent-drawer__toolbar-spacer')[0]);
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{#mdc-drawer permanent=true name="test"}}{{/mdc-drawer}}`);

  assert.ok(window.emberMDC.test);
});
