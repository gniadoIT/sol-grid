function showStartPositions() {
    setTimeout(function () {
        $(".startpos").show(500);
    }, gridposinit * 1000);
}

function hideStartPositions() {
    setTimeout(function () {
        $(".startpos").fadeOut(500);
    }, gridposlen * 1000);
}

function showGrid() {
    setTimeout(function () {
        $(".container").show(1500);
        $("#leagueName").html(leagueName + "<br />");
        $(".roundNo").html(roundName);
    }, gridpause * 1000);
    setTimeout(function () {
        $("#leagueName").removeClass("transparent");
        $(".roundNo").removeClass("transparent");
    }, (gridpause*1000)+1500);

}