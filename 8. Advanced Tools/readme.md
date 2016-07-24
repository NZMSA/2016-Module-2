# 8. Advanced Tools
## Introduction
Now that you have a basic understanding of the languages behind web apps (HTML, CSS, JS), you can begin building your own! However, you’ll eventually find that as the complexity of the website increases, maintainability also becomes more difficult. Fortunately, there are plenty of other developers out there who have been through this and as a result, have built tools that can make this process very simple. Here are some of the popular ones out there: 

### Scaffolding Tools  
**Examples**: Yeoman

**Purpose**: Create a starter project for common scenarios.

**Description**: A lot of the time, the web app you are making has common elements with other web apps out there. Why create the basic files yourself? Scaffolding tools do 80% of the plumbing work for you in terms of setting up the basic project structure, adding the basic files and adding some common libraries. Save yourself some time and let the experts get you started.

### Package Managers 
**Examples**: Node Package Manager (npm), Bower

**Purpose**: To make managing third party packages easier. 

**Description**: The golden rule of coding is to never reinvent the wheel if you don’t have to. In any project, you will be making use of 3rd party libraries. Package managers allow you to install, update and maintain dependencies.

### Task Runners 
**Examples**: gulp, grunt 

**Purpose**: To automate build tasks 

**Description**: Before you ship your web app, there are usually a few things you need to do. Optimise images, check your Js files are error free (linting), compiling your typescript code, optimising your file sizes (minifying), and making sure Jim doesn’t rip off your JavaScript code you spent a long time writing (obfuscating/uglifying). These are tedious processes and you’re better off spending that time on developing. Task Runners allow you to automate all of these processes, using a simple script.

### HTML Preprocessors / Template Engines
**Examples**: Razor (ASP.NET), Jade, Handlebars

**Purpose**: Build HTML views using templates.

**Description**: As you move beyond simple single page apps, you’re going to end up with a lot of repetitive markup scattered everywhere, making it a nightmare to maintain. What happens if you want to edit that footer on the bottom of the page? You don’t want to have to go and edit every single HTML page containing it. Template engines help solve these problems by allowing you to efficiently reuse HTML code. They also allow you to populate pages dynamically from the server, using clean, readable, markup embedded in the HTML (or another markup language in some cases like jade).

### CSS Preprocessors
**Examples**: SASS, LESS

**Purpose**: Simplify styling

**Description**: Same convenience as HTML proprocessors, for CSS. 

## Learning Outcomes
* Understand the tools out there that make your life as a developer easier
* Know when and why to use these

## Resources
### Bootcamp Content
* [Slide Deck](http://link.com)
* [Video](http://link.com)

### Tools
* [Yeoman](http://yeoman.io/) - Best scaffolding tool
* [Gulp.js](http://gulpjs.com/) - Modern task runner
* [Jade](http://jade-lang.com/) - Popular template engine

### Extra Learning Resources
* [Learn to Code Advanced HTML&CSS - Preprocessors](http://learn.shayhowe.com/advanced-html-css/preprocessors/)
