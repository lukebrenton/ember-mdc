import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-tabs', 'Integration | Component | mdc-tabs', {
  integration: true
});

test('it supports iterating over tabs', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs tabs=tabs id="test"}}`);

  assert.equal(this.$('nav a').length, 2);
  assert.equal(this.$('nav a:nth-child(1)').hasClass('mdc-tab--active'), true);
  assert.equal(this.$('nav a:nth-child(1)').attr('href'), '#alethkar');
  assert.equal(this.$('nav a:nth-child(2)').text().trim(), 'Jah Keved');
});

test('it supports the accent attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs tabs=tabs accent=true}}`);

  assert.equal(this.$('nav').hasClass('mdc-tab-bar--indicator-accent'), true);
});

test('it supports the class attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs tabs=tabs class="test"}}`);

  assert.equal(this.$('nav').hasClass('test'), true);
});

test('it supports the icons attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{#mdc-tabs tabs=tabs icons=true as |tab|}}
    {{mdc-icon tab=true content="location_on"}}
  {{/mdc-tabs}}`);

  assert.equal(this.$('nav').hasClass('mdc-tab-bar--icon-tab-bar'), true);
  assert.equal(this.$('nav a i').length, 2);
  assert.equal(this.$('nav a span').length, 0);
});

test('it supports the iconsWithText attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{#mdc-tabs tabs=tabs iconsWithText=true as |tab|}}
    {{mdc-icon tab=true content="location_on"}}
  {{/mdc-tabs}}`);

  assert.equal(this.$('nav').hasClass('mdc-tab-bar--icons-with-text'), true);
  assert.equal(this.$('nav a').hasClass('mdc-tab--with-icon-and-text'), true);
  assert.equal(this.$('nav a i').length, 2);
  assert.equal(this.$('nav a span').length, 2);
});

test('it supports the ID attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs tabs=tabs id="test"}}`);

  assert.equal(this.$('nav').attr('id'), 'test');
});

test('it supports primary attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs tabs=tabs primary=true}}`);

  assert.equal(this.$('nav').hasClass('mdc-tab-bar--indicator-primary'), true);
});
