import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { getModulesFromFile } from '../src/magento.mjs'

test('should read a config.php file and return a list of modules', () => {
  const modules = getModulesFromFile('tests/fixtures/config.php')
  assert.is(modules.length, 342)
  assert.is(modules[0], 'Magento_AdminAnalytics')
  assert.is(modules[1], 'Magento_Store')
})

test.run()
