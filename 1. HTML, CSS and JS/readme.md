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
* Know basic HTML and CSS constructs to get you started to make a one pager
* Outcome 2
* Understand what JavaScript is and when to use it.
* Create and call JavaScript functions
* Use JavaScript to display output
* Understand how to create objects in JavaScript

## Demo code

# Part 1
## 1. HTML Structure.

First, let's create an empty HTML page. It will contain the head and the body.
```
<!DOCTYPE html>

<head>

</head>

<body>

</body>

</html>
```
## 2. Setting the title of the page
Inside the head tags, we will type in the page title.

If you run index.html in a browser, you will see that it's title is now "Page Title".
```
<head>
    <title>Page Title</title>
</head>
```
## 3. Adding a comment

Inside the body,we will type in a comment. This will not be displayed on the web page.

Comments may be useful for developers reading the code.
```
<body>

    <!--This is a comment-->

</body>
```
## 4. Adding a Heading.
Below the comment, we will add the heading "My First Heading".

h1 is the most important heading. We can also use other headings like h2, h3, h4, h5, and h6, with h6 having the least importance.
```
    <!--This is a comment-->
    <h1>My First Heading</h1>
```
## 5. Adding a Paragraph

Below the heading, write the following paragraphs:
```
    <p>My first paragraph</p>

    <p>This is <br> a para<br>graph with line breaks</p>
```

The first paragraph is displayed as one paragraph. The sencond paragraph contains line breaks because "br" tells the browser to start on a new line.

## 6. Whitespace is ignored.
Add the following below the paragraphs:
```
    This
    Is
    All
    Displayed
    On
    One
    Line
```
The text are all displayed on one line since HTML ignores whitespace.

## 7. Making a Hyperlink.

Add a link to microsoft.com below the set of text.

```
"<a href="http://www.microsoft.com">This is a link to Microsoft</a>"
```

The href attribute tells the browser where to go. In this instance, the link takes you to microsoft.com. The text in between the a tags are the displayed text in the browser.

## 8. Ordered lists

In order to use an ordered list, we need to type in the ol tags.

Inside those tags, we need to add a li for each element of that list.

The text inside the li tags is displayed as the text for each list element.

Since this is an ordered list, the list elements are automatically formatted with numbers.

Below the hyperlink add the following:
```    
    <h2>Ordered List</h2>

    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
```
## 9. Unordered Lists
Unordered lists are look like ordered lists and are coded like ordered lists as well.

The difference is that instead of formatting the list with numbers to show order, the list is formatted using bullet points by default.

In terms of coding, we use ul instead of ol. The rest of the code remains the same.

Below the ordered list, add the following:
```
    <h2>Unordered List</h2>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
```
## 10. Adding an image

Below the unordered list, add the following:
```    
<img src="http://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
```
The src attribute tells the browser which image to use. The alt attribute tells the browser what text to display in case the image isn't found.

# Part 2

## 1. Create an external stylesheet

In the same folder as your index.html file, create a new file called "styles.css".

To do this, right click on an empty space, click New > Text Document. Then name it "styles.css".

## 2. Add an external stylesheet.

Inside the head tags of index.html, add the following line.
```
<link rel="stylesheet" href="styles.css">
```
The rel attribute specifies the relationship between the HTML page and the CSS page.
The href contains the location of the CSS file. In this case, it is stored locally, in the same folder as index.html, and is named "styles.css".

There will be no noticeable change seen in the HTML file, since we have not yet added any styles to "styles.css".

## 3. Add styles to the CSS file.

Open styles.css in your text editor. Then add the following line:
```
h1 {
	color: yellow;
	font-size: 60px;
}
```
Refresh your site. The h1 heading at the very top should now have a font color of yellow and a font size of 60px.

# Part 3
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
* [CodePen](http://codepen.io/pen/) - Experimenting with HTML, CSS and JS snippets.


### Extra Learning Resources
* [HTML (W3 Schools)](http://www.w3schools.com/html/html_intro.asp)
* [CSS (W3 Schools)](http://www.w3schools.com/css/css_intro.asp)
* [JS (W3 Schools)](http://www.w3schools.com/js/js_intro.asp)
