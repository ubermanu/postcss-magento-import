import pkg from './package.json'

export default {
  input: pkg.module,
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'auto'
  },
  external: ['fs', 'php-parser']
}
