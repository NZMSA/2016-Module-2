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