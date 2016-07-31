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
Please also ensure you have your code up to date from the before module [4. REST APIs](https://github.com/NZMSA/2016-Module-2/tree/master/4.%20REST%20APIs)

## Tutorial 1: Basics of TypeScript

### Types

With TypeScript we can now give variables types, so that we can avoid passing the wrong type and record the intended type.
```
var isDone: boolean = false;
var count: number = 42;
var name: string = "Deep Sea Dive";
```

If we do not the type we can assign it to `any`, this can happen when getting dynamic content. This also allows us to still work with any existing JavaScript.
```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 
```

And if your not familar there is the type `void` which means nothing. This is good when functions do not return anything and just do something.
```
function warnUser(): void {
    alert("This is my warning message");
}
```

In this sample giving the function of type non-String will cause an error when trying to compile to JavaScript
```
function greeter(person: string) {
    return "Hello, " + person;
}

var user = [0, 1, 2];

document.body.innerHTML = greeter(user); 
```
Look out for the errors, as the JavaScript file will still be created but in this case TypeScript will warn you.
```
greeter.ts(7,26): Supplied parameters do not match any signature of call target
```

### Interfaces
If you dont know what an interface is, it is basically a structural type that can have properties/fields (`firstName`, `lastName`) and can have methods (`sayHello`).
In TypeScript, two types are compatiable if their internal structure is compatiable. This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.

```
interface Person {
    firstName: string;
    lastName: string;
    sayHello(): void;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```

### Classes
TypeScript supports class-based object oriented programming. Unlike interfaces these are concrete and can be instantiated to form "objects" while interfaces cannot be.
```
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");
```
We can then call the method `greet()` onto our `greeter` object.
```
var message: string = greeter.greet();
```

Of course, one of the most fundamental patterns in class-based programming is being able to extend existing classes to create new ones using inheritance. In this example it is done by extends, we can also utilize inheritance by implemnting an interface.
```
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}
```

`super()` is used when we want to call the parent's class method instead. Here we called Animal's constructor inside of the Rhino's constructor.


## Tutorial 2: Compilation of TypeScript to JavaScript

### 1. Create a tsconfig.json file
This defines the TypeScript project settings such as the compiler options and the files that should be included.

`File --> New File --> tsconfig.json`


Our `tsconfig.json` file will look like this,
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

### 2. Compile TypeScript to JavaScript

For demonstration purpose we will just have a simple TypeScript file, `helloPerson.ts`
```
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Deep Sea";

document.body.innerHTML = greeter(user);       
```

At the command line, run the TypeScript compiler:
```
tsc helloPerson.ts    
```

This will generate the file `helloPerson.js`.

It is obvious this can be quite tedious so

### 3. Creating a task to compile TypeScript files to JavaScript

Open Command Palette with `Ctrl+Shift+P`

Type in `Configure Task Runner`, press Enter to select it. 
This shows a list of templates for tasks you can choose from.

Select `TypeScript - tsconfig.json`. This will create a `tasks.json` file in the workspace .vscode folder.

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

This is just running `tsc` on our files. 

### 4. To run the build task
To test our task is running, first delete the `helloPerson.js` generated from step 2.

As this is the only task in the file, you can execute it by simply pressing `Ctrl+Shift+B` (Run Build Task). At this point you will see an additional file show up in the file list `helloPerson.js`.

So each time you want to recompile your JavaScript files from your TypeScript due to changes, `Ctrl+Shift+B`

## Tutorial 3: Compilation of TypeScript to JavaScript by watching
Its a bit tedious to Run Build Task (`Ctrl+Shift+B`) each time you want to implement your new change.

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

To review a reason why a build may have failed:

* This would show up in the output window (which can be opened using `Ctrl+Shift+U`) and selecting Tasks in the output view dropdown.
* You can click on the icon below to get a list of the problems and navigate to them.

<PICTURE>


## Tutorial 5: Converting our JavaScript to TypeScript
Dump and explain differences. dont need to go line by line

## Tutorial 5: Involving soundcloud

We'll create a new file called `musichandler.ts`
### 1. Adding Song Class
In this file, we'll add a `Song` class to store information about the songs we will play on soundcloud.
```
class Song {
    title: string;
    url: string;
    constructor(songtitle : string, songurl : string) {
        this.title = songtitle;
        this.url = songurl;
    }
}
```
### 2. Adding Playlist Class
We will also add a Playlist class to the same file. This will hold a collection of songs for each different mood. From this playlist we can then grab a random song depending on the `mood` given
```
export class Playlist {
    happy: Song[];
    sad: Song[];
    angry: Song[];

    constructor() {
        this.happy = [];
        this.sad = [];
        this.angry = [];
    }

    addSong(mood : string, song : string) : void {
        if (mood === "happy") {
            this.happy.push(song);
        } else if (mood === "sad") {
            this.sad.push(song);
        } else if (mood === "angry") {
            this.angry.push(song);
        } // do a default one as well
    }

    getRandSong(mood : string) : Song {
        if (mood === "happy" || mood === "neutral") {
            return this.happy[Math.floor(Math.random() * this.happy.length)];
        } else if (mood === "sad") {
            return this.sad[Math.floor(Math.random() * this.sad.length)];
        } else if (mood === "angry") {
            return this.angry[Math.floor(Math.random() * this.angry.length)];
        } 
    }
}
```
In this case an `export` tag is added as we want to use this class outside this file.

### 3. Initializing playlist with songs. 

We then create a `playlist` object and populate it with various songs for different modes.
```
var myPlaylist : Playlist = new Playlist();

export function init() : void {
    // init playlist
    myPlaylist.addSong("happy", new Song("Animals", "https://soundcloud.com/martingarrix/martin-garrix-animals-original"));
    myPlaylist.addSong("happy", new Song("Good feeling", "https://soundcloud.com/anderia/flo-rida-good-feeling"));
    myPlaylist.addSong("happy", new Song("Megalovania", "https://soundcloud.com/angrysausage/toby-fox-undertale"));
    myPlaylist.addSong("happy", new Song("On top of the world", "https://soundcloud.com/interscope/imagine-dragons-on-top-of-the"));
    myPlaylist.addSong("sad", new Song("How to save a life", "https://soundcloud.com/jelenab-1/the-fray-how-to-save-a-life-7"));
    myPlaylist.addSong("sad", new Song("Divenire", "https://soundcloud.com/djsmil/ludovico-einaudi-divenire"));
    myPlaylist.addSong("sad", new Song("Stay High", "https://soundcloud.com/musaradian/our-last-night-habitsstay-hightove-lo"));
    myPlaylist.addSong("angry", new Song("When they come for me", "https://soundcloud.com/heoborus/when-they-come-for-me-linkin-park"));
    myPlaylist.addSong("angry", new Song("One Step Closer", "https://soundcloud.com/user1512165/linkin-park-one-step-closer"));
    myPlaylist.addSong("angry", new Song("Somewhere I belong", "https://soundcloud.com/mandylinkinparkmusic2xd/somewhere-i-belong"));
    // init soundcloud
    initSC();
}
```

### 4. 
Given our mode we can then display the song and then use soundcloud to play the song
```
export function loadSong(currentMood : string) : void {
    var songSelected : Song = myPlaylist.getRandSong(currentMood.name);
    var track_url : string = songSelected.url;

    // change this to jquery
    document.getElementById("track-name").innerHTML = "Have a listen to: " + songSelected.title;
    document.getElementById("track-name").style.display = "block";
    document.getElementById("musicplayer").style.display = "block";
    loadPlayer(track_url);
}
```
### 4. Setting up soundcloud and using the player

```
var myClientId = "*****PUT YOUR SOUND CLOUD ID HERE****";

function initSC() {
    // init soundcloud
    SC.initialize({
        client_id: myClientId
    });
}
function loadPlayer(trackurl : string) {
    SC.oEmbed(trackurl, { auto_play: true }).then(function (oEmbed) {
        let div = document.getElementById("musicplayer");
        div.innerHTML = oEmbed.html;
    });
}
```

- Soundcloud, :D stuff - after khoda

### Tools
* [CodePen](http://codepen.io) - Experimenting with HTML, CSS and JS snippets. 

### Extra Learning Resources
* [TypeScript](https://www.typescriptlang.org/)

