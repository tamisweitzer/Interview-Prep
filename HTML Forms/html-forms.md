# HTML Forms 

## Form Attributes
- action=""
- method=""
- name="" 

The action attribute tells the browser where to send the form data. The action value can be either an actual file, or a path. If a path, something like ExpressJS will tell the browser what to do when a POST request is sent to that path. 

```html
<form name="myForm" action="/processForm.php" method="POST">
    ...
</form>


<form name="myForm" action="/processForm" method="POST">
  ...
</form>
```

## POST vs GET

When to use a post request vs a get request. 
 - POST is used for posting to a server
 - GET is used to get information. You can navigate in your browser to a path that allows a get request, but doing the same to a path that accepts post requests will result in an error. 

