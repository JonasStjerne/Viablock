setInterval(function () {
    check();
    console.log("Ran");
}, 2000);
var playedToRecorded = 0;

function check() {
    var lastVideoProgress = JSON.parse(localStorage.lastVideoProgress);
    if (Number(lastVideoProgress.playedTo)) {
         playedToRecorded  = Number(lastVideoProgress.playedTo);
        console.log("Last Time set to: " + playedToRecorded);
    }
    if (!document.getElementsByTagName("video")[0].src.startsWith("blob:")) {
        console.log("Ad detetcted. Setting playedTo to: " + playedToRecorded + " + 5");
        lastVideoProgress.playedTo = playedToRecorded + 5;
        localStorage.lastVideoProgress = JSON.stringify(lastVideoProgress);
        location.reload();
    }
}

// setTimeout(function(){
//     console.log(document.getElementsByTagName("video")[0].getAttribute("src"));
//     var time = localStorage.lastVideoProgress.playedTo;
//     // if (Number(time)) {
//     //     var lastTimeRecorded  = Number(time);
//     // }
//     // if (!document.getElementsByTagName("video")[0].src.startsWith("blob:")) {
//     //     localStorage.lastVideoProgress.playedTo = lastTimeRecorded + 5;
//     //     location.reload();
//     // }
// }, 10000);    