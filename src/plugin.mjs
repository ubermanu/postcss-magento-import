import { getModulesFromFile } from './magento.mjs'

const defaultOpts = {
  modules: [],
  phpConfigFile: ''
}

const plugin = (opts = {}) => {
  opts = Object.assign({}, defaultOpts, opts)

  let modules = opts.modules || []

  // Load the modules from the config file if empty
  if (modules.length === 0 && opts.phpConfigFile.length > 0) {
    modules = getModulesFromFile(opts.phpConfigFile)
  }

  return {
    postcssPlugin: 'postcss-magento-import',
    AtRule: {
      magento_import: (node) => {
        modules.forEach((moduleName) => {
          const params = node.params.replace(/["']/gm, '')
          node.cloneAfter({
            name: 'import',
            params: `"../${moduleName}/css/${params}"`,
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
