# ES Modules 
https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015 


ES6 = ECMA Script 2015 
- classes
- ES modules
- iterators 
- for...of loops
- Python-style generators 
- arrow-function expression 
- let keyword
- const keyword
- binary data 
- typed arrays 
- new collections 
- promises
- number and math enhancements 
- reflection 
- proxies
- template literals for strings  

## About JS Modules 
- When linking to the main JS file, include the attribute `type="module"`
- A module file can use either the `.js` or the `.mjs` extension
  - V8 documentation recommends using `.mjs`
- Export the variable name out of a module file
- Import the variable into the file where it will be used
  ```javascript
    import { name } from './names.name.js';
  ```
- A server is required to load the html pages correctly. They cannot be served from `file://` as this throws a CORS error.

- Import statements: when to use { varName }
  - If a module is marked as the default export you don't use the {}
    - There can be only one default export per file.

  ```javascript
    // name.js
    export default let name = "tami';
    
    // main.js
    import name from './name.js';
  ```

  - If the module is a non-default export then use the {}

  ```javascript
      // name.js
    export let name = "tami';
    
    // main.js
    import { name } from './name.js';
  ```
- Modules use strict mode by default
- Modules are automatically deferred
- Modules are executed only once, even if they are imported into multiple files.
- The module's scope is limited to only the file in which it is imported
- You can provide an alias to the module at time of import 
```javascript
  import {name as myName } from './name/name.js';
```
- You can export multiple items out of a file and bundle them together as an  object.
```javascript
  import * as myModule from './big-file-of-modules.js';
```
##
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
