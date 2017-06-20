# mdc-textfield

### Attributes

**class** *{String}* Adds to the class attribute on the input/textarea element (default: `null`)

**dark** *{Boolean}* Use the dark theme (default `false`)

**dense** *{Boolean}* Use the dense styling (default: `false`)

**disabled** *{Boolean}* Sets the disabled attribute on the input/textarea element (default: `false`)

**form** *{Boolean}* Sets the form attribute on the input/textarea element (default: `false`)

**fullwidth** *{Boolean}* Use the fullwidth textfield (default: `false`)

**helptext** *{String}* The helptext to display (default: `null`)

**helptextPersistent** *{Boolean}* Make the helptext be persistent (default: `false`)

**helptextValidation** *{Boolean}* Use the helptext for validation (default: `false`)

**id** *{String}* Sets the id attribute for this component (The input/textarea element's id attribute is set to this value appended with '-input'. If there is a helptext element, it's id attribute is set to this value appended with '-helptext') (default: `Ember.generateGuid()`)

**inputAttributes** *{Object}* If you need to set any additional attributes on the input/textarea element, set them here. i.e. `{minlength: 8}` (default: `{}`)

**label** *{String}* The label text to display (default: `null`)

**multiline** *{Boolean}* Use the multiline textfield (default: `false`)

**name** *{String}* Sets the name attribute on the input/textarea element (default: `null`)

**oninput** *{Function}* Function called whenever the input event is fired on the input element (The value of the input element is passed as the first argument) (default `null`)

**required** *{Boolean}* Sets the required attribute on the input/textarea element (default: `false`)

**value** *{String}* Sets the value attribute on the input/textarea element (default: `null`)

## Single-line

### Usage

```hbs
{{mdc-textfield type="email" name="email" label="Email" required=true helptext="Please enter a valid email address" helptextPersistent=true helptextValidation=true}}
```

Yields

```html
<div id="ember428" class="mdc-textfield mdc-textfield--upgraded">
  <input id="ember428-input" aria-controls="ember428-helptext" type="email" name="email" required class="ember-text-field mdc-textfield__input ember-view">
  <label for="ember428-input" class="mdc-textfield__label">Email</label>
</div>
<p id="ember428-helptext" aria-hidden="true" class="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg">
  Please enter a valid email address
</p>
```

### Attributes

**type** *{String}* Sets the type attribute on the input element  (default: `'text'`)

## Multi-line

### Usage

```hbs
{{mdc-textfield multiline=true name="bio" label="Bio"}}
```

Yields

```html
<div id="ember418" class="mdc-textfield mdc-textfield--multiline mdc-textfield--upgraded">
  <textarea id="ember418-input" name="bio" class="ember-text-area mdc-textfield__input ember-view"></textarea>
  <label for="ember418-input" class="mdc-textfield__label">Bio</label>
</div>
```

### Attributes

**cols** *{Number}* Sets the cols attribute on the textarea element (default: `null`)

**rows** *{Number}* Sets the rows attribute on the textarea element (default: `null`)
