//

let counter=0;

$("#butt-button").click( function(){
    //what to do when the button is clicked
    counter = counter + 1;
    $("#butt-button").html("I was shamed " + counter + " times");

});

// jQuery returns a collection; [0] gets the audio element itself.
let sound = $("#sound")[0];

// .click(...) runs this function when Play is clicked.
$("#play-button").click(function () {

    if(sound.duration > 0 && !sound.paused){
        sound.pause()
     }
else { sound.play()}
    //sound.play(); // Start or resume from the current position.
});

$("#play-button2").click(function () {

    if(aminor.duration > 0 && !aminor.paused){
        aminor.pause()
     }
else { aminor.play()}
    //sound.play(); // Start or resume from the current position.
});


// These events report the audio's state, not just a button click.
$("#sound").on("playing", function () {
    $("#status").text("Playing.");
});
$("#sound").on("pause", function () {
    $("#status").text("Not playing.");
});
$("#sound").on("ended", function () {
    $("#status").text("Finished.");
});
