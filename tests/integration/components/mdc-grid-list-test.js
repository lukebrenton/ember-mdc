import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-grid-list', 'Integration | Component | mdc-grid-list', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-grid-list id="test"}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports iterating through items', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items}}`);

  assert.equal(this.$('div li').length, 2);
  assert.equal(this.$('div li:nth-child(1) .mdc-grid-tile__title').text().trim(), 'Kaladin Stormblessed');
  assert.equal(this.$('div li:nth-child(1) img').attr('src'), '/kaladin.jpg');
  assert.equal(this.$('div li:nth-child(2) .mdc-grid-tile__title').text().trim(), 'Shallan Davar');
  assert.equal(this.$('div li:nth-child(2) img').attr('src'), '/shallan.jpg');
});

test('it supports captions', function(assert) {
  this.set('items', [
    {caption: 'Windrunner', src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {caption: 'Lightweaver', src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items}}`);

  assert.equal(this.$('div').hasClass('mdc-grid-list--twoline-caption'), true);
  assert.equal(this.$('div .mdc-grid-tile__support-text').length, 2);
});

test('it supports the aspect attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items aspect="3x4"}}`);

  assert.equal(this.$('div').hasClass('mdc-grid-list--tile-aspect-3x4'), true);
});

test('it supports the class attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items class="test"}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the header attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items header=true}}`);

  assert.equal(this.$('div').hasClass('mdc-grid-list--header-caption'), true);
});

test('it supports the iconAlignEnd attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{#mdc-grid-list items=items iconAlignEnd=true}}
    {{mdc-icon gridList=true content="favorite_border"}}
  {{/mdc-grid-list}}`);

  assert.equal(this.$('div').hasClass('mdc-grid-list--with-icon-align-end'), true);
  assert.ok(this.$('i')[0]);
});

test('it supports the iconAlignStart attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{#mdc-grid-list items=items iconAlignStart=true}}
    {{mdc-icon gridList=true content="favorite_border"}}
  {{/mdc-grid-list}}`);

  assert.equal(this.$('div').hasClass('mdc-grid-list--with-icon-align-start'), true);
  assert.ok(this.$('i')[0]);
});

test('it supports the imageOnly attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items imageOnly=true}}`);

  assert.equal(this.$('div .mdc-grid-tile__secondary').length, 0);
});

test('it supports the smallGutter attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items smallGutter=true}}`);

  assert.equal(this.$('div').hasClass('mdc-grid-list--tile-gutter-1'), true);
});

test('it supports the useDiv attribute', function(assert) {
  this.set('items', [
    {src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
    {src: '/shallan.jpg', title: 'Shallan Davar'}
  ]);

  this.render(hbs`{{mdc-grid-list items=items useDiv=true}}`);

  assert.equal(this.$('div img').length, 0);
  assert.equal(this.$('div div.mdc-grid-tile__primary-content').length, 2);
});
