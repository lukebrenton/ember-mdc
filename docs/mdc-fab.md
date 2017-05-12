# mdc-fab

### Usage

```hbs
{{mdc-fab content="favorite" ripple=true}}
```

Yields

```html
<button id="ember385" class="mdc-fab material-icons ember-view
mdc-ripple-upgraded mdc-ripple-upgraded--foreground-deactivation">
  <span class="mdc-fab__icon">favorite</span>
</button>
```

### Attributes

**class** *{String}* Adds to the class attribute on the a/button element (default: `null`)

**content** *{String}* Shortcut to set the content (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**label** *{String}* Sets the aria-label attribute (default: `null`)

**mini** *{Boolean}* Use the mini styling (default: `false`)

**plain** *{Boolean}* Use the plain styling (default: `false`)

**ripple** *{Boolean}* Attach a ripple effect (default: `false`)
