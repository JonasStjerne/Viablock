setInterval(function () {
    check();
}, 2000);
var playedToRecorded = 0;

function check() {
    var lastVideoProgress = JSON.parse(localStorage.lastVideoProgress);
    if (Number(lastVideoProgress.playedTo)) {
         playedToRecorded  = Number(lastVideoProgress.playedTo);
    }

    if (document.querySelectorAll('video.vjs-tech')[0].src && !document.querySelectorAll('video.vjs-tech')[0].src.startsWith("blob:") && document.querySelectorAll('span.ee5kzpm1')[0]?.innerHTML.replace(/\D/g,'') > 5) {
        playedToRecorded += 1;
        lastVideoProgress.playedTo = playedToRecorded;
        localStorage.lastVideoProgress = JSON.stringify(lastVideoProgress);
        location.reload();
    }
}