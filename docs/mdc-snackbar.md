# mdc-snackbar

### Usage

```hbs
{{mdc-snackbar name="snackbar"}}
```

Yields

```html
<div id="ember561" aria-live="assertive" aria-atomic="true"
class="mdc-snackbar ember-view" aria-hidden="true">
  <div class="mdc-snackbar__text"></div>
  <div class="mdc-snackbar__action-wrapper">
    <button type="button" id="ember562" class="mdc-button
    mdc-snackbar__action-button ember-view" aria-hidden="true"></button>
  </div>
</div>
```

Then you can use it in JavaScript as so:

```js
let snackbar = window.emberMDC.snackbar;
// let snackbar = document.querySelector('div').mdcInstance;

document.querySelector('button').addEventListener('click', function() {
  snackbar.show({message: 'Message sent'});
});
```

### Attributes

**class** *{String}* Adds to the class attribute on the a/button element (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**name** *{String}* Sets the name where the `MDCSnackbar` instance is referenced (default: `null`)
