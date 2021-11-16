/**
 * @type {import('postcss').PluginCreator}
 */
const plugin = (opts = {}) => ({
  postcssPlugin: 'postcss-magento-import',
  AtRule: {
    magento_import: (node) => {
      const modules = opts.modules || []
      modules.forEach((moduleName) => {
        node.cloneAfter({
          name: 'import',
          params: `"../${moduleName}/${node.params.replace(/["']/gm, '')}"`,
          source: node.source
        })
      })
      node.remove()
    }
  }
})

plugin.postcss = true

export default plugin
