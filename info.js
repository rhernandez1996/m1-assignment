var photos = []; //Declare an empty array to store img element
var fileNames = []; //Declare an empty element to store file names
var imageList = []; //Declare an empty array to store html list that contain an image
var image; //Declare an empty variable to store the assembled list code
var imagefilenames = [];
var openList = "<li id='photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain a close list tag
var openCaptionTag = "<h1 id = 'names'>"; //Declare variable for list of names
var captions = [];
var captionTexts = [
  "Cooper",
  "Jack and Kane",
  "Campbell",
  "Babe",
  "Mike",
  "Jake",
  "Jane",
  "Lucy",
  "Saucy",
  "Booster",
];
var closeCaptionTag = "</h1>"; //Declare close of list names
var descriptionOpen = "<p class='description'(";
var descriptionClose = ")'>";
var closeDescriptionTag = "</p>";
var descTexts = [
  "Just Hanging",
  "Play Fight",
  "Love Soccer",
  "Smile Big",
  "I'm coming!",
  "Play Ball",
  "Afternoon Hang",
  "Let's Read",
  "Pure Joy!",
  "Scooting along",
];
var descriptions = [];

//Create loop to create 10 images starting with index of 0
for (var i = 0; i < 10; i++) {
  fileNames.push("animal" + (i + 1));
  photos.push("<img src='images/" + fileNames[i] + ".jpg'>"); //Assemble file name into image element and store in an array
  captions.push(openCaptionTag + captionTexts[i] + closeCaptionTag);
  descriptions.push(
    descriptionOpen +
      [i] +
      descriptionClose +
      descTexts[i] +
      closeDescriptionTag
  );
  image = openList + photos[i] + descriptions[i] + captions[i] + closeList; //Assemble image element from array with list, must open and close caption/description
  imageList.push(image); //Store(push) the assembled list codes into an array
}
//Display all six image codes stored in the array
document.getElementById("Pets").innerHTML = imageList.join(" "); //.join (" ") to get rid of ,

var closeBox = [];
var caption = [];
var captionText = [
  "Cooper",
  "Jack and Kane",
  "Campbell",
  "Babe",
  "Mike",
  "Jake",
  "Jane",
  "Lucy",
  "Saucy",
  "Booster",
];
var infoText = [
  "I love chewing on my tennis ball!",
  "I like to play fight with my brother",
  "Soccer is my favorite sport to play",
  "When someone calls me for a treat, I come with a smile on my face",
  "Running is my favorite thing to do in my free time",
  "Chasing after the ball is the most fun thing ever!",
  "Relaxing with my stuffed animal is so much fun",
  "I love listening to my mom read",
  "This is my favorite toy to play with!",
  "I love to play and chase a ball!",
];
var infoCloseText = "Click to close";
var closeInfo = document.getElementById("closeInfo");
closeInfo.addEventListener("click", hideInfo);

function displayInfo(which) {
  document.getElementById("info_box").style.visibility = "visible";
  document.getElementById("info_title").innerHTML = captionText[which];
  document.getElementById("info").innerHTML = infoText[which];
 
}
function hideInfo() {
  document.getElementById("info_box").style.visibility = "hidden";
   document.getElementById("closeInfo").innerHTML = infoCloseText;
}


//Lightbox

$(".pic > img").click(function () {
  var srcToCopy = $(this).attr("src");
  $("body").find(".imgsrc").attr("src", srcToCopy);
});
