import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import setupRouter from '../../helpers/setup-router';

moduleForComponent('mdc-icon', 'Integration | Component | mdc-icon', {
  integration: true,

  setup() {
    setupRouter(this);
  }
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-icon id="test"}}`);

  assert.equal(this.$('i').attr('id'), 'test');
});

test('it supports being used as a block', function(assert) {
  this.render(hbs`{{#mdc-icon}}favorite{{/mdc-icon}}`);

  assert.equal(this.$('i').text().trim(), 'favorite');
});

test('it supports the content attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite"}}`);

  assert.equal(this.$('i').text().trim(), 'favorite');
});

test('it supports the accent attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" accent=true}}`);

  assert.equal(this.$('i').hasClass('mdc-theme--accent'), true);
});

test('it supports the backTab attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" backTab=true}}`);

  assert.equal(this.$('i').hasClass('mdc-tab-bar-scroller__indicator__inner'), true);
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" class="test"}}`);

  assert.equal(this.$('i').hasClass('test'), true);
});

test('it supports the dark attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" dark=true}}`);

  assert.equal(this.$('i').hasClass('md-dark'), true);
});

test('it supports the dialog attribute', function(assert) {
  this.render(hbs`{{mdc-icon dialog="test" content="menu"}}`);

  window.called = false;
  window.emberMDC = {test: {show: () => window.called = true}};

  this.$('i').click();

  assert.equal(window.called, true);
});

test('it supports the drawer attribute', function(assert) {
  this.render(hbs`{{mdc-icon drawer="test" content="menu"}}`);

  window.emberMDC = {test: {open: false}};

  this.$('i').click();

  assert.equal(window.emberMDC.test.open, true);
});

test('it supports the menu attribute', function(assert) {
  this.render(hbs`{{mdc-icon menu="test" content="menu"}}`);

  window.emberMDC = {test: {open: false}};

  this.$('i').click();

  assert.equal(window.emberMDC.test.open, true);
});

test('it supports the forwardTab attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" backTab=true}}`);

  assert.equal(this.$('i').hasClass('mdc-tab-bar-scroller__indicator__inner'), true);
});

test('it supports the gridList attribute', function(assert) {
  this.render(hbs`{{mdc-icon gridList=true content="menu"}}`);

  assert.equal(this.$('i').hasClass('mdc-grid-tile__icon'), true);
});

test('it supports linking to routes', function(assert) {
  this.render(hbs`{{mdc-icon "index" content="menu"}}`);

  assert.equal(this.$('a').attr('href'), '/');
});

test('it supports the primary attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" primary=true}}`);

  assert.equal(this.$('i').hasClass('mdc-theme--primary'), true);
});

test('it supports the size attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" size=36}}`);

  assert.equal(this.$('i').hasClass('md-36'), true);
});

// icons

test('it has the aria-hidden attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite"}}`);

  assert.equal(this.$('i').attr('aria-hidden'), 'true');
});

test('it supports the inactive attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" inactive=true}}`);

  assert.equal(this.$('i').hasClass('md-inactive'), true);
});

test('it supports the label attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" label="test"}}`);

  assert.equal(this.$('i').attr('aria-label'), 'test');
  assert.equal(this.$('i')[0].hasAttribute('aria-hidden'), false);
});

test('it supports the material attribute', function(assert) {
  this.render(hbs`{{mdc-icon content="favorite" material=false}}`);

  assert.equal(this.$('i').hasClass('material-icons'), false);
});

// icon toggles

test('it supports icon toggles', function(assert) {
  this.render(hbs`{{mdc-icon onContent="favorite" onLabel="Remove from favorites"
  offContent="favorite_border" offLabel="Add to favorites"}}`);

  assert.equal(this.$('i').hasClass('mdc-icon-toggle'), true);
  assert.equal(this.$('i').attr('data-toggle-on'), '{"content":"favorite","label":"Remove from favorites"}');
  assert.equal(this.$('i').attr('data-toggle-off'), '{"content":"favorite_border","label":"Add to favorites"}');
});

test('it supports the clicked attribute', function(assert) {
  let called = false;

  this.set('clickHandler', () => called = true);
  this.render(hbs`{{mdc-icon onContent="favorite" offContent="favorite_border" click=clickHandler}}`);

  Ember.run(() => {
    this.$('i').click();
  });

  Ember.run(() => {
    assert.equal(called, true);
  });
});

test('it supports the disabled attribute', function(assert) {
  this.render(hbs`{{mdc-icon onContent="favorite" offContent="favorite_border" disabled=true}}`);

  assert.equal(this.$('i').hasClass('mdc-icon-toggle--disabled'), true);
});

test('it supports the displayLabel attribute', function(assert) {
  this.render(hbs`{{mdc-icon onContent="favorite" offContent="favorite_border" displayLabel=true}}`);

  assert.equal(this.$('i')[0].parentNode.tagName, 'LABEL');
  assert.ok(this.$('i')[0].parentNode.querySelector('span'));
});

test('it supports the pressed attribute', function(assert) {
  this.render(hbs`{{mdc-icon onContent="favorite" offContent="favorite_border" pressed=true}}`);

  assert.equal(this.$('i').attr('aria-pressed'), 'true');
});

test('it supports other icon frameworks', function(assert) {
  this.render(hbs`{{#mdc-icon iconInnerSelector=".fa" pressed=true
  onLabel="Remove from favorites" onCSSClass="fa-star"
  offLabel="Add to favorites" offCSSClass="fa-star-o"}}
    {{mdc-icon class="fa fa-star-o" material=false}}
  {{/mdc-icon}}`);

  assert.equal(this.$('span').hasClass('material-icons'), false);
  assert.equal(this.$('span').attr('data-icon-inner-selector'), '.fa');
  assert.equal(this.$('i').hasClass('fa-star'), true);
});
