# Vue 3 App (Vite)

This project has been migrated from webpack (vue-cli) to Vite.

## Project setup

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run dev
```

### Compiles and minifies for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

### Lint and fix files

```sh
npm run lint
```

## Migration Notes

This project was migrated from webpack-based vue-cli to Vite. Key changes:

1. **Build Tool**: Changed from webpack to Vite
2. **Configuration**: `vue.config.js` replaced with `vite.config.js`
3. **Entry Point**: `index.html` moved to project root
4. **Scripts**: Updated npm scripts to use Vite commands
5. **Dependencies**: Removed webpack-related dependencies, added Vite and @vitejs/plugin-vue

## Benefits of Vite

- ⚡️ Lightning fast cold server start
- ⚡️ Instant hot module replacement (HMR)
- ⚡️ Fast builds
- 📦 Optimized production builds with Rollup
