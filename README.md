## React App
Recommended OS: `Linux`, `OS X`.
You can test this app in `Windows` but you maybe need install `linux sub system` or use `git bash` to improve compatility and execute scripts.

### Available Commands
---
* `start` - Build and serve application with `watch` in files
* `build` - Only build application
----

### Available Scripts
Before anything you need install all dependencies:

```bash
npm install
```

#### Development
```bash
npm start
```
This command will run development steps into source code and serve with Browserify.

#### Production
```bash
npm run build
```
This command will run production steps (minify, uglify and no source map) and will not serve the app.
To test you can serve the app as your want in your server or use `serve` like the stand alone flow.


#### Documentation Standards

[References](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/)

#### Other Informations

- Error
```
Error: ENOSPC: System limit for number of file watchers reached, watch
```
- Solution
```
https://github.com/gatsbyjs/gatsby/issues/11406#issuecomment-458769756
```
