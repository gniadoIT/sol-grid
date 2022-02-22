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
        if (rowNum > 3 && rowNum < 9){
            move();
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
    setDriverName("#leftDriver", driver);
    setPlace("#leftPlace", id);
    setLogo("#leftLogo", driver);
    setPhoto("#leftPhoto", driver);
    setTeamBg("#leftTeam", driver, rowNum === 1);
}

function doRight(rowNum){
    var id = countRight(rowNum);
    var driver = getDriver(rowNum * 2 - 1);

    placeOnGrid(id, driver);
    setDriverName("#rightDriver", driver);
    setPlace("#rightPlace", id);
    setLogo("#rightLogo", driver);
    setPhoto("#rightPhoto", driver);
    setTeamBg("#rightTeam", driver, rowNum === 1);
}

function move(){
    var top = getTopProperty("grid");
    var topInt = parseInt(top.slice(0, top.length - 2)) - 90;
    $("#grid").css("top", "" + topInt.toString() + "px");
}

function hideRow(rowNum){
    $(countLeft(rowNum)).hide();
    $(countRight(rowNum)).hide();
}

