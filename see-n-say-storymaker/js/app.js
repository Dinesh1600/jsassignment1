// Assignment 1 | COMP1073 Client-Side JavaScript


// Groupmembers :DINESH DINESH(200522543), SAHIL SAHIL(200530610)





// Create a new speechSynthesis object
var synth = window.speechSynthesis;

var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.getElementsByClassName('Speakbutton');
// var button1 = document.getElementsByClassName("button1")
// var button2 = document.getElementsByClassName("button2")
// var button3 = document.getElementsByClassName("button3")
// var button4 = document.getElementsByClassName("button4")
// var button5 = document.getElementsByClassName("button5")

var resultParagraph = document.getElementById("text");   //variable to store paragraph elemt to update sentence
var storyParagraph = document.getElementById("story");   //variable to store paragraph elemt to get story

var resulttext="";    //variable to store and update a random sentence from arrays

//arrays for generating random sentences 
const array1 = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];
const array2 = ["sat on","ate","danced with","saw","doesn't like","kissed"];
const array3 = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
const array4 = ["goat","monkey","fish","cow","frog","bug","worm"];
const array5 = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

// array for storing the stories
const stories=["In a small town, a young girl named Lily discovered a mysterious key on her way home from school. Intrigued, she embarked on a journey to find the lock that it belonged to. She searched high and low, exploring secret passageways and talking to locals. After days of searching, Lily stumbled upon an old, hidden door in the attic of her house. With a trembling hand, she inserted the key into the lock, and the door creaked open, revealing a room filled with long-forgotten treasures.","One stormy night, an unexpected visitor knocked on the door of Mr. Thompson's house. To his surprise, it was a talking cat seeking shelter from the rain. The cat introduced itself as Oliver and explained that it possessed magical powers. Intrigued, Mr. Thompson invited Oliver inside. Over time, the talking cat became an integral part of the family, bringing laughter and joy with its witty remarks and amusing antics","Sarah, a struggling writer, received an antique pen from her grandmother on her 25th birthday. Little did she know that the pen held magical powers. Whenever she used it to write, her words came to life. Sarah began crafting beautiful stories and characters, and her books became instant bestsellers. However, the pen also had a dark side—it brought her deepest fears to life. Sarah had to learn to control her imagination and use the pen responsibly.","In a busy city, a lonely girl named Mia stumbled upon an overgrown vacant lot hidden behind a rusty gate. Determined to uncover its secrets, she spent hours clearing away weeds and debris. As she transformed the neglected space into a vibrant garden, word spread, and soon neighbors joined her in this communal endeavor. The garden became a sanctuary, bringing the community together and filling their lives with beauty and hope.","In a bustling city, a young girl named Maya felt lost and out of place. One day, she stumbled upon a wounded pigeon in the park. Moved by compassion, she nursed the bird back to health. As the pigeon recovered, an unlikely friendship blossomed between Maya and the bird named Percy.","A curious boy named Jack discovered an ancient map leading to a hidden enchanted forest. With his loyal dog as his companion, Jack ventured into the mystical woods. There, he encountered talking animals, encountered magical plants, and discovered the true power of nature. The forest taught him important lessons about harmony, respect, and the delicate balance of the natural world"];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
//function for button 1-5 to generate random text for arrays and update the text of <p>tag to show it
function button1function(){
	let randomNumber = Math.floor(Math.random()*array1.length);
	resultParagraph.textContent=""
	resulttext+=array1[randomNumber]+" "
	resultParagraph.textContent=resulttext;
}
function button2function(){
	let randomNumber = Math.floor(Math.random()*array2.length);
	resultParagraph.textContent="";
	resulttext+=array2[randomNumber]+" ";
	resultParagraph.textContent=resulttext;
}
function button3function(){
	let randomNumber = Math.floor(Math.random()*array3.length);
	resultParagraph.textContent="";
	resulttext+=array3[randomNumber]+" ";
	resultParagraph.textContent=resulttext;
}
function button4function(){
	let randomNumber = Math.floor(Math.random()*array4.length);
	resultParagraph.textContent="";
	resulttext+=array4[randomNumber]+" ";
	resultParagraph.textContent=resulttext;
}
function button5function(){
	let randomNumber = Math.floor(Math.random()*array5.length);
	resultParagraph.textContent="";
	resulttext+=array5[randomNumber]+" ";
	resultParagraph.textContent=resulttext;;
}

//function to clear the generated random text and set it to its initial text
function clearparagraph(){
	resultParagraph.textContent="Your text will appear here";
	resulttext=""
}

//function to speak the generated text 
function speaking(){
	textToSpeak=resultParagraph.textContent;
	speakNow(textToSpeak);
}

//function to get a random story,display and then speaking the text
function generateStory(){
	let randomNumber = Math.floor(Math.random()*stories.length);
	storyParagraph.textContent=stories[randomNumber];
	speakNow(stories[randomNumber])
}
//function to reset the generated story
function reset(){
	storyParagraph.textContent=""
	
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.onclick = function() {
// 	// textToSpeak = resultParagraph.textContent;
// 	speakNow(textToSpeak);
// }
