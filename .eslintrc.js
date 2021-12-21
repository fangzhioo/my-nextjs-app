module.exports = {
  extends: '@antfu',
  rules: {
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    curly: ['error', 'all'], // 必须使用 if(){} 中的{}
    quotes: ['error', 'single'], // 引号类型 `` '' ''
    'arrow-parens': 'off',
    'no-console': 'warn',
    'space-before-function-paren': 'off',
    'brace-style': 'off',
  },
}
