var colors = [
    {team: "mercedes", color: "#6CD3BF"},
    {team: "redbull", color: "#1E5BC6"},
    {team: "ferrari", color: "#ED1C24"},
    {team: "mclaren", color: "#F58020"},
    {team: "alpine", color: "#2293D1"},
    {team: "alphatauri", color: "#4E7C9B"},
    {team: "astonmartin", color: "#2D826D"},
    {team: "williams", color: "#37BEDD"},
    {team: "alfaromeo", color: "#B12039"},
    {team: "haas", color: "#B6BABD"}
];

function getColorByTeam(teamName){
    teamColor = "#FFFFFF";
    colors.forEach(function(team){
        if (new String(team.team).valueOf() == new String(teamName).valueOf()){
            teamColor = team.color;
        }
    });
    return teamColor;
}