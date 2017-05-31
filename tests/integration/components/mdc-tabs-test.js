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

test('it supports the name attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs tabs=tabs name="test"}}`);

  assert.ok(window.emberMDC.test);
});

test('it supports primary attribute', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs tabs=tabs primary=true}}`);

  assert.equal(this.$('nav').hasClass('mdc-tab-bar--indicator-primary'), true);
});

test('it supports having a scroller', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{mdc-tabs/scroller tabs=tabs}}`);

  assert.equal(this.$('div').hasClass('mdc-tab-bar-scroller'), true);
  assert.equal(this.$('.mdc-tab-bar-scroller__indicator--back i').hasClass('mdc-tab-bar-scroller__indicator__inner'), true);
  assert.equal(this.$('.mdc-tab-bar-scroller__indicator--forward i').hasClass('mdc-tab-bar-scroller__indicator__inner'), true);
  assert.equal(this.$('.mdc-tab-bar-scroller__scroll-frame nav a').length, 2);
});

test('it supports having a scroller with custom icons', function(assert) {
  this.set('tabs', [
    {active: true, href: '#alethkar', name: 'Alethkar'},
    {href: '#jahKeved', name: 'Jah Keved'}
  ]);

  this.render(hbs`{{#mdc-tabs/scroller customIcons=true tabs=tabs as |block|}}
    {{#if block.back}}
      {{mdc-icon content="arrow_back" backTab=true}}
    {{else if block.forward}}
      {{mdc-icon content="arrow_forward" forwardTab=true}}
    {{/if}}
  {{/mdc-tabs/scroller}}`);

  assert.equal(this.$('.mdc-tab-bar-scroller__indicator--back i')[0].textContent.trim(), 'arrow_back');
  assert.equal(this.$('.mdc-tab-bar-scroller__indicator--forward i')[0].textContent.trim(), 'arrow_forward');
});
