# ember-mdc

## Install

```bash
ember install ember-mdc

# or the following
#ember install https://github.com/austp/ember-mdc.git
#ember generate ember-mdc
```

## Components

Documentation on usage for the individual components is found in /docs.

## Including JS

If you need access to the JS provided by material-components-web, you can access it as described in their documentation.

```js
import { MDCTextfield, MDCTextfieldFoundation } from '@material/textfield';
```

## Including SASS

Unfortunately, the only way to make the SASS available was under the vendor prefix, so importing SASS
doesn't line up with material-components-web's documentation. It works as follows:

```scss
@import 'vendor/@material/theme/mdc-theme';
```

## Customizing Your Theme

As an example, you will see how this addon makes it so you can easily customize your theme.

1. Set your scss variables according to material-components-web's documentation.
2. Import the theme scss file.

```scss
$mdc-theme-primary: #4caf50;
$mdc-theme-accent: #ea80fc;
$mdc-theme-background: #f5f5f5;

@import 'vendor/@material/theme/mdc-theme';
```

Now any component that uses these colors will match the colors that you have set.
