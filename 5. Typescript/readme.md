# 1. 5. TypeScript
## Introduction
Up til now you have been developing in JavaScript to get an understanding on web development. We want to introduce you guys to TypeScript. We believe it would help with a lot of common errors that can arise from developing in JavaScript. Those familiar with typed languages like Java, C# will have your classes back.

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. (Superset means it behaves just like JavaScript but with extra stuff) TypeScript follows similar syntax to JavaScript with the introduction of static checking and code refactoring. You basically write in TypeScript but whats actually being run in is the generated JavaScript. This JavaScript can then still be run on any browser. 

Other supersets that exist are [CoffeeScript](http://coffeescript.org/), [Need more]

For this course, we will be going over the basics of TypeScript, converting our current code into TypeScript and finishing our website. 

### Disadvantages of JavaScript
* No type checking, is dynamically checked at runtime
```
var number = 10.2;
number = "String value";
```
* No intellisense [Need to confirm]
```
var number = 10.2;
numbr = -1; // undefined
```


### Benefits of TypeScript
* Object-oriented programming (OOP): work with classes and interfaces
* Optional static typing, able to specify the type of the variable 
* => Enable IDEs to provide a richer environment for spotting common errors as you type the code
* => Helps with autocompletetion of your code, with types it can help suggest more appropriate variables to pass in to a function call


## Learning Outcomes
* Learn about the basics of TypeScript 
* Learn how to watch our TypeScript files to compile to JavaScript
* Converting our website to TypeScript
* Finishing our website in TypeScript

## Resources
### Bootcamp Content
* [Slide Deck](http://link.com)
* [Video](http://link.com)


### Installation of TypeScript
If you haven't already got TypeScript installed, please refer back to [2. Development Environment](https://github.com/NZMSA/2016-Module-2/tree/master/2.%20Development%20Environment) under Tutorial 1, Setting up TypeScript.

## Tutorial 1: Basics of TypeScript

## Tutorial 2: Compilation of TypeScript to JavaScript

1. Create a tsconfig.json file
This defines the TypeScript project settings such as the compiler options and the files that should be included.

File --> New File --> tsconfig.json


Our tsconfig.json file will look like this,
```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
    }
}
```

Now when you create a .ts file as part of the project we will offer up rich editing experiences and syntax validation.

* target,  
* module,
* sourceMap, 

2. Compile TypeScript to JavaScript

For demonstration purpose we will just have a simple TypeScript file, HelloPerson.ts
```
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Deep Sea";

document.body.innerHTML = greeter(user);       
```

At the command line, run the TypeScript compiler:
```
tsc greeter.ts    
```

This will generate the file HelloPerson.js.

It is obvious this can be quite tedious so

3. Creating a task to compile TypeScript files to JavaScript

Open Command Palette with Ctrl+Shift+P

<PICTURE>

Type in Configure Task Runner, press Enter to select it. 
This shows a list of templates for tasks you can choose from.

<PICTURE>

Select TypeScript - tsconfig.json. This will create a tasks.json file in the workspace .vscode folder.

```
{
    // See http://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-p", "."],
    "showOutput": "silent",
    "problemMatcher": "$tsc"
}
```

This is just running "tsc" on our files. 

4. To run the build task
To test our task is running, first delete the HelloPerson.js generated from step 2.

As this is the only task in the file, you can execute it by simply pressing Ctrl+Shift+B (Run Build Task). At this point you will see an additional file show up in the file list HelloPerson.js.

So each time you want to recompile your JavaScript files from your TypeScript due to changes, Ctrl+Shift+B

## Tutorial 3: Compilation of TypeScript to JavaScript by watching
Its a bit tedious to Run Build Task (Ctrl+Shift+B) each time you want to implement your new change.

Here is how "Watching" the files can be of great help.

Run the following command in xxx

```
tsc *.ts --watch
```

This is going to monitor the folder for any changes in our TypeScript files and compile them behind the scenes.

## Tutorial 4: Reviewing Build Issues
Sometimes builds don't go that smoothly

For example this line of code in typescript will cause an error. (Our intellisense should tell us this!)
```

```

To review a reason why a build:

1. This would show up in the output window (which can be opened using Ctrl+Shift+U) and selecting Tasks in the output view dropdown.
2. You can click on the icon below to get a list of the problems and navigate to them.

<PICTURE>


## Tutorial 5: Converting our JavaScript to TypeScript
Dump and explain differences. dont need to go line by line

## Tutorial 5: Finish implementation 
- Soundcloud, :D stuff - after khoda

### Tools
* [CodePen](http://codepen.io) - Experimenting with HTML, CSS and JS snippets. 

### Extra Learning Resources
* [TypeScript](https://www.typescriptlang.org/)

