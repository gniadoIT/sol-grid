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
    $(id).html(driver.short);
    var driverName = removePolish(driver.name.toLowerCase());

    $(id).fadeIn(1000);
    $("#leftDriver").fadeOut(500, function () {
        $("#leftDriver").html(driver.fName + "<br />" + driver.name.toUpperCase());
        $("#leftDriver").fadeIn(500);
    });
    $("#leftPlace").fadeOut(500, function () {
        $("#leftPlace").html(id.slice(1,id.length));
        $("#leftPlace").fadeIn(500);
    });
    $("#leftLogo").fadeOut(500, function () {
        $("#leftLogo").attr("src", "img/logos/" + driver.team + ".png");
        $("#leftLogo").fadeIn(500);
    });
    $("#leftPhoto").fadeOut(500, function () {
        $("#leftPhoto").attr("src", "img/drivers/shade.png");
        loadPhoto(driver.team + "_" + driverName, "#leftPhoto");
        $("#leftPhoto").fadeIn(500);
    });
    if (rowNum == 1){
        $(".emptyTeam").fadeOut(500, function(){
            $("#leftTeam").attr("src", "img/teams/" + driver.team + ".png");
            $("#leftTeam").fadeIn(500);
        });
    } else {
        $("#leftTeam").fadeOut(500, function(){
            $("#leftTeam").attr("src", "img/teams/" + driver.team + ".png");
            $("#leftTeam").fadeIn(500);
        });
    }
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
    $(id).fadeIn(1000);
    var driver = getDriver(rowNum * 2 - 1);
    $(id).html(driver.short);
    var driverName = removePolish(driver.name.toLowerCase());

    $("#rightDriver").fadeOut(500, function(){
        $("#rightDriver").html(driver.fName + "<br />" + driver.name.toUpperCase());
        $("#rightDriver").fadeIn(500);
    });
    $("#rightPlace").fadeOut(500, function(){
        $("#rightPlace").html(id.slice(1,id.length));
        $("#rightPlace").fadeIn(500);
    });
    $("#rightLogo").fadeOut(500, function(){
        $("#rightLogo").attr("src", "img/logos/" + driver.team + ".png");
        $("#rightLogo").fadeIn(500);
    });
    $("#rightPhoto").fadeOut(500, function(){
        $("#rightPhoto").attr("src", "img/drivers/shade.png");
        loadPhoto(driver.team + "_" + driverName, "#rightPhoto");
        $("#rightPhoto").fadeIn(500);
    });
    if (rowNum == 1){
        $(".emptyTeam").fadeOut(500, function(){
            $("#rightTeam").attr("src", "img/teams/" + driver.team + ".png");
            $("#rightTeam").fadeIn(500);
        });
    } else {
        $("#rightTeam").fadeOut(500, function(){
            $("#rightTeam").attr("src", "img/teams/" + driver.team + ".png");
            $("#rightTeam").fadeIn(500);
        });
    }

}

function fadeOutStuff(ids){
    ids.forEach(function(id){
        $(id).fadeOut(500);
    })
}


function loadPhoto(fileName, id) {
    const xhr = new XMLHttpRequest();
    var url = "img/drivers/" + fileName + ".png";
    xhr.onload = () => {
        if (xhr.status == 200) {
            $(id).attr("src", url);
        }
    };
    xhr.open("HEAD", url);
    xhr.send();
}

function removePolish(str){
    str = replace(str, "ą", "a");
    str = replace(str, "ć", "c");
    str = replace(str, "ę", "e");
    str = replace(str, "ł", "l");
    str = replace(str, "ó", "o");
    str = replace(str, "ń", "n");
    str = replace(str, "ś", "s");
    str = replace(str, "ż", "z");
    str = replace(str, "ź", "z");
    return str;
}

function replace(text, char, rep){
    return text.split(char).join(rep);
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
