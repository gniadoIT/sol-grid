
function placeOnGrid(id, driver) {
    $(id).html(driver.short);
    $(id).fadeIn(1000);
}

function setDriverName(id, driver){
    $(id).fadeOut(500, function(){
        $(id).html(driver.fName + "<br />" + driver.name.toUpperCase());
        $(id).fadeIn(500);
    })
}

function setPlace(id, gridId){
    $(id).fadeOut(500, function () {
        $(id).html(gridId.slice(1,gridId.length));
        $(id).fadeIn(500);
    });
}

function setLogo(id, driver){
    $(id).fadeOut(500, function () {
        $(id).attr("src", "img/logos/" + driver.team + ".png");
        $(id).fadeIn(500);
    });
}

function setPhoto(id, driver){
    var driverName = removePolish(driver.name.toLowerCase());
    $(id).fadeOut(500, function () {
        $(id).attr("src", "img/drivers/shade.png");
        $(id).addClass("shade");
        loadPhoto(driver.team + "_" + driverName, id);
        $(id).fadeIn(500);
    });
}

function loadPhoto(fileName, id) {
    const xhr = new XMLHttpRequest();
    var url = "img/drivers/" + fileName + ".png";
    xhr.onload = () => {
        if (xhr.status == 200) {
            $(id).attr("src", url);
            $(id).removeClass("shade");
        }
    };
    xhr.open("HEAD", url);
    xhr.send();
}


function setTeamBg(id, driver, firstRow){
    if (firstRow){
        $(".emptyTeam").fadeOut(500, function(){
            $(id).attr("src", "img/teams/" + driver.team + ".png");
            $(id).fadeIn(500);
        });
    } else {
        $(id).fadeOut(500, function(){
            $(id).attr("src", "img/teams/" + driver.team + ".png");
            $(id).fadeIn(500);
        });
    }
}

function hidePlace(place) {
    $(place).hide();
    $(place + "n").hide();
}