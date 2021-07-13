var video = document.getElementById("video");
var oVideo = document.getElementById("ovideo")

var clipNumString = document.getElementById("clipnum");
var countString = document.getElementById("count");
var numVids = 30;

var startButton = document.getElementById("startbutton");
var part = 1;

var oPlayButton = document.getElementById("oplaybutton")
var oNextButton = document.getElementById("onextbutton")

var playButton = document.getElementById("playbutton");
var nextButton = document.getElementById("nextbutton");
var backButton = document.getElementById("backbutton");
var restartButton = document.getElementById("restart");

let clipNum = 1;

if (clipNum == 1) {
    backButton.disabled = true;
}

// Start Button

function recordNew() {
    globalThis.part = document.getElementById("parts").value;
}

startButton.addEventListener("click", function() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("overview").style.display = "block";
});

// oPlay Button

oPlayButton.addEventListener("click", function() {

    oVideo.currentTime = (part - 1) * 30;
    oVideo.play();
    oNextButton.disabled = true;

    setTimeout(function(){
        oVideo.pause();
        oNextButton.disabled = false;
    },30000);

});

// oNext Button

oNextButton.addEventListener("click", function() {
    document.getElementById("overview").style.display = "none";
    document.getElementById("video-interface").style.display = "block";
    document.getElementById("whichpart").innerHTML = "Part " + part;
});

// Play Button

playButton.addEventListener("click", function() {

    video.currentTime = ((part - 1) * 30) + clipNum - 1;
    video.play();

    setTimeout(function(){
        video.pause();
    },1000);

});

// Next Button

nextButton.addEventListener("click", function() {

    if (clipNum == numVids) {
        video.style.display = "none";
        document.getElementById("buttons").style.display = "none";
        document.getElementById("whichpart").style.display = "none";
        document.getElementById("count").innerHTML = "Finished"
        document.getElementById("finished").style.display = "block";
    }
    else {
        clipNum++;
        countString.innerHTML = "Clip " + clipNum + " of " + numVids

        if (clipNum > 1) {
            backButton.disabled = false;
        }

        if (clipNum == numVids) {
            nextButton.innerHTML = "Finish";
            nextButton.classList.add("finish");
        }
    }
});

// Back Button

backButton.addEventListener("click", function() {

    clipNum--;
    countString.innerHTML = "Clip " + clipNum + " of " + numVids

    if (clipNum == 1) {
        backButton.disabled = true;
    }

    if (clipNum < numVids) {
        nextButton.innerHTML = "Next";
        nextButton.classList.remove("finish");
    }
})

// Restart Button

restartButton.addEventListener("click", function() {
    location.reload()
})