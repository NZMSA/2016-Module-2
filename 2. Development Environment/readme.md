# 2. Development Environment
## Introduction
Before beginning any kind of development, you need to set up your environment with the appropriate
tools and software. In frontend web development, there are a huge range to choose from. For the
purposes of this course, we will be using the following:

### Visual Studio Code
Visual Studio Code is an open source, lightweight text editor with support for a wide variety of programming
languages and frameworks. Popular alternatives you may have heard of are Sublime and Atom.

### Node.js
Node.js is a javascript runtime environment. Although we won't be doing any Node.js development, it does
include a very popular package manager called **npm**. We will be using npm to install packages, including
BrowserSync and TypeScript. 

### BrowserSync
To test your website, you will need a webserver to host your files. Fortunately, you do not require a full-blown 
Apache webserver for the purposes of development and testing. BrowserSync allows you to quickly create
a webserver to test your website locally. Additionally, it supports live reloading. In other words, when you
change something, it will instantly reload the browser to reflect the changes. This is useful for testing different
styles, layouts, etc. 

## Learning Outcomes
* Setup a web development environment
* Install packages using Node.js
* Test website using BrowserSync

## Tutorial 1: Installation
### Setting up Visual Studio Code
Download and install Visual Studio Code on your machine here [Download Link](https://code.visualstudio.com/).

If you are having trouble installing it, the guide can be found [here](https://code.visualstudio.com/docs/setup/setup-overview).

### Setting up Node.js
Download and install Node.js from here [Download Link](https://nodejs.org/en/download/).

Once the installation is complete, open up Command Line (Windows) or Terminal (Mac) and run the following command:

```
npm
```

If everything is succesful, you should get an output similar to this. 
Note that if you are on Windows, you may need to restart your computer for this to work. 

![Succesful Node.js install](img/npm_command.png)

### Setting up BrowserSync
To setup BrowserSync, simply run the following command in Command Line (Windows):

```
npm install -g browser-sync
```

`npm install` calls the node package manager to install a package, `-g` tells it to install it globally so you can 
run it in any directory, and `browser-sync` is the name of the package. 

If you are using Mac, you may need to add `sudo` to the front of the command if you are getting permissiong errors:

```
sudo npm install -g browser-sync
```

If the installation was succesful, you should be able to run the following command:

```
browser-sync
```

and get the following output:

![Succesful BrowserSync install](img/browser_sync.png)

### Setting up TypeScript
The process is almost exactly the same as installing BrowserSync.
To setup TypeScript on Windows, simply run the following command in Command Line:

```
npm install -g typescript
```

Again if you are using Mac, you will need to add `sudo`:

```
sudo npm install -g typescript
```

If the installation was succesful, you should be able to run the following command:

```
tsc
```


and get the following output:
![Succesful TypeScript install](img/tsc.png)

## Tutorial 2: Testing your first project
We are going to run a simple website using our newly setup environment. 

1. Open Visual Studio Code
2. Expand the explorer tab on the side and click "Open Folder"
![](img/vsc_1.png)
3. Create a new folder and select the folder to open
4. Create a new file in the folder and name it index.html
![](img/vsc_2.png)
5. Paste in the following HTML code to the new file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Setup Succesful</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>

  <body>
    <h1>Congratulations</h1>
    <p>You have succesfully setup your development environment! Go forth and build.</p>
  </body>
</html>
```

6. Save the file. 
7. Open up the integrated terminal by going to View -> Integrated Terminal
![](img/vsc_3.png)
8. Run the following command:
```
browser-sync start -serve
```
9. Your browser should open up and the page should show. Try making a change to the html file, save it and
reload the page. To stop the server, go to the console, and press `ctrl+c`.
![](img/vsc_4.png)


### Extra for Experts
If you are using Mac , it is not recommended that you use `sudo` to install global packages. This was
used here for the purpose of simplicity.

To do fix this once and for all, follow this [tutorial](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

### Extra Learning Resources
* [What is npm?)](https://docs.npmjs.com/getting-started/what-is-npm)
* [BrowserSync documentation](https://www.browsersync.io/docs/command-line)