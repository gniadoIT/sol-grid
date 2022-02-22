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
        $(".roundName").html(roundName);
        $(".borderup").show(500);
        $(".borderleft").show(500);
    }, gridpause * 1000);
}