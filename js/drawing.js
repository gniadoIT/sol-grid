
function placeOnGrid(id, driver) {
    $(id).html(driver.short);
    $(id).fadeIn(1000);
}

function setDriverFirstName(id, driver){
    $(id).fadeOut(500, function(){
        $(id).removeAttr("class");
        $(id).addClass("driverFirstName");
        $(id).addClass(driver.team);
        $(id).attr("style", "color: " + driver.color);
        driverName = driver.fName.charAt(0).toUpperCase() + driver.fName.slice(1);
        $(id).html(driverName);
        $(id).fadeIn(500);
    })
}

function setDriverLastName(id, driver){
    $(id).fadeOut(500, function(){
        $(id).html(driver.name.toUpperCase());
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
        $(id).attr("src","");
        loadPhoto(driverName, id);
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
        } else {
            $(id).attr("src", "img/drivers/shade.png");
            $(id).addClass("shade");
        }
    };
    xhr.open("HEAD", url);
    xhr.send();
}


function setTeamBg(id, driver, side){
    $(id).fadeOut(500, function(){
        $(id).removeAttr("class");
        $(id).addClass(side + "Driver");
        $(id).addClass("bg_" + driver.team + "_" + side);
        $(id).fadeIn(500);
    });
}

function setTeamBorder(id, driver, side){
    $(id).fadeOut(500, function(){
        $(id).attr("src", "img/borders/" + driver.team + side + ".png");
        $(id).fadeIn(500);
    });
}

function hidePlace(place) {
    $(place).hide();
    $(place + "n").hide();
}

function showPlace(place){
    $(place + "n").show();
}