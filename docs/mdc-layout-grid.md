# mdc-layout-grid

### Usage

```hbs
{{#mdc-layout-grid}}
  {{#mdc-layout-grid/cell}}These{{/mdc-layout-grid/cell}}
  {{#mdc-layout-grid/cell}}are{{/mdc-layout-grid/cell}}
  {{#mdc-layout-grid/cell}}cells.{{/mdc-layout-grid/cell}}
{{/mdc-layout-grid}}
```

Yields

```html
<div id="ember474" class="mdc-layout-grid ember-view">
  <div id="ember475" class="mdc-layout-grid__cell ember-view">These</div>
  <div id="ember476" class="mdc-layout-grid__cell ember-view">are</div>
  <div id="ember477" class="mdc-layout-grid__cell ember-view">cells.</div>
</div>
```

## Cells

The `mdc-layout-grid/cell` component has a few attributes that makes setting the span length easier. Here are the attributes:

**alignBottom** *{Boolean}* Aligns the cell to the bottom (default: `false`)

**alignMiddle** *{Boolean}* Aligns the cell to the middle (default: `false`)

**alignTop** *{Boolean}* Aligns the cell to the top (default: `false`)

**desktop** *{Number}* Sets the desktop span length (default: `null`)

**order** *{Number}* Sets the cell's order (default: `null`)

**phone** *{Number}* Sets the phone span length (default: `null`)

**span** *{Number}* Sets the span length (default: `null`)

**tablet** *{Number}* Sets the tablet span length (default: `null`)

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)
