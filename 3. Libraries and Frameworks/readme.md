# 3. Libraries and Frameworks (Frontend)

## Introduction
Now that you're familiar with basic web dev and package managers, we'll dive into the concept of Libraries and Frameworks.

#### Libraries
Libraries can be viewed as a collection of implementations (eg. functions, objects...) to be reused across multiple projects.
In the realm of Javascript, some third party examples include:
* jQuery
* underscore.js
* WinJS
* backbone.js
* socket.io  

Using libraries saves time and allows for more consistency across projects.

#### Frameworks
"Framework" on the otherhand does not have a concrete definition.  
A simplified view of a framework is a generic architecture with default behavior that may have inversion of control (IoC).

Or in other words: your code "runs" a library, but a framework "runs" your code.  
Take note that some "frameworks" simply behave as a collection of libraries whereas others have strictly defined program flow.

Examples include:
* Bootstrap
* jQuery mobile
* QUnit
* AngularJS
* Meteor

In this section we will be using one of the most popular combination for frontend development: jQuery & Bootstrap.

---

## Learning Outcomes

* Acquire jQuery+Bootstrap via NPM
* Implement basic functionality with jQuery
* Implement basic styling with Bootstrap

## Bootcamp Resources
* [Slide Deck](https://1drv.ms/p/s!AhUTdgNym7JMjCsUaAueyBvhTcLp)
* [Video](https://youtu.be/DvMjEPxsH-g)

## Prerequisites:
* Node.js
* Browser-sync globally installed

---
  
## Acquiring jQuery + Bootstrap
Although there are several ways to acquire jQuery + Bootstrap such as using CDNs (content delivery networks), direct download, or various package managers; this section will acquire their NPM modules.  

If you are using Visual Studio Code, you can open up the terminal/command-line by `CTRL` + `~`  or alternatively `View > Integrated Terminal`.  
Ensure you are in your desired working directory and have initialised your project (`npm init`)

### Acquire jQuery
In the terminal type:
```
npm install jquery --save
```
The command `npm install jquery` fetches the jquery module and `--save` saves it in your pacakge.json file as a dependency.
You should see a folder in your directory called `node_modules` with a jquery subfolder.

### Acquire Bootstrap
In the terminal type:
```
npm install bootstrap --save
```
The command `npm install bootstrap` fetches the bootstrap module and `--save` saves it in your pacakge.json file as a dependency.
You should see a folder in your directory called `node_modules` with a bootstrap subfolder.

---

## Setting up a sample site
In your working directory:
* create a new file and name it `index.html`
* create two subfolders and name them `js` and `css`

### Creating sample html
Open up the `index.html` file and paste this code:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Moodify</title>
        <!--Boostrap's CSS-->
        <link rel="stylesheet" type="text/css" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
        <!--Custom CSS-->
        <link rel="stylesheet" type="text/css" href="./css/style.css">
    </head>
    <body>
        <div class="container" id="page-container">
            <h1 id="app-name">
                <span class="glyphicon glyphicon-headphones"></span> moodify
            </h1>
            <!-- NB: glyphicon halflings are generally not free, but the developer made them free in bootstrap -->

            <h2 id="page-header">
                Get song recommendations based on your mood.
            </h2>
            <div class="btn-wrapper">
                <label class="btn btn-info" for="my-file-selector">
                    <input id="my-file-selector" type="file">
                    Upload a picture of you
                </label>
                <button type="button" class="btn btn-info" id="refreshbtn">Another song please</button>
            </div>
        </div>
        <!-- 
            NB: You generally do not want to publically expose the server structure (eg. ./node_modules/...)
            will sort that in later bootcamps with task-runners and the like.
            For now this is just a demonstration.

            Alternatively can use CDNs for bootstrap/jquery
        -->

        <!--jQuery Script-->
        <script src="./node_modules/jquery/dist/jquery.min.js"></script>
        <!--Bootstrap Script-->
        <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <!--Custom Script-->
        <script src="./js/basic.js"></script>
    </body>
</html>
```
Note the `id` for each section. This will come later when using jQuery to manipulate the DOM, as well as custom styling.

Also note the Bootstrap classes used:
* `btn btn-info`
* `glyphicon glyphicon-headphones`
* `container`

You can go even further by using the grid system to have unique proportions for different screen sizes.  
The minified bootstrap/jquery files are sourced directly from the node modules. In subsequent bootcamps you will see how to have them all relatively addressed without exposing server structure.

### Adding some style
In the subfolder `css`:
* create a new file and name it `style.css`

This file is where we will add in our custom theming and styles.

Add this css code:
```css
html { 
    background: url("http://theme.dima-lab.com/okab/images/landing-page-iphone/blurred-home-bg.jpg") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

body {
    color: white;
    background-color: transparent;
}

h1#app-name {
    font-size:84px;
}

button#refreshbtn {
    display:none;
}

img#selected-img{
    width:150px;
    height:150px;
    padding:20px;
    display:none;
    margin: 0 auto;
}

h2#page-header {
    padding-top:20px;
    padding-bottom:20px;
}

body #page-container {
    margin-top: 150px;
    text-align: center;
    margin-bottom: 40px;
}

.btn-wrapper {
    padding: 20px 0;
}

input#my-file-selector {
    display:none;
}
```
Notice how you are also able to specify different browser behaviour using the prefixes:
* `-o-` for Presto based (Opera -NB: deprecated, moved to Webkit based)
* `-moz-` for Gecko based (Firefox)
* `-webkit-` for Webkit based (Chrome/Safari)

Note: if you have multiple css files, the order in which you include them in the html file matters as they are "cascading" and will override.

### Adding some functionality
In the subfolder `js`:
* create a new file and name it `basic.js` (standard naming would be `main.js`)

This file is where we will add in our main website logic using jQuery.

Add this javascript code:
```js
// Get jquery objects from DOM
var imgSelector = $("#my-file-selector");
var refreshbtn = $("#refreshbtn");
var pageheader = $("#page-header");
var pagecontainer = $("#page-container");

// Register event listeners
imgSelector.on("change", function () {
    pageheader.html("Just a sec while we analyse your mood...");
    setTimeout(changeUI, 2000); //some external call would happen here, add 2 sec delay to simulate
                                //can implement jquery loading plugin
});
refreshbtn.on("click", function () {
    // Load random song based on mood
    alert("You clicked the button"); //can demo with sweetAlert plugin
});

// Manipulate the DOM
function changeUI() {
    //Show detected mood
    pageheader.html("Your mood is: ...");

    //Display song refresh button
    refreshbtn.css("display", "inline");

    //Remove offset at the top
    pagecontainer.css("marginTop", "20px");
};
```
Note: We use `$` as a shorthand for the `jQuery` object. If you have conflicts with other libraries using `$`, you can disable with: `jQuery.noConflict()` at the beginning of the script.

We first start by traversing the DOM (document object model) and acquiring the elements as jQuery **objects**.  
NB: To extract the equivalent elements, you can append `.get(0)` to the selector.
Prepending `#` or `.` would select by id or by class name respectively. Having no prefix would select by element tag.

Next we add in listeners for specific events, namely:
* `change` will trigger when a file has been uploaded to the input field
* `click` will trigger when the second button has been clicked

NB: You can add multiple events in one go with jQuery's `.on("event1 event2 event3...", function(){})`

Afterwhich we create a function to restyle the page after the uploaded file has been processed. Our example changes the pageheader html, makes the second button visible, then readjusts the margins.

### Testing the site
As mentioned in previous sections, we will test the site with browser-sync.

Open up the terminal and type:
```
browser-sync start --server --files "**/*"
```
We call the browser-sync global module and start a server that watches all files and subdirectories (`**/*` compared to just `*`)

Congratulations, you have setup your very own modern website with jQuery and Bootstrap!

### Completed Example
For reference, the complete solution to this demo has provided and can be found [here](demo-complete). You will need to clone or download this whole repository as a zip and open the demo-complete folder using Visual Studio Code. To run, just use the standard `browser-sync start --server --files "**/*"` command.

## Extra Learning Resources
jQuery:
* [w3schools tutorials](http://www.w3schools.com/jquery/default.asp)
* [official documentation](http://api.jquery.com/)  

Bootstrap:
* [w3schools tutorials](http://www.w3schools.com/bootstrap/default.asp)
* [official site](http://getbootstrap.com/getting-started/)
