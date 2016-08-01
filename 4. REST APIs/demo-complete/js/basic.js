// Get jquery objects from DOM
var pageheader = $("#page-header")[0]; //note the [0], jQuery returns an object, so to get the html DOM object we need the first item in the object
var pagecontainer = $("#page-container")[0]; 
var imgSelector = $("#my-file-selector"); //You dont have to use [0], however this just means whenever you use the object you need to refer to it with [0].
var refreshbtn = $("#refreshbtn"); 
//Note: changing them all to [0] may prevent some errors when using functions linked to that variable.

// Register event listeners
imgSelector.on("change", function () {
    pageheader.innerHTML = "Just a sec while we analyse your mood..."; //good to let your user know something is happening!
    processImage(function (file) { //this checks the extension and file
        // Get emotions based on image
        sendEmotionRequest(file, function (emotionScores) { //here we send the API request and get the response
            // Find out most dominant emotion
            currentMood = getCurrMood(emotionScores);  //this is where we send out scores to find out the predominant emotion
            changeUI(); //time to update the web app, with their emotion!

            //Done!!
        });
    });
});

refreshbtn.on("click", function () {
    // Load random song based on mood
    alert("You clicked the button"); //can demo with sweetAlert plugin
});

function processImage(callback) {
    var file = imgSelector.get(0).files[0]; //get(0) is required as imgSelector is a jQuery object so to get the DOM object, its the first item in the object. files[0] refers to the location of the photo we just chose.
     var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file); //used to read the contents of the file
    }
    else {
        console.log("Invalid file");
    }
    reader.onloadend = function () {
        //After loading the file it checks if extension is jpg or png and if it isnt it lets the user know.
        if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
            pageheader.innerHTML = "Please upload an image file (jpg or png).";
        }
        else {
            //if file is photo it sends the file reference back up
            callback(file);
        }
    };
};

var Mood = (function () {       //Creating a Mood object which has the mood as a string and its corresponding emoji
    function Mood(mood, emojiurl) {
        this.mood = mood;
        this.emojiurl = emojiurl;
        this.name = mood;
        this.emoji = emojiurl;
    }
    return Mood;
}());

var happy = new Mood("happy", "http://emojipedia-us.s3.amazonaws.com/cache/a0/38/a038e6d3f342253c5ea3c057fe37b41f.png");
var sad = new Mood("sad", "https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji.png?9898922749706957214");
var angry = new Mood("angry", "https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Angry_Emoji.png?9898922749706957214");
var neutral = new Mood("neutral", "https://cdn.shopify.com/s/files/1/1061/1924/files/Neutral_Face_Emoji.png?9898922749706957214");

function getCurrMood(scores) {
    var currentMood;
    // In a practical sense, you would find the max emotion out of all the emotions provided. However we'll do the below just for simplicity's sake :P
    if (scores.happiness > 0.4) {
        currentMood = happy;
    }
    else if (scores.sadness > 0.4) {
        currentMood = sad;
    }
    else if (scores.anger > 0.4) {
        currentMood = angry;
    }
    else {
        currentMood = neutral;
    }
    return currentMood;
}

// Manipulate the DOM
function changeUI() {
    //Show detected mood
    pageheader.innerHTML = "Your mood is: " + currentMood.name;  //Remember currentMood is a Mood object, which has a name and emoji linked to it. 
    //Show mood emoji
    var img = document.getElementById("selected-img"); //getting a predefined area on our webpage to show the emoji
    img.src = currentMood.emoji; //link that area to the emoji of our currentMood.
    img.style.display = "inline"; //just some formating of the emoji's location

}

function sendEmotionRequest(file, callback) {
    $.ajax({
        url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d342c8d19d4e4aafbf64ed9f025aecc8");
        },
        type: "POST",
        data: file,
        processData: false
    })
        .done(function (data) {
            if (data.length != 0) { // if a face is detected
                // Get the emotion scores
                var scores = data[0].scores;
                callback(scores);
            } else {
                pageheader.innerHTML = "Hmm, we can't detect a human face in that photo. Try another?";
            }
        })
        .fail(function (error) {
            pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
            console.log(error.getAllResponseHeaders());
        });
}