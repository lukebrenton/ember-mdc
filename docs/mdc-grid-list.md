# mdc-grid-list

### Usage

```js
const items = [
  {caption: 'Windrunner', src: '/kaladin.jpg', title: 'Kaladin Stormblessed'},
  {caption: 'Lightweaver', src: '/shallan.jpg', title: 'Shallan Davar'}
];
```

```hbs
{{mdc-grid-list items=items}}
```

Yields

```html
<div id="ember543" class="mdc-grid-list mdc-grid-list--twoline-caption ember-view">
  <ul class="mdc-grid-list__tiles">
    <li class="mdc-grid-tile">
      <div class="mdc-grid-tile__primary">
        <img src="/kaladin.jpg" class="mdc-grid-tile__primary-content">
      </div>
      <span class="mdc-grid-tile__secondary">
        <span class="mdc-grid-tile__title">Kaladin Stormblessed</span>
        <span class="mdc-grid-tile__support-text">Windrunner</span>
      </span>
    </li>
    <li class="mdc-grid-tile">
      <div class="mdc-grid-tile__primary">
        <img src="/shallan.jpg" class="mdc-grid-tile__primary-content">
      </div>
      <span class="mdc-grid-tile__secondary">
        <span class="mdc-grid-tile__title">Shallan Davar</span>
        <span class="mdc-grid-tile__support-text">Lightweaver</span>
      </span>
    </li>
  </ul>
</div>
```

The `mdc-grid-list` component looks for these properties on an item:

**caption** *{String}* The caption text (default: `null`)

**src** *{String}* The src for the tile image (default: `null`)

**title** *{String}* The title text (default: `null`)

### Including icons

In order to include icons, you will need to set either `iconAlignStart`
or `iconAlignEnd` to `true`. After that, use the `mdc-grid-list` component
as a block to insert your icon.

Notice that on the `mdc-icon` component you need to ste `gridList` to `true`.

```hbs
{{#mdc-grid-list iconAlignEnd=true items=items as |item|}}
  {{mdc-icon gridList=true content="favorite_border"}}
{{/mdc-grid-list}}
```

Yields

```html
<div id="ember543" class="mdc-grid-list mdc-grid-list--twoline-caption 
mdc-grid-list--with-icon-align-end ember-view">
  <ul class="mdc-grid-list__tiles">
    <li class="mdc-grid-tile">
      <div class="mdc-grid-tile__primary">
        <img src="/kaladin.jpg" class="mdc-grid-tile__primary-content">
      </div>
      <span class="mdc-grid-tile__secondary">
        <i id="ember546" aria-hidden="true" class="mdc-grid-tile__icon 
        material-icons md-24 ember-view">
          favorite_border
        </i>
        <span class="mdc-grid-tile__title">Kaladin Stormblessed</span>
        <span class="mdc-grid-tile__support-text">Windrunner</span>
      </span>
    </li>
    <li class="mdc-grid-tile">
      <div class="mdc-grid-tile__primary">
        <img src="/shallan.jpg" class="mdc-grid-tile__primary-content">
      </div>
      <span class="mdc-grid-tile__secondary">
        <i id="ember549" aria-hidden="true" class="mdc-grid-tile__icon 
        material-icons md-24 ember-view">
          favorite_border
        </i>
        <span class="mdc-grid-tile__title">Shallan Davar</span>
        <span class="mdc-grid-tile__support-text">Lightweaver</span>
      </span>
    </li>
  </ul>
</div>
```

### Attributes

**aspect** *{String}* The aspect ratio for the images. (Can be: `1x1`, `16x9`, `2x3`, `3x2`, `4x3`, or `3x4`) (default: `null`)

**class** *{String}* Adds to the class attribute (default: `null`)

**header** *{Boolean}* Position the text at the top of a tile rather than the bottom (default: `false`)

**iconAlignEnd** *{Boolean}* Align icons to the end of the title (default: `false`)

**iconAlignStart** *{Boolean}* Align icons to the start of the title (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**imageOnly** *{Boolean}* Only display images in the tiles (default: `false`)

**items** *{Object[]}* The items used to display tiles (default: `[]`)

**smallGutter** *{Boolean}* Use a small gutter between tiles (default: `false`)

**useDiv** *{Boolean}* Use a div rather than an img tag to display the image (default: `false`)
