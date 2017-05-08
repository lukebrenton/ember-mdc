# mdc-card

### Usage

```hbs
{{#mdc-card title="Kaladin" hasSupportingText=true}}
  Kaladin is the eldest child of Lirin and Hesina,
  darkeyed Alethi of the second nahn. He and his brother,
  Tien, were raised in the town of Hearthstone.
{{/mdc-card}}
```

Yields

```html
<div id="ember318" class="mdc-card ember-view">
  <section class="mdc-card__primary">
    <h1 class="mdc-card__title mdc-card__title--large">
      Kaladin
    </h1>
  </section>
  <section class="mdc-card__supporting-text">
    Kaladin is the eldest child of Lirin and Hesina,
    darkeyed Alethi of the second nahn. He and his brother,
    Tien, were raised in the town of Hearthstone.
  </section>
</div>
```

The `mdc-card` component has three text blocks that can be filled: the media block,
the supporting text block, and the actions block. If only one is specified
(as in the example above), you don't need to do any logic in the block. If you need
to use more than one block at a time, however, you will need to take advantage of
`yield parameters`. Here is an example:

```hbs
{{#mdc-card title="Kaladin" hasActions=true hasMedia=true
hasSupportingText=true as |block|}}
  {{#if block.media}}
    Kaladin Stormblessed overlooking the shattered plains.
  {{else if block.supportingText}}
    Kaladin is the eldest child of Lirin and Hesina,
    darkeyed Alethi of the second nahn. He and his brother,
    Tien, were raised in the town of Hearthstone.
  {{else if block.actions}}
    {{#mdc-button cardAction=true primary=true}}
      Learn More
    {{/mdc-button}}
  {{/if}}
{{/mdc-card}}
```

Yields

```html
<div id="ember318" class="mdc-card ember-view">
  <section class="mdc-card__primary">
    <h1 class="mdc-card__title mdc-card__title--large">
      Kaladin
    </h1>
  </section>
  <section class="mdc-card__media">
    Kaladin Stormblessed overlooking the shattered plains.
  </section>
  <section class="mdc-card__supporting-text">
    Kaladin is the eldest child of Lirin and Hesina,
    darkeyed Alethi of the second nahn. He and his brother,
    Tien, were raised in the town of Hearthstone.
  </section>
  <section class="mdc-card__actions ">
    <button id="ember328" class="mdc-button mdc-card__action
    mdc-button--compact mdc-button--primary ember-view">
      Learn More
    </button>
  </section>
</div>
```

### Attributes

**class** *{String}* Adds to the class attribute (default: `null`)

**dark** *{Boolean}* Use the dark theme (default: `false`)

**hasActions** *{Boolean}* Use the actions block. (Yields `block.actions`) (default: `false`)

**hasMedia** *{Boolean}* Use the media block. (Yields `block.media`) (default: `false`)

**hasSupportingText** *{Boolean}* Use the supporting text block. (Yields `block.supportingText`) (default: `false`)

**id** *{String}* Sets the id attribute (default: `Ember.generateGuid()`)

**largeTitle** *{Boolean}* Make the title large (default: `true`)

**subtitle** *{String}* Sets the subtitle (default: `null`)

**title** *{String}* Sets the title (default: `null`)

**verticalActions** *{Boolean}* Use the vertical actions style (default: `false`)

## Horizontal Block

You can stack multiple card blocks horizontally instead of vertically,
by placing them inside of a `mdc-card` and setting the `horizontal`
attribute to `true`:

### Usage

```hbs
{{#mdc-card}}
  {{#mdc-card horizontal=true title="Kaladin"
  subtitle="Kaladin Stormblessed" hasActions=true}}
    {{#mdc-button cardAction=true primary=true}}Learn More{{/mdc-button}}
  {{/mdc-card}}
  {{#mdc-card horizontal=true title="Shallan"
  subtitle="Shallan Davar" hasActions=true}}
    {{#mdc-button cardAction=true primary=true}}Learn More{{/mdc-button}}
  {{/mdc-card}}
{{/mdc-card}}
```

Yields

```html
<div id="ember329" class="mdc-card ember-view">
  <div id="ember331" class="mdc-card__horizontal-block ember-view">
    <section class="mdc-card__primary">
      <h1 class="mdc-card__title mdc-card__title--large">Kaladin</h1>
      <h2 class="mdc-card__subtitle">Kaladin Stormblessed</h2>
    </section>
    <section class="mdc-card__actions ">
      <button id="ember332" class="mdc-button mdc-card__action 
      mdc-button--compact mdc-button--primary ember-view">
        Learn More
      </button>
    </section>
  </div>
  <div id="ember334" class="mdc-card__horizontal-block ember-view">
    <section class="mdc-card__primary">
      <h1 class="mdc-card__title mdc-card__title--large">Shallan</h1>
      <h2 class="mdc-card__subtitle">Shallan Davar</h2>
    </section>
    <section class="mdc-card__actions ">
      <button id="ember335" class="mdc-button mdc-card__action 
      mdc-button--compact mdc-button--primary ember-view">
        Learn More
      </button>
    </section>
  </div>
</div>
```

### Attributes

**Note:** In horizontal block mode, the `hasMedia` attribute will be ignored.
Horizontal blocks uses a media item rather than the media section.
You can configure the media item with `mediaSize` and `mediaSrc`.

**horizontal** *{Boolean}* Use this card as a horizontal block (default: `false`)

**mediaSize** *{String}* Sets the size of the media item. (Can be: 1, 1dot5, 2, or 3.) (default: `1`)

**mediaSrc** *{String}* Sets the src for the media item. (default: `null`)
