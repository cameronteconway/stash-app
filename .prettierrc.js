// @ts-check

module.exports = {
	endOfLine: "auto",
	tabWidth: 2,
	useTabs: true,
	printWidth: 80,
	semi: true,
	trailingComma: "all",
	jsxSingleQuote: true,
	singleQuote: false,
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				parser: "@typescript-eslint/parser",
				project: "tsconfig.json",
				sourceType: "module",
			},
		},
	],
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^types$",
		"^~/types/(.*)$",
		"^hooks/(.*)$",
		"^components/(.*)$",
		"^containers/(.*)$",
		"^assets/(.*)$",
		"",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderTypeScriptVersion: "5.0.0",
	plugins: ["prettier-plugin-tailwindcss"],
	pluginSearchDirs: false,
};
