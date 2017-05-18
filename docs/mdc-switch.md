# mdc-switch

### Usage

```hbs
{{mdc-switch name="receive_emails" label="Receive Emails"}}
```

Yields

```html
<div id="ember566" class="mdc-switch  ">
  <input id="ember566-switch" name="receive_emails" type="checkbox"
  class="mdc-switch__native-control">
  <div class="mdc-switch__background">
    <div class="mdc-switch__knob"></div>
  </div>
</div>
<label id="ember566-label" for="ember566-switch" class="mdc-switch-label">Receive Emails</label>
```

### Attributes

**class** *{String}* Adds to the class attribute on the a/button element (default: `null`)

**checked** *{Boolean}* Sets the checked attribute (default: `false`)

**disabled** *{Boolean}* Sets the disabled attribute (default: `false`)

**form** *{String}* Sets the form attribute (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**label** *{String}* Sets the label for the switch (default: `null`)

**name** *{String}* Sets the name attribute (default: `null`)

**value** *{String}* Sets the value attribute (default: `null`)
