import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-menu', 'Integration | Component | mdc-menu', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-menu id="test"}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-menu class="test"}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the bottomLeft attribute', function(assert) {
  this.render(hbs`{{#mdc-menu bottomLeft=true}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').hasClass('mdc-simple-menu--open-from-bottom-left'), true);
});

test('it supports the bottomRight attribute', function(assert) {
  this.render(hbs`{{#mdc-menu bottomRight=true}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').hasClass('mdc-simple-menu--open-from-bottom-right'), true);
});

test('it supports the topLeft attribute', function(assert) {
  this.render(hbs`{{#mdc-menu topLeft=true}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').hasClass('mdc-simple-menu--open-from-top-left'), true);
});

test('it supports the topRight attribute', function(assert) {
  this.render(hbs`{{#mdc-menu topRight=true}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').hasClass('mdc-simple-menu--open-from-top-right'), true);
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{#mdc-menu name="menu"}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.ok(window.emberMDC.menu);
});

test('it supports the noAnchor attribute', function(assert) {
  this.render(hbs`<div>{{#mdc-menu noAnchor=true}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}</div>`);

  assert.equal(this.$('div').hasClass('mdc-menu-anchor'), false);

  this.render(hbs`<div>{{#mdc-menu}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}</div>`);

  assert.equal(this.$('div').hasClass('mdc-menu-anchor'), true);
});

test('it supports the open attribute', function(assert) {
  this.render(hbs`{{#mdc-menu open=true}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').hasClass('mdc-simple-menu--open'), true);
});

test('it supports the tabindex attribute', function(assert) {
  this.render(hbs`{{#mdc-menu tabindex=-1}}<ul class="mdc-simple-menu__items"></ul>{{/mdc-menu}}`);

  assert.equal(this.$('div').attr('tabindex'), -1);
});
