# mdc-icon

The `mdc-icon` component can be used in two ways.

1. To display an icon
2. To display an interactive icon toggle

It is important to note that the `mdc-icon` component expects you to be
using the `material-icons` icon framework. The component works best
in this situation but you can tweak it to work differently.

### Global Attributes

**accent** *{Boolean}* Use the accent color (default: `false`)

**class** *{String}* Adds to the class attribute (default: `null`)

**content** *{String}* Sets the inner content (default: `null`)

**dark** *{Boolean}* Use the dark theme (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**primary** *{Boolean}* Use the primary color (default: `false`)

**size** *{Number}* Sets the size of the icon. (Can be: `18`, `24`, `36`, `or` 48) (default: `24`)

## Icons

### Usage

```hbs
{{mdc-icon content="favorite_border"}}
{{#mdc-icon label="Favorite"}}favorite{{/mdc-icon}}
```

Yields

```html
<i id="ember363" aria-hidden="true" class="material-icons md-24 ember-view">
  favorite_border
</i>
<i id="ember364" aria-label="Favorite" class="material-icons md-24 ember-view">
  favorite
</i>
```

An example with the Font Awesome framework:

```hbs
{{mdc-icon class="fa fa-star-o" material=false}}
```

Yields

```html
<i id="ember371" aria-hidden="true" class="fa fa-star-o ember-view"></i>
```

### Links

You can have `mdc-icon` be a link by setting the `href` attribute.

```hbs
{{mdc-icon content="favorite_border" href="#"}}
```

Yields

```html
<a id="ember363" href="#" class="material-icons md-24 ember-view">
  favorite_border
</a>
```

### Attributes

**button** *{Boolean}* Use the icon as a button (default: `false`)

**dialog** *{String}* Open the corresponding dialog when this icon is clicked. (Links to `mdc-dialog` `name` attribute) (default: `null`)

**drawer** *{String}* Open the corresponding drawer when this icon is clicked. (Links to `mdc-drawer` `name` attribute) (default: `null`)

**href** *{String}* Use the icon as a link and sets the href attribute (default: `null`)

**inactive** *{Boolean}* Use the inactive style (default: `false`)

**label** *{String}* The label to use for screen readers (default: `null`)

**material** *{Boolean}* Use the `material-icons` framework (default: `true`)

## Icon Toggles

In order to use icon toggles, you need to set the `offContent` and `onContent`
properties. If you aren't using the `material-icons` framework, you will need
to set the `iconInnerSelector`, `offCSSClass` and `onCSSClass` properties instead.

### Usage

```hbs
{{mdc-icon pressed=true onLabel="Remove from favorites" onContent="favorite"
offLabel="Add to favorites" offContent="favorite_border"}}
```

Yields

```html
<i tabindex="0" role="button" id="ember373"
data-toggle-on="{"content":"favorite","label":"Remove from favorites"}"
data-toggle-off="{"content":"favorite_border","label":"Add to favorites"}"
aria-pressed="true" aria-label="Remove from favorites"
class="material-icons md-24 mdc-icon-toggle ember-view
mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">favorite</i>
```

An example with the Font Awesome framework:

```hbs
{{#mdc-icon iconInnerSelector=".fa" pressed=true
onLabel="Remove from favorites" onCSSClass="fa-star"
offLabel="Add to favorites" offCSSClass="fa-star-o"}}
  {{mdc-icon class="fa fa-star-o" material=false}}
{{/mdc-icon}}
```

Yields

```html
<span tabindex="0" role="button" id="ember375"
data-toggle-on="{"cssClass":"fa-star","label":"Remove from favorites"}"
data-toggle-off="{"cssClass":"fa-star-o","label":"Add to favorites"}"
data-icon-inner-selector=".fa" aria-pressed="true"
aria-label="Remove from favorites"
class="mdc-icon-toggle ember-view mdc-ripple-upgraded
mdc-ripple-upgraded--unbounded">
  <i id="ember377" aria-hidden="true" class="fa fa-star ember-view"></i>
</span>
```

### Attributes

**disabled** *{Boolean}* Disabled the icon toggle (default: `false`)

**iconInnerSelector** *{String}* The selector to select the inner icon (default: `null`)

**offContent** *{String}* The inner content when the toggle is off (default: `null`)

**offCSSClass** *{String}* The class to put on the inner icon when the toggle is off (default: `null`)

**offLabel** *{String}* The label to use when the toggle is off (default: `null`)

**onContent** *{String}* The inner content when the toggle is on (default: `null`)

**onCSSClass** *{String}* The class to put on the inner icon when the toggle is on (default: `null`)

**onLabel** *{String}* The label to use when the toggle is on (default: `null`)

**pressed** *{Boolean}* Sets the state of the toggle (default: `false`)
