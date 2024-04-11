console.log("page loaded...");

function PlayVideo(vid) {
    vid.play();
}

function PauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}