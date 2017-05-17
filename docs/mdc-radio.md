# mdc-radio

### Usage

```hbs
{{mdc-radio name="food" value="bread"}}
{{mdc-radio name="food" value="cheese"}}
```

Yields

```html
<div id="ember499" class="mdc-radio  mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
  <input type="radio" value="bread" name="food" id="ember499-radio"
  class="mdc-radio__native-control ember-view">
  <div class="mdc-radio__background">
    <div class="mdc-radio__outer-circle"></div>
    <div class="mdc-radio__inner-circle"></div>
  </div>
</div>
<div id="ember510" class="mdc-radio  mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
  <input type="radio" value="cheese" name="food" id="ember510-radio"
  class="mdc-radio__native-control ember-view">
  <div class="mdc-radio__background">
    <div class="mdc-radio__outer-circle"></div>
    <div class="mdc-radio__inner-circle"></div>
  </div>
</div>
```

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**checked** *{Boolean}* Sets the checked attribute (default `false`)

**disabled** *{Boolean}* Sets the disabled attribute (default: `false`)

**form** *{String}* Sets the form attribute (default: `null`)

**id** *{String}* Sets the id attribute for this component (The input element's id attribute is set to this value appended with '-radio'. If there is a label element, it's id attribute is set to this value appended with '-label') (default: `Ember.generateGuid()`)

**inputAttributes** *{Object}* If you need to set any additional attributes on the input element, set them here. i.e. `{tabindex: -1}` (default: `{}`)

**label** *{String}* The label text to display (default: `null`)

**name** *{String}* Sets the name attribute on the input element (default: `null`)

**required** *{Boolean}* Sets the required attribute on the input element (default: `false`)

**value** *{String}* Sets the value attribute on the input element (default: `null`)
