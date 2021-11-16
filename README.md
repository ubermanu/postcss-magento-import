# postcss-magento-import

A plugin to resolve the @magento_import statements in CSS files.

## Install

    npm install postcss-magento-import --save-dev

## Usage

In your `postcss.config.js` file:

```js
const postcssMagentoImport = require('postcss-magento-import');

module.exports = {
    plugins: [
        postcssMagentoImport({
            phpConfigFile: 'app/etc/config.php',
            // or modules: [ 'Magento_Store', 'Magento_Catalog' ]
        })
    ]
};
```

And your css file:

```css
@magento_import 'source/_module.css';
```

It should output something like:

```css
@import "../../Magento_Store/web/css/source/_module.css";
@import "../../Magento_Catalog/web/css/source/_module.css";
```
