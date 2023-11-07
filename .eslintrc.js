module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	overrides: [
 		{
			files: ['tests/**/*.ts'],
			env: {node: true, jest: true},
		},
		{
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
			rules: {
				'@typescript-eslint/no-unsafe-assignment': 'off',
			},
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: true,
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [
		'import',
		'jsx-a11y',
		'@typescript-eslint',
		'react-hooks',
		'react',
	],
	rules: {
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {extensions: ['.js', '.ts', '.jsx', '.tsx']},
		},
	},
};
