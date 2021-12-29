
Server side JavaScript environment.

Allows access to computer-y things: 
  - accessing and modifying computer files
  - handling server requests
  - run files

To enter the node environment, just enter `node` into the termail.

```node
  > node
  > 2+2
  4
  > let name = "Tami"
  > name 
  "Tami"
```

To exit the node environment
- `CTRL C` twice
- `.exit`

To run a file run node, first navigate to the directory, if necessary, and then call node, followed by the file name. As the default file type is JavaScript, you can omit the extension. 

<h4>helloworld.js</h4>

```node
  > node helloworld
  "Hello World"
```

## A Simple Node Server 

<h4>my-server.js</h4>

```node
  let http = require('http');
  let app = http.createServer(function(req, res) {
    res.end("Hello, thanks for coming");
  }); 
  
  app.listen(3000);
```

You can now run this file in the terminal;
```node 
   node my-server
```
Now the server up and is running. Go to the browser and load localhost:3000. 
You should see the response from the server. 
