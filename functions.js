/* Name and stuff */

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var opponents = 
    ["Lightening", "Combines", "Combines", "Combines",
     "Lightening", "Lightning", "Lightning", "Lightning",
     "Barn Raisers", "Barn Raisers", "Barn Raisers",
     "Sodbusters", "Sodbusters", "Sodbusters", 
     "Sodbusters", "(off)", "River Riders",
     "River Riders", "River Riders", "Big Dippers",
     "Big Dippers", "Big Dippers", "(off)",
     "Sodbusters", "Sodbusters", "Sodbusters",
     "Combines", "Combines", "Combines", "(off)",
     "(off)"
];

var gameLocation = ["away", "away", "away", "away", "home", "home",
    "home", "home", "home", "home", "home", "away",
    "away", "away", "away", "", "away", "away", "away",
    "away", "away", "away", "", "home", "home", "home",
    "home", "home", "home", "", ""
];

// displays the days of week values in cells 

function addcolumnheaders(){
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
        i++;
    }
}
//days of week ftion

function addCalendarDates(){
    var i = 1;
    var paragraphs = "";
    while (i <= 31){
        var tableCell = document.getElementById("08-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
        i++;
    }
}

function setUpPage(){
    addcolumnheaders();
    addCalendarDates();
    addGameInfo();
    
}
//places games at p in td

function addGameInfo(){
    var paragraphs = "";
    for (var i = 0;  i < 31; i++){
        var date = i + 1;
        var tableCell = document.getElementById("08-" + date);
        paragraphs = tableCell.getElementsByTagName("p");
        if (gameLocation[i] == "away"){
            paragraphs[1].innerHTML = "@ "
        } else {
            paragraphs[1].innerHTML = "vs "
        }
        paragraphs[1].innerHTML += opponents[i];
    }
}
window.addEventListener("load", setUpPage);
