import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-layout-grid', 'Integration | Component | mdc-layout-grid', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-layout-grid id="test"}}
    {{#mdc-layout-grid/cell}}{{/mdc-layout-grid/cell}}
  {{/mdc-layout-grid}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-layout-grid class="test"}}
    {{#mdc-layout-grid/cell}}{{/mdc-layout-grid/cell}}
  {{/mdc-layout-grid}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports cell ordering', function(assert) {
  this.render(hbs`{{#mdc-layout-grid}}
    {{#mdc-layout-grid/cell order=3}}{{/mdc-layout-grid/cell}}
  {{/mdc-layout-grid}}`);

  const cell = this.$('div div');
  assert.equal(cell.hasClass('mdc-layout-grid__cell'), true);
  assert.equal(cell.hasClass('mdc-layout-grid__cell--order-3'), true);
});

test('it supports cell spanning', function(assert) {
  this.render(hbs`{{#mdc-layout-grid}}
    {{#mdc-layout-grid/cell span=5 desktop=4 tablet=3 phone=2}}{{/mdc-layout-grid/cell}}
  {{/mdc-layout-grid}}`);

  const cell = this.$('div div');
  assert.equal(cell.hasClass('mdc-layout-grid__cell'), true);
  assert.equal(cell.hasClass('mdc-layout-grid__cell--span-4-desktop'), true);
  assert.equal(cell.hasClass('mdc-layout-grid__cell--span-3-tablet'), true);
  assert.equal(cell.hasClass('mdc-layout-grid__cell--span-2-phone'), true);
  assert.equal(cell.hasClass('mdc-layout-grid__cell--span-5'), true);
});

test('it supports cell alignment', function(assert) {
  this.render(hbs`{{#mdc-layout-grid}}
    {{#mdc-layout-grid/cell alignBottom=true}}{{/mdc-layout-grid/cell}}
    {{#mdc-layout-grid/cell alignMiddle=true}}{{/mdc-layout-grid/cell}}
    {{#mdc-layout-grid/cell alignTop=true}}{{/mdc-layout-grid/cell}}
  {{/mdc-layout-grid}}`);

  assert.ok(this.$('div.mdc-layout-grid__cell--align-bottom')[0]);
  assert.ok(this.$('div.mdc-layout-grid__cell--align-middle')[0]);
  assert.ok(this.$('div.mdc-layout-grid__cell--align-top')[0]);
});
