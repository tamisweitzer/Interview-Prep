
# webpack Introduction 

[max](https://www.youtube.com/watch?v=GU-2T7k9NfI)

## What is it? 
A tool to help manage your files
 - build tool for bundling files
 - minimized code
 - dev server with live reload 


## How to use it 

First initialize the app at the root
```javascript
  npm init
```

 ### What does `npm init` do? 
The `npm init` command initializes the application and adds a `package.json` file. 


Install `webpack` and `webpack-cli`

```javascript
   npm install webpack webpack-cli --save-dev
```

This will add a `node_modules` folder which will include `webpack`, `webpack-cli`, and all of their dependencies. 

### When to use `--save` vs `--save-dev`
- If the package should be bundled into your final project, then add the `--save` flag. 
- If the package is only used for development purposes, then use the `--save-dev` flag.


### Create a `src` and a `dist` folder

The `src` folder will container your starting javascript code.

The `dist` folder will contain the `index.html` file as well as the bundled files.


Import files into your `index.js` file

At the top of your `index.js` file, import in any files that need to be included at bundling time. 

<h4>index.js</h4>

```javascript
  import { myName } from './names/my-name.js';

  ...
```

In order to import an item from another script, the called script must include an export of that item. 
<h4>my-name.js</h4>

```javascript
  export let myName = "Tami";
```

Run `npx webpack`. 
This takes `src/index.js` and outputs it as `dist/main.js`. 
Make sure `index.html` is calling `dist/main.js`. 

## To Use webpack with a Config File 
Start as above 
- Initialize the app 
```javascript
npm init
```
- Install `webpack` and `webpack-cli`
```javascript
  npm install webpack webpack-cli --save-dev
```
- Create a `src` and a `dist` folder
- The `src` folder will contain the `index.js` file 
- The `dist` folder will contain `index.html` and the bundled `bundle.js` file
- Create the `webpack-config.js
  - The config file exports a JavaScript object that describes various configurations. 
  - The paths are written relative to the config file's location in the root.
 
```javascript
  let path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    }
  }
```


- In the `index.html` file, link to the `bundle.js` file. The bundle.js file will include your JavaScript code, CSS, and anything else you import into `index.js`. 
- In the `package.json` add a build script
```javascript
  "scripts": {
    "build": "webpack",
    "watch": "webpack watch"
  },
```
- Run the app
```javascript 
  npm run build
```

## webpack watch vs nodemon 

- `watch` rebuilds you code and refreshes the browser
- `nodemon` restarts a Node app but does not touch the browser. 

