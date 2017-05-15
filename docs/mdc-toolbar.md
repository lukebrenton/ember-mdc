# mdc-toolbar

If you are using a toolbar style that requires JavaScript, the
`mdc-toolbar` component will automatically attach the JavaScript for you.

### Usage

```hbs
{{#mdc-toolbar}}
  {{#mdc-toolbar/section alignStart=true title="Stormlight Archive"}}
    {{mdc-icon content="menu"}}
  {{/mdc-toolbar/section}}
{{/mdc-toolbar}}
```

Yields

```html
<header id="ember392" class="mdc-toolbar ember-view">
  <div class="mdc-toolbar__row">
    <section id="ember406" class="mdc-toolbar__section
    mdc-toolbar__section--align-start ember-view">
      <i id="ember408" aria-hidden="true"
      class="md-button material-icons md-24 ember-view">
        menu
      </i>
      <span class="mdc-toolbar__title">
        Stormlight Archive
      </span>
    </section>
  </div>
</header>
```

## Sections

The `mdc-toolbar/section` component has 3 attributes:

**alignEnd** *{Boolean}* Aligns the section to the end (default: `false`)

**alignStart** *{Boolean}* Aligns the section to the start (default: `false`)

**title** *{String}* Adds a title to the section (default: `null`)

```hbs
{{#mdc-toolbar}}
  {{#mdc-toolbar/section alignStart=true}}
    Section aligned to start.
  {{/mdc-toolbar/section}}
  {{#mdc-toolbar/section}}
    Section aligned to center.
  {{/mdc-toolbar/section}}
  {{#mdc-toolbar/section alignEnd=true}}
    Section aligned to end.
  {{/mdc-toolbar/section}}
{{/mdc-toolbar}}
```

Yields

```html
<header id="ember392" class="mdc-toolbar ember-view">
  <div class="mdc-toolbar__row">
    <section id="ember402" class="mdc-toolbar__section
    mdc-toolbar__section--align-start ember-view">
      Section aligned to start.
    </section>
    <section id="ember403" class="mdc-toolbar__section
    ember-view">
      Section aligned to center.
    </section>
    <section id="ember404" class="mdc-toolbar__section
    mdc-toolbar__section--align-end ember-view">
      Section aligned to end.
    </section>
  </div>
</header>
```

## Fixed Toolbars

You will get a fixed toolbar if any of the following attributes are set to `true`:

**fixed** *{Boolean}* Use the fixed toolbar style (default: `false`)

**fixedLastRow** *{Boolean}* Use the fixed last row only toolbar style (default: `false`)

**waterfall** *{Boolean}* Use the fixed waterfall toolbar style (default: `false`)

```hbs
{{#mdc-toolbar fixed=true}}
  {{#mdc-toolbar/section alignStart=true title="Stormlight Archive"}}
    {{mdc-icon content="menu"}}
  {{/mdc-toolbar/section}}
{{/mdc-toolbar}}
<main class="mdc-toolbar-fixed-adjust"></main>
```

## Flexible Toolbars

You will get a flexible toolbar if any of the following attributes are set to `true`:

**flexible** *{Boolean}* Use the flexible toolbar style (default: `false`)

**flexibleNoDefault** *{Boolean}* Use the flexible toolbar style without default styling (default: `false`)

```hbs
{{#mdc-toolbar flexible=true}}
  {{#mdc-toolbar/section alignStart=true title="Stormlight Archive"}}
    {{mdc-icon content="menu"}}
  {{/mdc-toolbar/section}}
{{/mdc-toolbar}}
```

## Multiple rows

You can have a toolbar with multiple rows by setting the rows attribute
to the amount of rows you want.

**rows** *{Number}* The number of rows in the toolbar (default: `1`)

```hbs
{{#mdc-toolbar rows=2 as |row|}}
  {{#if row.[1]}}
    This is the first row
  {{else if row.[2]}}
    This is the second row
  {{/if}}
{{/mdc-toolbar}}
```

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)
