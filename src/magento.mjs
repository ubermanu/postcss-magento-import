import fs from 'fs'
import PhpParser from 'php-parser'

const parser = new PhpParser({
  parser: {
    extractDoc: false,
    php7: true
  },
  ast: {
    withPositions: false
  }
})

/**
 * Read the config file and return a list of enabled modules.
 *
 * @param {Buffer|string} config
 * @return {*[]}
 */
export function getModules(config) {
  const ast = parser.tokenGetAll(config)
  const modules = []
  let moduleName = ''

  ast.forEach((node) => {
    if (Array.isArray(node)) {
      if (node[0] === 'T_CONSTANT_ENCAPSED_STRING') {
        moduleName = node[1].replace(/'/g, '')
      }
      if (node[0] === 'T_LNUMBER' && node[1] === '1') {
        modules.push(moduleName)
        moduleName = ''
      }
    }
  })

  return modules
}

export function getModulesFromFile(file) {
  return getModules(fs.readFileSync(file))
}
