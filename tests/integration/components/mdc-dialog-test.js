import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-dialog', 'Integration | Component | mdc-dialog', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-dialog id="test"}}{{/mdc-dialog}}`);

  assert.equal(this.$('aside').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-dialog class="test"}}{{/mdc-dialog}}`);

  assert.equal(this.$('aside').hasClass('test'), true);
});

test('it supports the dark attribute', function(assert) {
  this.render(hbs`{{#mdc-dialog dark=true}}{{/mdc-dialog}}`);

  assert.equal(this.$('aside').hasClass('mdc-dialog--theme-dark'), true);
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{#mdc-dialog name="test"}}{{/mdc-dialog}}`);

  assert.ok(window.emberMDC.test);
});

test('it supports the role attribute', function(assert) {
  this.render(hbs`{{#mdc-dialog role="alert"}}{{/mdc-dialog}}`);

  assert.equal(this.$('aside').attr('role'), 'alert');
});

test('it supports the scrollable attribute', function(assert) {
  this.render(hbs`{{#mdc-dialog scrollable=true}}{{/mdc-dialog}}`);

  assert.equal(this.$('.mdc-dialog__body').hasClass('mdc-dialog__body--scrollable'), true);
});

test('it supports the title attribute', function(assert) {
  this.render(hbs`{{#mdc-dialog title="test"}}{{/mdc-dialog}}`);

  assert.equal(this.$('.mdc-dialog__header__title').text().trim(), 'test');
});

test('it supports the description block', function(assert) {
  this.render(hbs`{{#mdc-dialog as |block|}}{{#if block.description}}test{{/if}}{{/mdc-dialog}}`);

  assert.equal(this.$('.mdc-dialog__body').text().trim(), 'test');
});

test('it supports the footer block', function(assert) {
  this.render(hbs`{{#mdc-dialog as |block|}}{{#if block.footer}}test{{/if}}{{/mdc-dialog}}`);

  assert.equal(this.$('.mdc-dialog__footer').text().trim(), 'test');
});
