# mdc-menu

By default the `mdc-menu` component will make it's parentNode
be it's anchor. You can overwrite this by setting the `noAnchor`
attribute to `true`. You will need to manually apply the `mdc-menu-anchor`
class to the correct element.

### Usage

```hbs
{{#mdc-menu name="boxes"}}
  {{#mdc-list menu=true items=model as |item|}}
    {{item.name}}
  {{/mdc-list}}
{{/mdc-menu}}
```

Yields

```html
<div id="ember402" class="mdc-simple-menu ember-view">
  <ul role="menu" id="ember404" aria-hidden="true"
  class="mdc-list mdc-simple-menu__items ember-view">
    <li role="menuitem" id="ember405"
    class="mdc-list-item selected ember-view">
      Inbox
    </li>
    <li role="menuitem" id="ember406"
    class="mdc-list-item ember-view">
      Starred
    </li>
  </ul>
</div>
```

See the `mdc-list` component for details on the items in the menu.

### Showing Menus

If you specify a `name` for the menu, you can make a `mdc-button`
or `mdc-icon` open the menu when it is clicked by setting the
`menu` to match the `name`. For example:

```hbs
{{#mdc-menu name="menu"}}...{{/mdc-menu}}
{{#mdc-button menu="menu"}}Show Drawer{{/mdc-button}}
{{mdc-icon menu="menu" content="menu"}}
```

When the button or icon is clicked, the menu will show.

Or by using JavaScript:

```js
let menu = window.emberMDC.menu;
// let menu = document.querySelector('aside').mdcInstance;

document.querySelector('button').addEventListener('click', function() {
  menu.open = true;
});
```

### Attributes

**bottomLeft** *{Boolean}* Sets the menu to open from the bottom left (default: `false`)

**bottomRight** *{Boolean}* Sets the menu to open from the bottom right (default: `false`)

**class** *{String}* Adds to the class attribute (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**name** *{String}* Sets the name where the `MDCSimpleMenu` instance is referenced (default: `null`)

**noAnchor** *{Boolean}* Don't automatically make the parentNode the menu anchor (default: `false`)

**open** *{Boolean}* Start with the menu open (default: `false`)

**tabindex** *{Number}* Sets the tabindex attribute (default: `null`)

**topLeft** *{Boolean}* Sets the menu to open from the top left (default: `false`)

**topRight** *{Boolean}* Sets the menu to open from the top right (default: `false`)
