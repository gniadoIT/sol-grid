function fillDrivers(drivers) {
    names.forEach(function (name, index) {
        names = name.split(" ");
        drivers[index] = {fName: names[0], name: names[1], team: names[2], short: names[1].slice(0,3).toUpperCase()};
    });
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

function getTopProperty(id) {
    var element = document.getElementById(id),
        style = window.getComputedStyle(element);
    return style.getPropertyValue("top");
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