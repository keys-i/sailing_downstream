export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
        jest: true,
      },
    },
    plugins: {
      jest: await import("eslint-plugin-jest"),
      prettier: await import("eslint-plugin-prettier"),
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "es5",
        },
      ],
    },
  },
  {
    files: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
    plugins: {
      jest: await import("eslint-plugin-jest"),
    },
    rules: {
      ...(await import("eslint-plugin-jest")).configs.recommended.rules,
    },
  },
];
