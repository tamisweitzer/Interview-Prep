
# ExpressJS 

A fast, unopinionated. minimalist web framework for Node.js

To install

 ```javascript
 npm install express --save 
 ```
 
 
 <h4>expressapp.js</h4>
 
 ```javascript
  let express = require('express');
  let app = express();
  
  app.get('/', (res, req) => {
   res.send(`
   <form action="/answer" method="POST">
    <p>What color is the sky on a clear, sunny day?</p>
    <input name="skyColor" type="text" />
    <button type="submit>Submit answer</button>
   </form>
   `);
   }
  )
  
  app.post('/answer', (res, req) => {
   let correct = `<p>Congrats, ${req.body.skyColor} is the correct answer.</p>`;
   let incorrect = `<p>Sorry, ${req.body.skyColor} is not the correct answer.</p>`;
   let backToHome = `<p>Back to <a href="/">home</a>`;
   
   if (req.body.skyColor == 'blue') {
    res.send = ` 
      ${correct} 
      ${backToHome}
    `;
   } else {
      res.send = ` 
       ${correct} 
       ${backToHome}
     `;
     }
  });
  
  app.listen(3000);
 ```
 
 To run this file in the terminal: 
 ```javascript
  node expressapp 
 ```
 
 And then look in the browser to localhost:3000
 