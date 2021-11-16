/**
 * @type {import('postcss').PluginCreator}
 */
export default (opts = {}) => ({
  postcssPlugin: 'postcss-magento-import'
  /*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */

  /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

  /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
})
