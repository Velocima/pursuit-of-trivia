module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		curly: 'error',
		quotes: ['warn', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
		'no-unused-vars': ['error'],
		semi: ['error'],
		'no-use-before-define': 'error',
		'no-undef': 'error',
		'no-multi-spaces': 'warn',
		indent: ['warn', 'tab'],
	},
};
