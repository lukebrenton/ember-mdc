# mdc-tabs

### Usage

The `mdc-tabs` component expects an array of objects to be passed
in to it's `tabs` attribute. These are the properties that the
component looks for:

**active** *{Boolean}* Sets the active tab (default: `false`)

**href** *{String}* Sets the href attribute (default: `'#'`)

**name** *{String}* Sets the name of the tab (default: `''`)

```js
const tabs = [
  {active: true, href: '#alethkar', name: 'Alethkar'},
  {href: '#jahKeved', name: 'Jah Keved'}
];
```

```hbs
{{mdc-tabs tabs=tabs}}
```

Yields

```html
<nav id="ember597" class="mdc-tab-bar ember-view mdc-tab-bar-upgraded">
  <a href="#alethkar" id="ember598" class="mdc-tab mdc-tab--active
  ember-view mdc-ripple-upgraded">
    Alethkar
  </a>
  <a href="#jahKeved" id="ember599" class="mdc-tab ember-view mdc-ripple-upgraded">
    Jah Keved
  </a>
  <span class="mdc-tab-bar__indicator"></span>
</nav>
```

### Icons in Tabs

If you want to use icons in tabs, you will need to set either
`icons` or `iconsWithText` to `true`. You will also need to use
the `mdc-tabs` component as a block. And finally, you need to
set the `tab` attribute to `true` on the `mdc-icon` component.
As an example:

```hbs
{{#mdc-tabs iconsWithText=true tabs=tabs as |tab|}}
  {{mdc-icon tab=true content="location_on"}}
{{/mdc-tabs}}
```

Yields

```html
<nav id="ember597" class="mdc-tab-bar mdc-tab-bar--icons-with-text
ember-view mdc-tab-bar-upgraded">
  <a href="#alethkar" id="ember598" class="mdc-tab mdc-tab--active
  mdc-tab--with-icon-and-text ember-view mdc-ripple-upgraded">
    <i id="ember600" aria-hidden="true" class="material-icons md-24
    mdc-tab__icon ember-view">
      location_on
    </i>
    <span class="mdc-tab__icon-text">Alethkar</span>
  </a>
  <a href="#jahKeved" id="ember601" class="mdc-tab mdc-tab--with-icon-and-text
  ember-view mdc-ripple-upgraded">
    <i id="ember603" aria-hidden="true" class="material-icons md-24
    mdc-tab__icon ember-view">
      location_on
    </i>
    <span class="mdc-tab__icon-text">Jah Keved</span>
  </a>
  <span class="mdc-tab-bar__indicator"></span>
</nav>
```

### Attributes

**accent** *{Boolean}* Use the accent color (default: `false`)

**class** *{String}* Adds to the class attribute (default: `null`)

**icons** *{Boolean}* Use icons only in the tabs (default: `false`)

**iconsWithText** *{Boolean}* Use icons and text in the tabs (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**primary** *{Boolean}* Use the primary color (default: `false`)

**tabs** *{Object[]}* The tabs object to use (default: `{}`)
