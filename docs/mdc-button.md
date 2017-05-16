# mdc-button

### Usage

```hbs
{{#mdc-button}}Flat Button{{/mdc-button}}
```

Yields

```html
<button id="ember400" class="mdc-button mdc-button--primary mdc-button--raised ember-view">Submit</button>
```

The `mdc-button` component can output a `button` or `a` element depending on the parameters you supply.

If you supply a value for `href`, `mdc-button` will ignore values set for `form`, `name`, `type`, and `value`.
The only exception to this rule is if `disabled` is set to true. In that case, those values are still ignored but
a `button` element is used and has the `disabled` attribute on it.

```hbs
{{#mdc-button href="/about"}}About{{/mdc-button}}
{{#mdc-button href="/about" disabled=true}}About{{/mdc-button}}
```

Yields

```html
<a id="ember400" href="/about" class="mdc-button ember-view">About</a>
<button id="ember400" disabled class="mdc-button ember-view">About</button>
```

### Attributes

**accent** *{Boolean}* Use the accent color (default: `false`)

**attributes** *{Object}* If you need to set any additional attributes on the a/button element, set them here. i.e. `{formenctype: "multipart/form-data"}` (default: `{}`)

**class** *{String}* Adds to the class attribute on the a/button element (default: `null`)

**cardAction** *{Boolean}* Styles this button to be used as a card action. (Will also use compact styling) (default: `false`)

**compact** *{Boolean}* Use the compact styling (default: `false`)

**dark** *{Boolean}* Use the dark theme (default: `false`)

**dense** *{Boolean}* Use the dense styling (default: `false`)

**dialog** *{String}* Open the corresponding dialog when this button is clicked. (Links to `mdc-dialog` `name` attribute) (default: `null`)

**dialogAccept** *{Boolean}* Styles this button to be used as a dialog accept button. (Will also add ripples) (default: `false`)

**dialogCancel** *{Boolean}* Styles this button to be used as a dialog cancel button. (Will also add ripples) (default: `false`)

**disabled** *{Boolean}* Sets the disabled attribute on the button element. (This *can* be used to disable links) (default: `false`)

**drawer** *{String}* Open the corresponding drawer when this button is clicked. (Links to `mdc-drawer` `name` attribute) (default: `null`)

**form** *{String}* Sets the form attribute on the button element (default: `null`)

**href** *{String}* Sets the href attribute on the a element (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**menu** *{String}* Open the corresponding menu when this icon is clicked. (Links to `mdc-menu` `name` attribute) (default: `null`)

**name** *{String}* Sets the name attribute on the button element (default: `null`)

**primary** *{Boolean}* Use the primary color (default: `false`)

**raised** *{Boolean}* Use the raised styling (default: `false`)

**ripple** *{Boolean}* Attach a ripple effect (default: `false`)

**type** *{String}* Sets the type attribute on the button element (default: `null`)

**value** *{String}* Sets the value attribute on the button element (default: `null`)
