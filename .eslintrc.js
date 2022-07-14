module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prefer-rest-params': 0, // 关闭使用 rest 参数
    'prettier/prettier': 'error', // 被prettier标记的地方抛出错误
  },
}
