import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-card', 'Integration | Component | mdc-card', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{#mdc-card id="test"}}{{/mdc-card}}`);

  assert.equal(this.$('div').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{#mdc-card class="test"}}{{/mdc-card}}`);

  assert.equal(this.$('div').hasClass('test'), true);
});

test('it supports the dark attribute', function(assert) {
  this.render(hbs`{{#mdc-card dark=true}}{{/mdc-card}}`);

  assert.equal(this.$('div').hasClass('mdc-card--theme-dark'), true);
});

test('it supports the hasActions attribute', function(assert) {
  this.render(hbs`{{#mdc-card hasActions=true}}Test{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__actions').text(), 'Test');
});

test('it supports the hasMedia attribute', function(assert) {
  this.render(hbs`{{#mdc-card hasMedia=true}}Test{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__media').text(), 'Test');
});

test('it supports the hasSupportingText attribute', function(assert) {
  this.render(hbs`{{#mdc-card hasSupportingText=true}}Test{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__supporting-text').text(), 'Test');
});

test('it supports having multiple blocks', function(assert) {
  this.render(hbs`{{#mdc-card hasActions=true hasMedia=true hasSupportingText=true as |block|}}
    {{#if block.media}}
    MEDIA
    {{else if block.supportingText}}
    SUPPORTING TEXT
    {{else if block.actions}}
    ACTIONS
    {{/if}}
  {{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__actions').text().trim(), 'ACTIONS');
  assert.equal(this.$('section.mdc-card__media').text().trim(), 'MEDIA');
  assert.equal(this.$('section.mdc-card__supporting-text').text().trim(), 'SUPPORTING TEXT');
});

test('it supports the horizontal attribute', function(assert) {
  this.render(hbs`{{#mdc-card horizontal=true}}{{/mdc-card}}`);

  assert.equal(this.$('div').hasClass('mdc-card'), false);
  assert.equal(this.$('div').hasClass('mdc-card__horizontal-block'), true);
});

test('when its in horizontal mode, it ignores hasMedia', function(assert) {
  this.render(hbs`{{#mdc-card horizontal=true hasMedia=true}}{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__media')[0], undefined);
});

test('it supports the title attribute', function(assert) {
  this.render(hbs`{{#mdc-card title="Card"}}{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__primary h1').text(), 'Card');
});

test('it supports the largeTitle attribute', function(assert) {
  this.render(hbs`{{#mdc-card largeTitle=false title="Card"}}{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__primary h1').hasClass('mdc-card__title--large'), false);
});

test('it supports the subtitle attribute', function(assert) {
  this.render(hbs`{{#mdc-card subtitle="Card"}}{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__primary h2').text(), 'Card');
});

test('it supports the mediaSrc attribute', function(assert) {
  this.render(hbs`{{#mdc-card horizontal=true mediaSrc="http://domain.com/logo.png"}}{{/mdc-card}}`);

  assert.equal(this.$('img.mdc-card__media-item').attr('src'), 'http://domain.com/logo.png');
});

test('it supports the mediaSize attribute', function(assert) {
  this.render(hbs`{{#mdc-card horizontal=true mediaSize=2 mediaSrc="http://domain.com/logo.png"}}{{/mdc-card}}`);

  assert.equal(this.$('img.mdc-card__media-item').hasClass('mdc-card__media-item--2x'), true);
});

test('it supports the verticalActions attribute', function(assert) {
  this.render(hbs`{{#mdc-card verticalActions=true hasActions=true}}{{/mdc-card}}`);

  assert.equal(this.$('section.mdc-card__actions').hasClass('mdc-card__actions--vertical'), true);
});
