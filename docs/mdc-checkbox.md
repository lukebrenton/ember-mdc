# mdc-checkbox

### Usage

```hbs
{{mdc-checkbox name="consent" value="given"}}
```

Yields

```html
<div id="ember319" class="mdc-checkbox mdc-checkbox--upgraded
mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
  <input id="ember319-checkbox" name="consent" type="checkbox" value="given"
  class="ember-checkbox mdc-checkbox__native-control ember-view">
  <div class="mdc-checkbox__background">
    <svg viewBox="0 0 24 24" class="mdc-checkbox__checkmark">
      <path fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"
      class="mdc-checkbox__checkmark__path"></path>
    </svg>
    <div class="mdc-checkbox__mixedmark"></div>
  </div>
</div>
```

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**checked** *{Boolean}* Sets the checked attribute (default `false`)

**dark** *{Boolean}* Use the dark theme (default `false`)

**disabled** *{Boolean}* Sets the disabled attribute (default: `false`)

**form** *{String}* Sets the form attribute (default: `null`)

**id** *{String}* Sets the id attribute for this component (The input element's id attribute is set to this value appended with '-checkbox'. If there is a label element, it's id attribute is set to this value appended with '-label') (default: `Ember.generateGuid()`)

**indeterminate** *{Boolean}* Sets the checkbox indeterminate value (default: `false`)

**inputAttributes** *{Object}* If you need to set any additional attributes on the input element, set them here. i.e. `{tabindex: -1}` (default: `{}`)

**label** *{String}* The label text to display (default: `null`)

**name** *{String}* Sets the name attribute on the input element (default: `null`)

**required** *{Boolean}* Sets the required attribute on the input element (default: `false`)

**value** *{String}* Sets the value attribute on the input element (default: `null`)
