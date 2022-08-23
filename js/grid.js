$(function(){
    fillDrivers(drivers);
    showStartPositions();
    hideStartPositions();
    showGrid();
    printRows();
});

function printRows() {
    for (var i = 1; i < 11; i++) {
        printRow(i);
    }
}

function printRow(rowNum){
    setTimeout(function () {
        doLeft(rowNum);
        doRight(rowNum);
        if (rowNum > 3 && rowNum < 9) {
            move("columnOdd");
            move("columnEven");
            showRow(rowNum+2);
        }
        if (rowNum > 3 && rowNum < 9) {
            hideRow(rowNum - 3);
        }
    }, (init + (rowNum-1)*pause)*1000);
}

function doLeft(rowNum){
    var id = countLeft(rowNum);
    var driver = getDriver(rowNum * 2 - 2);
    placeOnGrid(id, driver);
    setDriverFirstName("#leftFirstName", driver);
    setDriverLastName("#leftLastName", driver);
    setPlace("#leftPlace", id);
    setLogo("#leftLogo", driver);
    setPhoto("#leftPhoto", driver);
    setTeamBg("#leftPanel", driver, "left");
    setTeamBorder("#leftTeamBorder", driver, "_left");
    setTimeout(function(){
        $(id).removeClass("transparent");
        $(".leftDriver").removeClass("transparent");
        $(".leftPlace").removeClass("transparent");
    }, 500);
}

function doRight(rowNum){
    var id = countRight(rowNum);
    var driver = getDriver(rowNum * 2 - 1);
    placeOnGrid(id, driver);
    setDriverFirstName("#rightFirstName", driver);
    setDriverLastName("#rightLastName", driver);
    setPlace("#rightPlace", id);
    setLogo("#rightLogo", driver);
    setPhoto("#rightPhoto", driver);
    setTeamBg("#rightPanel", driver, "right");
    setTeamBorder("#rightTeamBorder", driver, "_right");
    setTimeout(function(){
        $(id).removeClass("transparent");
        $(".rightDriver").removeClass("transparent");
        $(".rightPlace").removeClass("transparent");
    }, 500);
}

function move(id){
    var top = getTopProperty(id);
    var topInt = parseInt(top.slice(0, top.length - 2)) - 90;
    $(id).css("top", "" + topInt.toString() + "px");
}

function hideRow(rowNum){
    hidePlace(countLeft(rowNum));
    hidePlace(countRight(rowNum))
}

function showRow(rowNum){
    showPlace(countLeft(rowNum));
    showPlace(countRight(rowNum));
}



