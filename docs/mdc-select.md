# mdc-select

This component only implements the CSS version of the mdc-select.
The reason for this is because the "fully-featured" version
doesn't support the multiple and required attributes.

### Usage

Here is an example showing a single select:

```js
const options = {
  kaladin: 'Kaladin Stormblessed',
  shallan: 'Shallan Davar'
};
```

Notice that the `options` attribute is expecting a hash of options.

```hbs
{{mdc-select options=options selected="shallan" placeholder="Select a Character"}}
```

Yields

```html
<select id="ember521" class="mdc-select ember-view">
  <option value="">Select a Character</option>
  <option value="kaladin">Kaladin Stormblessed</option>
  <option value="shallan" selected>Shallan Davar</option>
</select>
```

Here is an example showing a multiple select:

```js
const groups = {
  Men: {
    dalinar: 'Dalinar Kholin',
    kaladin: 'Kaladin Stormblessed'
  },
  Women: {
    jasnah: 'Jasnah Kholin',
    shallan: 'Shallan Davar'
  }
};
```

Notice that the `groups` attribute is expecting a hash of option groups.

```hbs
{{mdc-select groups=groups multiple=true selected="shallan"}}
```

Yields

```html
<select multiple id="ember526" class="mdc-multi-select mdc-list ember-view">
  <optgroup label="Men" class="mdc-list-group">
    <option value="dalinar" class="mdc-list-item">Dalinar Kholin</option>
    <option value="kaladin" class="mdc-list-item">Kaladin Stormblessed</option>
  </optgroup>
  <option role="presentation" disabled class="mdc-list-divider"></option>
  <optgroup label="Women" class="mdc-list-group">
    <option value="jasnah" class="mdc-list-item">Jasnah Kholin</option>
    <option value="shallan" class="mdc-list-item">Shallan Davar</option>
  </optgroup>
</select>
```

If you wanna do your own thing, you can use `mdc-select` as a block.

```hbs
{{#mdc-select}}
  <option>Doing your own thing</option>
{{/mdc-select}}
```

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**disabled** *{Boolean}* Sets the disabled attribute (default: `false`)

**form** *{String}* Sets the form attribute (default: `null`)

**groups** *{Object}* A hash of option groups (default: `{}`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**multiple** *{Boolean}* Sets the multiple attribute (default: `false`)

**name** *{Boolean}* Sets the name attribute (default: `null`)

**options** *{Object}* A hash of options (default: `{}`)

**placeholder** *{String}* The default option to display (default: `null`)

**required** *{Boolean}* Sets the required attribute (default: `false`)

**selected** *{String}* The key of the option that is selected (default: `null`)

**size** *{Number}* Sets the size attribute (default: `null`)

**tabindex** *{Number}* Sets the tabindex attribute (default: `null`)
