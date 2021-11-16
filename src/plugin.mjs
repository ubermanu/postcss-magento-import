import { getModulesFromFile } from './magento.mjs'

const defaultOpts = {
  modules: [],
  configFile: ''
}

const plugin = (opts = {}) => {
  opts = Object.assign({}, defaultOpts, opts)

  let modules = opts.modules || []

  // Load the modules from the config file if empty
  if (modules.length === 0 && opts.configFile.length > 0) {
    modules = getModulesFromFile(opts.configFile)
  }

  return {
    postcssPlugin: 'postcss-magento-import',
    AtRule: {
      magento_import: (node) => {
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
  }
}

plugin.postcss = true

export default plugin
