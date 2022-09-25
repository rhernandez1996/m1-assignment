var display = [];
var openList = "<div id = info_box>";
var closeList = "</div>"
var closeinfo = document.getElementById("closeInfo");
closeinfo.addEventListener("click", hideInfo);
var closeBox [];
var openInfoList = "<div id='info_box'>"; //Declare a variable to contain open list tag
var closeInfoList = "</div>"; //Declare a variable to contain a close list tag
var openTitleTag = "<div id=info_title>"; //Declare variable for list of names
var caption [];
var title = ["Cooper", "Jack and Kane", "Campbell", "Babe", "Mike", "Jake", "Jane", "Lucy", "Saucy", "Booster"];
var closeTitleTag ="</div>";
var openInfoTag = "<div id=info>";
var description [];
var info = ["I love chewing on my tennis ball!","I like to play fight with my brother", "Soccer is my favorite sport to play", "When someone calls me for a treat, I come with a smile on my face","Running is my favorite thing to do in my free time", "Chasing after the ball is the most fun thing ever!", "Relaxing with my stuffed animal is so much fun", "I love listening to my mom read", "This is my favorite toy to play with!","I love to play and chase a ball!"];
var closeInfoTag ="</div>";


function displayInfo(which) {
    document.getElementById("info_box").style.visibility = "visible";
    caption.push(openTitleTag + title[i] + closeTitleTag);
    description.push(InfoOpenTag + info[i] + closeInfoTag);  
    display = openInfoList + title[i] + info[i]  + closeInfoList;
}
function hideInfo() {
  document.getElementById("info_box").style.visibility = "hidden";
}