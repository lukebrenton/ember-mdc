import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-fab', 'Integration | Component | mdc-fab', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-fab id="test" content="favorite"}}`);

  assert.equal(this.$('button').attr('id'), 'test');
});

test('it supports the content attribute', function(assert) {
  this.render(hbs`{{mdc-fab content="favorite"}}`);

  assert.equal(this.$('button span').text().trim(), 'favorite');
});

test('it supports being used as a block', function(assert) {
  this.render(hbs`{{#mdc-fab}}favorite{{/mdc-fab}}`);

  assert.equal(this.$('button span').text().trim(), 'favorite');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-fab content="favorite" class="test"}}`);

  assert.equal(this.$('button').hasClass('test'), true);
});

test('it supports the label attribute', function(assert) {
  this.render(hbs`{{mdc-fab content="favorite" label="Favorite"}}`);

  assert.equal(this.$('button').attr('aria-label'), 'Favorite');
});

test('it supports the mini attribute', function(assert) {
  this.render(hbs`{{mdc-fab content="favorite" mini=true}}`);

  assert.equal(this.$('button').hasClass('mdc-fab--mini'), true);
});

test('it supports the plain attribute', function(assert) {
  this.render(hbs`{{mdc-fab content="favorite" plain=true}}`);

  assert.equal(this.$('button').hasClass('mdc-fab--plain'), true);
});

test('it supports the ripple attribute', function(assert) {
  // TODO: figure out how to test for this
  assert.expect(0);
});
