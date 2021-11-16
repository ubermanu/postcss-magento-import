import { test } from 'uvu'
import * as assert from 'uvu/assert'
import postcss from 'postcss'
import plugin from '../src/plugin.mjs'

test('should replace the magento_import node with the modules files', () => {
  const modules = ['Magento_Store']
  const instance = plugin({ modules })
  const res = postcss([instance]).process(
    '@magento_import "source/_module.css"'
  )
  assert.equal(res.css, '@import "../Magento_Store/source/_module.css"')
})

test.run()
