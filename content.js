setInterval(function () {
    check();
    console.log(document.querySelectorAll('.e3bxrhk0')[0]?.innerHTML.replace(/\D/g,''));
}, 2000);
var playedToRecorded = 0;

function check() {
    var lastVideoProgress = JSON.parse(localStorage.lastVideoProgress);
    if (Number(lastVideoProgress.playedTo)) {
         playedToRecorded  = Number(lastVideoProgress.playedTo);
         console.log(playedToRecorded);
    }

    if (document.querySelectorAll('video.vjs-tech')[0].src && !document.querySelectorAll('video.vjs-tech')[0].src.startsWith("blob:") && document.querySelectorAll('.e3bxrhk0')[0]?.innerHTML.replace(/\D/g,'') > 60) {
        playedToRecorded += 5;
        console.log("Played to +2:" + playedToRecorded);
        lastVideoProgress.playedTo = playedToRecorded;
        localStorage.lastVideoProgress = JSON.stringify(lastVideoProgress);
        location.reload();
    }
}
// && document.querySelectorAll('.eihsxth0')[0]?.innerHTML.replace(/\D/g,'') > 5