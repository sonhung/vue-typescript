# Vue.js & Typescript

## Installation
1. Install Vue CLI 3.x
    ```
    npm install -g @vue/cli
    # OR
    yarn global add @vue/cli
    ```

2. Install the dependencies
    ```
    npm install
    # OR
    yarn install
    ```

## Architecture
This is the way I personally structure Vue.js projects. Feel free to modify it to fit your needs.
- :file_folder: `assets`: Contains all assets such as images or sound files.
- :file_folder: `components`: Contains all `Vue` components.
- :file_folder: `layouts`: Contains all `Vue`-Layouts that can be set in the `vue-router`.
- :file_folder: `models`: Contains all models needed for the business logic.
- :file_folder: `services`: Contains all services that fulfill web-requests.
- :file_folder: `store`: Contains all modules that are being used by the `vuex`-store.
- :file_folder: `translations`: Contains all translations as `.ts` files.
- :file_folder: `views`: Contains all views that are being used in the `vue-router`.


## Commands
### Compiles and hot-reloads for development
```
npm run serve
# OR
yarn run serve
```

### Compiles and minifies for production
```
npm run build
# OR
yarn run build
```

### Lints and fixes files
```
npm run lint
# OR
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
