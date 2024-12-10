module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname, // Set this if you have a specific root directory
		project: "./tsconfig.json", // Adjust the path as necessary
		sourceType: "module",
	},
	extends: [
		"next",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:tailwindcss/recommended",
		"prettier",
	],
	plugins: ["@typescript-eslint", "prettier", "tailwindcss"],
	rules: {
		"no-console": "warn",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/naming-convention": "off",
		"no-useless-escape": "off",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "off",
		"no-case-declarations": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/consistent-type-imports": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"prettier/prettier": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": "error",
		"sort-imports": [
			"error",
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
		"import/newline-after-import": ["error", { exactCount: true, count: 1 }],
		"import/order": [
			1,
			{
				groups: ["external", "internal", "index", "builtin", "unknown"],
				"newlines-between": "always",
				distinctGroup: true,
				pathGroups: [
					{
						pattern: "react",
						group: "external",
					},
					{
						pattern: "next",
						group: "external",
					},
					{
						pattern: "sanity",
						group: "external",
					},
					{
						pattern: "components",
						group: "internal",
					},
					{
						pattern: "^[./]",
						group: "index",
					},
				],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
	},
	ignorePatterns: ["src/assets/css/*", "saleor/*"],
	env: {
		jest: true,
	},
	overrides: [
		{
			files: ["scripts/**/*.js"],
			parserOptions: {
				project: null, // Disable TypeScript parsing for JS files here
			},
		},
	],
};
