

# Template to start a project using webpack 

## File Structure 
Create the following folders and files 

```
|- dist
  |- bundle.js
  |- index.html
|- src
  |- index.js
``` 

In the `index.html` file, link to the bundled js file. 

```html
  <script src="./dist/bundle.js"></script>
```


## Initiate the app, install webpack

In the terminal run:

```javascript
  npm init
  npm install webpack webpack-cli webpack-dev-server --save-dev
```

If bundling css, add the style loaders.
```javascript
  npm install style-loader css-loader --save-dev
```
### Import all stylesheets into one file 

Use `style.css` as the main stylesheet, and import all partial styles into it. 

<h4>src/style.css</h4>

```css
 @import url('./file1.css');
 @import url('./file2.css');
 @import url('./file3.css');
```

### Import all scripts into one file 

Use `index.js` as the main javascript file, and import all partial scripts into it. 


<h4>name.js</h4>

```javascript
  export let name = "Tami";
```

<h4>index.js</h4>

```javascript
  import { name } from './name';

  let helloworld = "Hello world, my name is " + name;

```




## Configure the package.json file

```javascript
  "scripts": {
    "build": "webpack", // processes file, no dev server
    "watch": "webpack watch", // auto updates on each Save
    "start": "webpack serve --open" // webpack + dev server
  },
```


## Configure the webpack config file 

```javascript 
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
      static: './dist'
    },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
```

## Run the build 

```javascript 
  npm run <watch|dev|start>
```