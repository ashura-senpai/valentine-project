# React + TypeScript + Vite - 👉 [PROJECT RESULT HERE](https://d6zdkr-5173.csb.app/index.html)

> Hey! If you liked my project and are in need of a help to make one too, you can find me on social media, all of them are on my profile here on Github. Send me a message, maybe I can help a little.
>
> CHECK OUT FULL DETAILS ON THE CODESANDBOX. You will need to install some dependencies if the project fail in build the set up.
>
> Try this on the terminal, you will clean the cache package and install again:
> ```js
> rm -rf node_modules
> npm install
> ```
>
> If you need to update your version, it will show on the terminal how do you do that.
>
> This project is already an existing project that I saw on the internet, but I found it very complicated and difficult to do and find, in addition to the fact that it was very difficult for someone to support me. I also adapted it a little in my style, I hope you like it.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
