# mdc-linear-progress

### Usage

```hbs
{{mdc-linear-progress name="downloadProgress"}}
```

Yields

```html
<div role="progressbar" class="mdc-linear-progress">
  <div class="mdc-linear-progress__buffering-dots"></div>
  <div class="mdc-linear-progress__buffer"></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>
```

We can use it in JavaScript like so:

```js
let linearProgress = window.emberMDC.downloadProgress;
// let linearProgress = document.querySelector('div').mdcInstance;

linearProgress.progress = .50;
```

### Attributes

**accent** *{Boolean}* Use the accent color (default: `false`)

**class** *{String}* Adds to the class attribute on the a/button element (default: `null`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**indeterminate** *{Boolean}* Use the indeterminate style (default: `false`)

**name** *{String}* Sets the name where the `MDCLinearProgress` instance is referenced (default: `null`)

**reversed** *{Boolean}* Use the reversed style (default: `false`)
