import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import setupRouter from '../../helpers/setup-router';

moduleForComponent('mdc-list', 'Integration | Component | mdc-list', {
  integration: true,

  setup() {
    setupRouter(this);
  }
});

test('it supports the ID attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list id="test" items=items}}{{/mdc-list}}`);

  assert.equal(this.$('ul').attr('id'), 'test');
});

test('it iterates through items', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items}}Test{{/mdc-list}}`);

  assert.equal(this.$('ul').find('li').length, 3);
  assert.equal(this.$('li')[0].textContent.trim(), 'Test');
});

test('it supports the avatars attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items avatars=true}}{{/mdc-list}}`);

  assert.equal(this.$('ul').hasClass('mdc-list--avatar-list'), true);
});

test('it supports the class attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items class="test"}}{{/mdc-list}}`);

  assert.equal(this.$('ul').hasClass('test'), true);
});

test('it supports the dense attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items dense=true}}{{/mdc-list}}`);

  assert.equal(this.$('ul').hasClass('mdc-list--dense'), true);
});

test('it supports the group attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items group="test"}}{{/mdc-list}}`);

  assert.equal(this.$('h3').text().trim(), 'test');
});

test('it supports the hasEndDetail attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items hasEndDetail=true}}{{/mdc-list}}`);

  assert.ok(this.$('ul .mdc-list-item__end-detail')[0]);
});

test('it supports the hasStartDetail attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items hasStartDetail=true}}{{/mdc-list}}`);

  assert.ok(this.$('ul .mdc-list-item__start-detail')[0]);
});

test('it supports the nav attribute', function(assert) {
  this.set('items', [{href: 'index'}, {selected: true}, {tabindex: -1}]);
  this.render(hbs`{{#mdc-list items=items nav=true}}{{/mdc-list}}`);

  assert.equal(this.$('nav a').length, 3);
  assert.equal(this.$('nav a:nth-child(1)').attr('href'), '/');
  assert.equal(this.$('nav a:nth-child(2)').hasClass('selected'), true);
  assert.equal(this.$('nav a:nth-child(3)').attr('tabindex'), -1);
});

test('it supports the twoLines attribute', function(assert) {
  this.set('items', [{}, {}, {}]);
  this.render(hbs`{{#mdc-list items=items twoLines=true}}{{/mdc-list}}`);

  assert.equal(this.$('ul').hasClass('mdc-list--two-line'), true);
});

test('it passes item and block information back', function(assert) {
  this.set('items', [{}]);
  this.render(hbs`{{#mdc-list hasStartDetail=true hasEndDetail=true twoLines=true items=items as |item block|}}
    {{#if block.startDetail}}
      SD
    {{else if block.primary}}
      Primary
    {{else if block.secondary}}
      Secondary
    {{else if block.endDetail}}
      ED
    {{/if}}
  {{/mdc-list}}`);

  assert.equal(this.$('ul .mdc-list-item__start-detail').text().trim(), 'SD');
  assert.equal(this.$('ul .mdc-list-item__text').text().trim().replace(/\s+/g, ' '), 'Primary Secondary');
  assert.equal(this.$('ul .mdc-list-item__text__secondary').text().trim(), 'Secondary');
  assert.equal(this.$('ul .mdc-list-item__end-detail').text().trim(), 'ED');
});

test('it supports the divider block', function(assert) {
  this.set('items', [{}, {divider: true}, {}]);
  this.render(hbs`{{#mdc-list twoLines=true items=items as |item block|}}
    {{#if block.divider}}
      {{mdc-list/divider}}
    {{else}}
      Primary
    {{/if}}
  {{/mdc-list}}`);

  assert.equal(this.$('ul')[0].children.length, 3);
  assert.ok(this.$('li.mdc-list-divider')[0]);
});

test('it supports groups', function(assert) {
  this.set('items', [{}]);
  this.render(hbs`{{#mdc-list id="groupContainer"}}
    {{#mdc-list items=items as |item block|}}
      Primary
    {{/mdc-list}}
    {{mdc-list/divider group=true}}
    {{#mdc-list items=items as |item block|}}
      Primary
    {{/mdc-list}}
  {{/mdc-list}}`);

  assert.equal(this.$('#groupContainer').find('ul, hr').length, 3);
  assert.ok(this.$('hr.mdc-list-divider')[0]);
  assert.equal(this.$('#groupContainer').find('ul li').length, 2);
});

test('it supports inset dividers', function(assert) {
  this.set('items', [{}, {divider: true}, {}]);
  this.render(hbs`{{#mdc-list hasStartDetail=true twoLines=true items=items as |item block|}}
    {{#if block.startDetail}}
      SD
    {{else if block.divider}}
      {{mdc-list/divider inset=true}}
    {{else if block.primary}}
      Primary
    {{/if}}
  {{/mdc-list}}`);

  assert.equal(this.$('ul')[0].children.length, 3);
  assert.ok(this.$('li.mdc-list-divider.mdc-list-divider--inset')[0]);
});

test('it supports an avatar shortcut', function(assert) {
  this.set('items', [{src: '/image.svg'}]);
  this.render(hbs`{{#mdc-list avatars=true items=items as |item block|}}
    {{#if block.startDetail}}
      {{mdc-list/avatar src=item.src}}
    {{/if}}
  {{/mdc-list}}`);

  assert.equal(this.$('.mdc-list-item__start-detail img').attr('src'), '/image.svg');
});
