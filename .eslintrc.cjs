/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	env: {
		es2022: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022
	},
	plugins: ['@typescript-eslint']
};
