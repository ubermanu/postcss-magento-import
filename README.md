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
            configFile: 'app/etc/config.php',
            // or modules: [ 'Magento_Store', 'Magento_Catalog' ]
        })
    ]
};
```
