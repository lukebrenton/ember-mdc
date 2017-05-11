# mdc-list

### Usage

```hbs
{{#mdc-list items=model as |item|}}
  {{item.name}}
{{/mdc-list}}
```

Yields

```html
<ul id="ember319" class="mdc-list ember-view">
  <li class="mdc-list-item">Kaladin Stormblessed</li>
  <li class="mdc-list-item">Shallan Davar</li>
</ul>
```

The `mdc-list` component relies heavily on `yield parameters`. It can have up to 5 blocks: `startDetail`,
`primary`, `secondary`, `endDetail`, and `divider`. This component iterates over the items passed in to it
so it yields both the item and the block. Here is another example:

```hbs
{{#mdc-list items=model hasStartDetail=true as |item block|}}
  {{#if block.startDetail}}
    {{mdc-icon content=item.icon}}
  {{else if block.primary}}
    {{item.name}}
  {{else if block.divider}}
    {{mdc-list/divider inset=true}}
  {{/if}}
{{/mdc-list}}
```

Yields

```html
<ul id="ember324" class="mdc-list ember-view">
  <li class="mdc-list-item">
    <span role="presentation" class="mdc-list-item__start-detail">
      <i class="material-icons" aria-hidden="true">cloud</i>
    </span>
    Kaladin Stormblessed
  </li>
  <li role="separator" id="ember333" class="mdc-list-divider 
  mdc-list-divider--inset ember-view"></li>
  <li class="mdc-list-item">
    <span role="presentation" class="mdc-list-item__start-detail">
      <i class="material-icons" aria-hidden="true">mode_edit</i>
    </span>
    Shallan Davar
  </li>
</ul>
```

### Groups

Lists can also be separated into groups. This can be accomplished with the following:

```hbs
{{#mdc-list}}
  {{#mdc-list group="Surgebinders" dense=true
  twoLines=true items=model as |item block|}}
    {{#if block.primary}}
      {{item.name}}
    {{else if block.secondary}}
      {{item.surge}}
    {{/if}}
  {{/mdc-list}}
  {{mdc-list/divider group=true}}
  {{#mdc-list group="People" items=model as |item|}}
    {{item.name}}
  {{/mdc-list}}
{{/mdc-list}}
```

Yields

```html
<ul id="ember352" class="mdc-list-group ember-view">
  <h3 class="mdc-list-group__subheader">Surgebinders</h3>
  <ul id="ember354" class="mdc-list--dense mdc-list
  mdc-list--two-line ember-view">
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">
        Kaladin Stormblessed
        <span class="mdc-list-item__text__secondary">
          Windrunner
        </span>
      </span>
    </li>
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">
        Shallan Davar
        <span class="mdc-list-item__text__secondary">
          Lightweaver
        </span>
      </span>
    </li>
  </ul>
  <hr id="ember355" class="mdc-list-divider ember-view">
  <h3 class="mdc-list-group__subheader">People</h3>
  <ul id="ember357" class="mdc-list ember-view">
    <li class="mdc-list-item">Kaladin Stormblessed</li>
    <li class="mdc-list-item">Shallan Davar</li>
  </ul>
</ul>
```

### Dividers

If you want a divider, you need to pass an object in that has the `divider` property set to true.
For example:

```js
let items = [{name: 'Kaladin Stormblessed'}, {divider: true}, {name: 'Shallan Davar'}];
```

When the `mdc-list` component iterates over that item, it will yield the divider block for you to use.

```hbs
{{#mdc-list items=model as |item block|}}
  {{#if block.divider}}
    {{mdc-list/divider}}
  {{else}}
    {{item.name}}
  {{/if}}
{{/mdc-list}}
```

Yields

```html
<ul id="ember319" class="mdc-list ember-view">
  <li class="mdc-list-item">Kaladin Stormblessed</li>
  <li role="presentation" id="ember320" class="mdc-list-divider ember-view"></li>
  <li class="mdc-list-item">Shallan Davar</li>
</ul>
```

The `mdc-list/divider` component has 2 attributes:

**group** *{Boolean}* For use when separating `mdc-list` groups (default: `false`)

**inset** *{Boolean}* Only divide the inset content (don't divide the start detail content) (default: `false`)

### Avatars

The `mdc-list/avatar` component is just a shortcut element that returns an img tag. By default, it has it's
width and height set to the same values as defined in the stylesheet.

```hbs
{{#mdc-list avatars=true twoLines=true items=model as |item block|}}
  {{#if block.startDetail}}
    {{mdc-list/avatar src=item.src alt=item.alt}}
  {{else if block.primary}}
    {{item.name}}
  {{else if block.secondary}}
    {{item.surge}}
  {{/if}}
{{/mdc-list}}
```

Yields

```html
<ul id="ember337" class="mdc-list--avatar-list mdc-list
mdc-list--two-line ember-view">
  <li class="mdc-list-item">
    <span role="presentation" class="mdc-list-item__start-detail">
      <img width="40" src="/images/kaladin.svg" height="40" alt="Kaladin"
      id="ember346" class="ember-view">
    </span>
    <span class="mdc-list-item__text">
      Kaladin Stormblessed
      <span class="mdc-list-item__text__secondary">Windrunner</span>
    </span>
  </li>
  <li class="mdc-list-item">
    <span role="presentation" class="mdc-list-item__start-detail">
      <img width="40" src="/images/shallan.svg" height="40" alt="Shallan"
      id="ember347" class="ember-view">
    </span>
    <span class="mdc-list-item__text">
      Shallan Davar
      <span class="mdc-list-item__text__secondary">
        Lightweaver
      </span>
    </span>
  </li>
</ul>
```

The `mdc-list/avatar` component has 4 attributes:

**alt** *{String}* Sets the alt attribute (default: `null`)

**height** *{Number}* Sets the height attribute (default: `40`)

**src** *{String}* Sets the src attribute (default: `null`)

**width** *{Number}* Sets the width attribute (default: `40`)

### Attributes

**avatars** *{Boolean}* Use an avatar list. (Yields `block.startDetail`) (default: `false`)

**class** *{String}* Adds to the class attribute (default: `null`)

**dense** *{Boolean}* Use the dense style (default: `true`)

**group** *{String}* Sets the group subheader (default: `null`)

**hasEndDetail** *{Boolean}* Use the end detail block. (Yields `block.endDetail`) (default: `false`)

**hasStartDetail** *{Boolean}* Use the start detail block. (Yields `block.startDetail`) (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**items** *{Object[]}* The items to iterate over (default: `null`)

**twoLines** *{Boolean}* Use the two line style (default: `false`)
