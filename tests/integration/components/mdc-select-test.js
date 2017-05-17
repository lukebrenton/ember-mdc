import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('mdc-select', 'Integration | Component | mdc-select', {
  integration: true
});

test('it supports the ID attribute', function(assert) {
  this.render(hbs`{{mdc-select id="test"}}`);

  assert.equal(this.$('select').attr('id'), 'test');
});

test('it supports the class attribute', function(assert) {
  this.render(hbs`{{mdc-select class="test"}}`);

  assert.equal(this.$('select').hasClass('test'), true);
});

test('it supports the disabled attribute', function(assert) {
  this.render(hbs`{{mdc-select disabled=true}}`);

  assert.equal(this.$('select')[0].disabled, true);
});

test('it supports the form attribute', function(assert) {
  this.render(hbs`{{mdc-select form="test"}}`);

  assert.equal(this.$('select').attr('form'), 'test');
});

test('it supports the multiple attribute', function(assert) {
  this.render(hbs`{{mdc-select multiple=true}}`);

  assert.equal(this.$('select')[0].multiple, true);
});

test('it supports rendering groups', function(assert) {
  this.set('groups', {
    Men: {
      dalinar: 'Dalinar Kholin',
      kaladin: 'Kaladin Stormblessed'
    },
    Women: {
      jasnah: 'Jasnah Kholin',
      shallan: 'Shallan Davar'
    }
  });

  this.render(hbs`{{mdc-select groups=groups}}`);

  assert.equal(this.$('select optgroup').length, 2);
  assert.equal(this.$('select option').length, 4);

  this.render(hbs`{{mdc-select multiple=true groups=groups}}`);

  assert.equal(this.$('select optgroup').length, 2);
  assert.equal(this.$('select option').length, 5);
  assert.equal(this.$('select optgroup:nth-child(1) option:nth-child(1)').val(), 'dalinar');
  assert.equal(this.$('select optgroup:nth-child(1) option:nth-child(2)').val(), 'kaladin');
  assert.ok(this.$('select option.mdc-list-divider')[0]);
  assert.equal(this.$('select optgroup:nth-child(3) option:nth-child(1)').val(), 'jasnah');
  assert.equal(this.$('select optgroup:nth-child(3) option:nth-child(2)').val(), 'shallan');
});

test('it supports the name attribute', function(assert) {
  this.render(hbs`{{mdc-select name="test"}}`);

  assert.equal(this.$('select').attr('name'), 'test');
});

test('it supports rendering options', function(assert) {
  this.set('options', {
    dalinar: 'Dalinar Kholin',
    kaladin: 'Kaladin Stormblessed'
  });

  this.render(hbs`{{mdc-select options=options}}`);

  assert.equal(this.$('select option').length, 2);
});

test('it supports the placeholder attribute', function(assert) {
  this.set('options', {
    dalinar: 'Dalinar Kholin',
    kaladin: 'Kaladin Stormblessed'
  });

  this.render(hbs`{{mdc-select options=options placeholder="Select a Character"}}`);

  assert.equal(this.$('select option').length, 3);
  assert.equal(this.$('select option:nth-child(1)').val(), '');
  assert.equal(this.$('select option:nth-child(1)').text().trim(), 'Select a Character');
});

test('it supports the required attribute', function(assert) {
  this.render(hbs`{{mdc-select required=true}}`);

  assert.equal(this.$('select')[0].required, true);
});

test('it supports the selected attribute', function(assert) {
  this.set('options', {
    dalinar: 'Dalinar Kholin',
    kaladin: 'Kaladin Stormblessed'
  });

  this.render(hbs`{{mdc-select options=options selected="kaladin"}}`);

  assert.equal(this.$('select option').length, 2);
  assert.equal(this.$('select option:nth-child(2)')[0].selected, true);
});

test('it supports the size attribute', function(assert) {
  this.render(hbs`{{mdc-select size=6}}`);

  assert.equal(this.$('select').attr('size'), 6);
});

test('it supports the tabindex attribute', function(assert) {
  this.render(hbs`{{mdc-select tabindex=2}}`);

  assert.equal(this.$('select').attr('tabindex'), 2);
});
