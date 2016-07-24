# 1. HTML, CSS and JS
## Introduction
[intro goes here]

You will also learn JavaScript. It is 
a programming language of the web that helps add interactivity to 
your web pages.
It is useful since it is supported by all browsers and many web 
development tools like Node.js and frameworks like AngularJS or ReactJS
utilise JavaScript.
## Learning Outcomes
* Outcome 1
* Outcome 2
* Understand what JavaScript is and when to use it.
* Create and call JavaScript functions
* Use JavaScript to display output
* Understand how to create objects in JavaScript

## Demo code

### JavaScript Code

1. #### Displaying output

Since we are using CodePen, we simply need to add the JavaScript 
code inside the "JS" area. Type in the following JS code:

```
document.write("Hello World");
```

This line of code will add the text "hello world" directly on the HTML page.
Since CodePen adds our JavaScript code at the bottom of the HTML page, we see 
the text "hello world" at the bottom of the page. 

#### Other Ways to Display Output:

There are many other ways to display output. Feel free to replace the above 
code with the following code to see them in action.
* Alerts display a message box with a message of your choice. This output
method may be obtrusive for the user so use alerts modestly.
```
alert("Hello World");
```
In this case, the message was "Hello World".
* We can also select an element and change the contents between its tags.
```
document.getElementById("boxModel").innerHTML = "Hello World";
```
In this case, we are getting the element with the Id of "boxModel". 
Then we are changing the HTML code inside its tags, so it displays "Hello 
World".
* We can also display output to the console
```
console.log("Hello World");
```
After typing this, click on the "console" button on the buttom-left part 
of the screen to see the output. 

You can also press F12 and click on the "Console" tab to open 
the console.

2. #### Creating Functions

A JavaScript function is a block of code designed to perform a particular task.

The syntax for a function in JavaScript is as follows:
```
function name(parameter1, parameter2) {
        code to be executed
} 
```

We call the function a certain name, and give it 2 inputs named parameter1
 and parameter2. We can add more parameters if needed. And then, it
 executes the code inside the curly braces. A value may be returned by 
 the function.

 For our webpage, we will create a function that shows the date when
 a button is clicked. Here is the code for the function:
 ```
function show() { 
    document.getElementById("demoButton").innerHTML=Date();
} 
```

When the show function is called, it sets the content of the element 
with the id of "demoButton", to the current date.

3. #### Calling Functions

Once you are finished typing the show() function, you will notice that 
nothing changes on your page. This is because you haven't called it.

We will call the show function when a button is clicked, so we need to 
create this button. In the HTML area, type in the following code:
```
<button id="demoButton" onclick="show()">Demo Button</button>
```
Here, we created a button element. We typed in the show()
function as the value of the onclick attribute. This means that when the 
onclick event is triggered, which means when the button is clicked, the
show() function is called.

[Other Common HTML Events](http://www.w3schools.com/js/js_htmldom_events.asp)
## Resources
### Bootcamp Content
* [Slide Deck](http://link.com)
* [Video](http://link.com)

### Tools
* [CodePen](http://codepen.io) - Experimenting with HTML, CSS and JS snippets. 

### Extra Learning Resources
* [HTML (W3 Schools)](http://www.w3schools.com/html/html_intro.asp)
* [CSS (W3 Schools)](http://www.w3schools.com/css/css_intro.asp)
* [JS (W3 Schools)](http://www.w3schools.com/js/js_intro.asp)