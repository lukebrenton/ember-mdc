# mdc-form-field

### Usage

```hbs
{{#mdc-form-field}}
  {{mdc-checkbox name="consent" value="given" label="Consent"}}
{{/mdc-form-field}}
```

Yields

```html
<div id="ember400" class="mdc-form-field ember-view">
  <div id="ember410" class="mdc-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded
  mdc-ripple-upgraded--unbounded mdc-ripple-upgraded--foreground-deactivation">
    <input id="ember410-checkbox" name="consent" type="checkbox" value="given"
    class="ember-checkbox mdc-checkbox__native-control ember-view">
    <div class="mdc-checkbox__background">
      <svg viewBox="0 0 24 24" class="mdc-checkbox__checkmark">
        <path fill="none" stroke="white" d="M1.73,12.91
        8.1,19.28 22.79,4.59" class="mdc-checkbox__checkmark__path"></path>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
  <label id="ember410-label" for="ember410-checkbox">Consent</label>
</div>
```

### Attributes

**alignEnd** *{Boolean}* Aligns the input to the end (default: `false`)

**class** *{String}* Adds to the class attribute on the a/button element (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)
