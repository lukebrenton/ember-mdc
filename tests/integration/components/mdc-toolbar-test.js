import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-toolbar', 'Integration | Component | mdc-toolbar', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-toolbar id="test"}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-toolbar class="test"}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header').hasClass('test'), true);
});

test('it supports the fixed attribute', function(assert) {
  this.render(hbs`{{#mdc-toolbar fixed=true}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header').hasClass('mdc-toolbar--fixed'), true);
});

test('it supports the fixedLastRow attribute', function(assert) {
  this.render(hbs`{{#mdc-toolbar fixedLastRow=true}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header').hasClass('mdc-toolbar--fixed'), true);
  assert.equal(this.$('header').hasClass('mdc-toolbar--fixed-lastrow-only'), true);
});

test('it supports the waterfall attribute', function(assert) {
  this.render(hbs`{{#mdc-toolbar waterfall=true}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header').hasClass('mdc-toolbar--fixed'), true);
  assert.equal(this.$('header').hasClass('mdc-toolbar--waterfall'), true);
});

test('it supports the flexible attribute', function(assert) {
  this.render(hbs`{{#mdc-toolbar flexible=true}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header').hasClass('mdc-toolbar--flexible'), true);
  assert.equal(this.$('header').hasClass('mdc-toolbar--flexible-default-behavior'), true);
});

test('it supports the flexibleNoDefault attribute', function(assert) {
  this.render(hbs`{{#mdc-toolbar flexibleNoDefault=true}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header').hasClass('mdc-toolbar--flexible'), true);
  assert.equal(this.$('header').hasClass('mdc-toolbar--flexible-default-behavior'), false);
});

test('it supports having multiple rows', function(assert) {
  this.render(hbs`{{#mdc-toolbar rows=2}}Test{{/mdc-toolbar}}`);

  assert.equal(this.$('header div').length, 2);
});

test('it supports setting the title via section', function(assert) {
  this.render(hbs`{{#mdc-toolbar}}
    {{mdc-toolbar/section title="Title"}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header .mdc-toolbar__title').text().trim(), 'Title');
});

test('it supports setting section alignments', function(assert) {
  this.render(hbs`{{#mdc-toolbar}}
    {{mdc-toolbar/section alignStart=true}}
    {{mdc-toolbar/section}}
    {{mdc-toolbar/section alignEnd=true}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header .mdc-toolbar__section').length, 3);
  assert.ok(this.$('header .mdc-toolbar__section--align-start')[0]);
  assert.ok(this.$('header .mdc-toolbar__section--align-end')[0]);
});

test('it supports blocks in the section element', function(assert) {
  this.render(hbs`{{#mdc-toolbar}}
    {{#mdc-toolbar/section alignStart=true}}
      Test
    {{/mdc-toolbar/section}}
  {{/mdc-toolbar}}`);

  assert.equal(this.$('header .mdc-toolbar__section').text().trim(), 'Test');
});
