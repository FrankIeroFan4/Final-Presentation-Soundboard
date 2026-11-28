//

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

$("#play-button3").click(function () {

    if(DKSCREAM.duration > 0 && !DKSCREAM.paused){
        DKSCREAM.pause()
        }
else { DKSCREAM.play()}

 });

$("#play-button4").click(function () {

    if(spongebob.duration > 0 && !spongebob.paused){
        spongebob.pause()
        }
else { spongebob.play()}

 });

 $("#play-button5").click(function () {

    if(heaven.duration > 0 && !heaven.paused){
        heaven.pause()
        }
else { heaven.play()}

    });

$("#play-button6").click(function () {

    if(alarm.duration > 0 && !alarm.paused){
        alarm.pause()
        }
else { alarm.play()}

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
