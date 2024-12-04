import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import unicornPlugin from "eslint-plugin-unicorn";

export default [
  {
    name: "app/files-to-lint",
    files: ["src/**/*.{ts,vue}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  ...pluginVue.configs["flat/recommended"],

  ...vueTsEslintConfig(),

  {
    plugins: {
      vue: pluginVue,
      unicorn: unicornPlugin,
    },
    rules: {
      quotes: ["error", "double", { avoidEscape: true }],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["UPPER_CASE", "camelCase"],
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "enumMember",
          format: ["PascalCase", "UPPER_CASE"],
        },
        {
          selector: "parameterProperty",
          format: ["camelCase"],
        },
        {
          selector: "method",
          format: ["camelCase"],
        },
        {
          selector: "function",
          format: ["camelCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },
      ],

      "no-empty-function": ["error", { allow: [] }],
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: false,
            kebabCase: true,
            pascalCase: false,
            snakeCase: false,
          },
          ignore: [/\.vue$/],
        },
      ],

      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: true,
          ignores: ["index.vue"],
        },
      ],

      "@typescript-eslint/no-explicit-any": "error",

      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],

      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],

      "vue/multi-word-component-names": "off",
    },
  },
];
