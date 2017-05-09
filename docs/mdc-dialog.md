# mdc-dialog

### Usage

```hbs
{{#mdc-dialog title="Use Google's location service?"
name="locationDialog" as |block|}}
  {{#if block.description}}
    Let Google help apps determine location. This means sending
    anonymous location data to Google, even when no apps are running.
  {{else if block.footer}}
    {{#mdc-button dialogCancel=true}}Decline{{/mdc-button}}
    {{#mdc-button dialogAccept=true}}Accept{{/mdc-button}}
  {{/if}}
{{/mdc-dialog}}
```

Yields

```html
<aside style="visibility: hidden;" id="ember325"
aria-labelledby="ember325-label" aria-hidden="true"
aria-describedby="ember325-description"
class="mdc-dialog ember-view mdc-dialog--open">
  <div class="mdc-dialog__surface">
    <header class="mdc-dialog__header">
      <h2 id="ember325-label" class="mdc-dialog__header__title">
        Use Google's location service?
      </h2>
    </header>
    <section id="ember325-description" class="mdc-dialog__body">
      Let Google help apps determine location. This means sending
      anonymous location data to Google, even when no apps are running.
    </section>
    <footer class="mdc-dialog__footer">
      <button id="ember328" class="mdc-button mdc-dialog__footer__button
      mdc-dialog__footer__button--cancel ember-view mdc-ripple-upgraded">
        Decline
      </button>
      <button id="ember329" class="mdc-button mdc-dialog__footer__button 
      mdc-dialog__footer__button--accept ember-view mdc-ripple-upgraded">
        Accept
      </button>
    </footer>
  </div>
  <div class="mdc-dialog__backdrop"></div>
</aside>
```

The `mdc-dialog` component has two text blocks that can be filled: the 
description block and the footer block. You will need to take advantage of
`yield parameters` in order to specify where the content goes.

When you set the dialog's name, a reference to the `MDCDialog` instance
is set to `window.emberMDC[name]`. If you don't name your dialog, you can 
get a reference to the `MDCDialog` instance from off the root element.

### Showing Dialogs

If you specify a `name` for the dialog, you can make a `mdc-button` open
the dialog when it is clicked by setting the `dialog` to match the `name`.
For example:

```hbs
{{#mdc-dialog name="locationDialog"}}...{{/mdc-dialog}}
{{#mdc-button dialog="locationDialog"}}Show Dialog{{/mdc-button}}
```

When that button is clicked, the locationDialog will show.

Or by using JavaScript:

```js
let dialog = window.emberMDC.locationDialog;
// let dialog = document.querySelector('aside').dialog;

document.querySelector('button').addEventListener('click', function() {
  dialog.show();
});
```

### Listening for Actions

Listening for actions is done the same as material-components-web.

```js
// let dialog = window.emberMDC.locationDialog;
let dialog = document.querySelector('aside').dialog;

dialog.listen('MDCDialog:accept', function() {
  console.log('accepted');
})

dialog.listen('MDCDialog:cancel', function() {
  console.log('canceled');
})
```

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**dark** *{Boolean}* Use the dark theme (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**name** *{String}* Sets the name where the `MDCDialog` instance is referenced (default: `null`)

**role** *{String}* Sets the role attribute (default: `null`)

**scrollable** *{Boolean}* Use the scrollable style (default: `false`)

**title** *{String}* Sets the title (default: `null`)
