# mdc-drawer

### Usage

```hbs
{{#mdc-drawer persistent=true hasHeader=true as |block|}}
  {{#if block.header}}
    Header here
  {{else if block.content}}
    {{#mdc-list persistentDrawer=true items=model as |item block|}}
      {{#if block.startDetail}}
        {{mdc-icon content=item.icon}}
      {{else if block.primary}}
        {{item.name}}
      {{/if}}
    {{/mdc-list}}
  {{/if}}
{{/mdc-drawer}}
```

Yields

```html
<aside id="ember337" class="mdc-typography mdc-persistent-drawer
ember-view mdc-persistent-drawer--open">
  <nav class="mdc-persistent-drawer__drawer">
    <header class="mdc-persistent-drawer__header">
      <div class="mdc-persistent-drawer__header-content">Header here</div>
    </header>
    <nav id="ember347" class="mdc-list mdc-persistent-drawer__content
    ember-view">
      <a href="#" id="ember357" class="mdc-list-item selected
      mdc-persistent-drawer--selected ember-view">
        <span role="presentation"
        class="mdc-list-item__start-detail">
          <i id="ember361" aria-hidden="true"
          class="material-icons md-24 ember-view">
            inbox
          </i>
        </span>
        Inbox
      </a>
      <a href="#" id="ember363" class="mdc-list-item ember-view">         
        <span role="presentation"
        class="mdc-list-item__start-detail">
          <i id="ember365" aria-hidden="true"
          class="material-icons md-24 ember-view">
            star
          </i>
        </span>
        Starred
      </a>
    </nav>
  </nav>
</aside>
```

The `mdc-drawer` has 3 types: `permanent`, `persistent`, and
`temporary`. Whichever drawer type you are using, just set
that attribute to `true`.

The drawer has three blocks. The header block, spacer block,
and the content block. The content block is always yielded.
In order to yield the header block, you will need to set
`hasHeader` to `true`. In order to yield the spacer block,
you will need to set `hasSpacer` to `true`. Note that you
can't have a header and a spacer in the same drawer.

### Showing Drawers

If you specify a `name` for the drawer, you can make a `mdc-button`
or `mdc-icon` open the drawer when it is clicked by setting the
`drawer` to match the `name`. For example:

```hbs
{{#mdc-drawer persistent=true name="drawer"}}...{{/mdc-drawer}}
{{#mdc-button drawer="drawer"}}Show Drawer{{/mdc-button}}
{{mdc-icon drawer="drawer" content="menu"}}
```

When the button or icon is clicked, the drawer will show.

Or by using JavaScript:

```js
let drawer = window.emberMDC.drawer;
// let drawer = document.querySelector('aside').drawer;

document.querySelector('button').addEventListener('click', function() {
  drawer.open = true;
});
```

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**hasHeader** *{Boolean}* Use the actions block. (Yields `block.header`) (default: `false`)

**hasSpacer** *{Boolean}* Use the media block. (Yields `block.spacer`) (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**name** *{String}* Sets the name where the `MDCDrawer` instance is referenced (default: `null`)

**permanent** *{Boolean}* Sets the drawer type to permanent (default: `false`)

**persistent** *{Boolean}* Sets the drawer type to persistent (default: `false`)

**temporary** *{Boolean}* Sets the drawer type to temporary (default: `false`)
