function fillDrivers(drivers) {
    names.forEach(function (name, index) {
        names = name.split(" ");
        drivers[index] = {fName: names[0], name: names[1], team: names[2], short: names[1].slice(0,3).toUpperCase()};
    });
}

$(function(){
    fillDrivers(drivers);
    setTimeout(function () {
        $(".startpos").show(500);
    }, gridposinit * 1000);

    setTimeout(function () {
        $(".startpos").fadeOut(500);
    }, gridposlen * 1000);

    setTimeout(function () {
        $(".container").show(1500);
    }, gridpause * 1000);

    for (var i=1; i<11; i++){
        printRow(i);
    }
});

function printRow(rowNum){
    setTimeout(function () {
        if (rowNum == 1){
            $(".emptyTeam").fadeOut(500, function(){
                $(".teamLogo").fadeIn(500);
            });
        }
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
    $(id).fadeIn(500);
    var driver = getDriver(rowNum * 2 - 2);
    console.log(JSON.stringify(driver));
    $(id).html(driver.short);
}

function getDriver(gridPlace){
    var name = grid[gridPlace];
    var toReturn;
    drivers.forEach(function(driver){
        if (driver.name === name) {
           return toReturn = driver;
        }
    });
    return toReturn;
}

function doRight(rowNum){
    var id = countRight(rowNum);
    $(id).fadeIn(500);
    var driver = getDriver(rowNum * 2 - 1);
    $(id).html(driver.short);
}

function countLeft(rowNum) {
    var leftInt = (rowNum * 2 - 1);
    return "#" + leftInt;
}

function countRight(rowNum){
    var rightInt = rowNum * 2;
    return "#" + rightInt;
}

function move(){
    var top = getTopProperty("grid");
    var topInt = parseInt(top.slice(0, top.length - 2)) - 90;
    $("#grid").css("top", "" + topInt.toString() + "px");
}

function getTopProperty(id) {
    var element = document.getElementById(id),
        style = window.getComputedStyle(element);
    return style.getPropertyValue("top");
}

function hideRow(rowNum){
    $(countLeft(rowNum)).hide();
    $(countRight(rowNum)).hide();
}
