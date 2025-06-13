// Declare variables below to save the different divs of your story.
let optionOne = document.querySelector (".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let title = document.querySelector(".title");
let storyOpening = document.querySelector('.story-opening');
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let next = document.querySelector(".option-three");
let nature = document.querySelector(".nature")
let clock = document.querySelector(".clock")
let ocean = document.querySelector(".ocean-three")
let congrats = document.querySelector(".option-two-end")
let pigTwo = document.querySelector(".pig-two")
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.



  pigTwo.addEventListener("click" , function(){
    storyOpening.style.display = "block";
    optionTwo.style.display = "none";
    optionTwoScreen.style.display = "none";
    optionTwo.style.display = "block";


    });

 optionOne.addEventListener('click', function(){
    optionOneScreen.style.display = "block";
    storyOpening.style.display  = "none";
    title.style.display = "none"; 
    optionTwo.style.display = "none";
    optionTwoScreen.style.display = "none";



 });

    nature.addEventListener('click', function(){
    optionOneEnd.style.display = "block";
    title.style.display = "none";
    storyOpening.style.display = "none";
    optionOne.style.display = "none";
    optionOneScreen.style.display = "none";
    optionTwo.style.display = "none";
    optionTwoScreen.style.display = "none";

ocean.addEventListener("click" , function(){ 

  
});
  


 });
 title.addEventListener("click" , function(){     
    title.style.display = "none";
    storyOpening.style.display = "none";
    optionOne.style.display = "block";
    optionOneScreen.style.display = "none";
    optionTwo.style.display = "block";
    optionTwoScreen.style.display = "none";

 });
 clock.addEventListener("click" , function(){ 
    storyOpening.style.display = "block" 
    title.style.display = "none";
    optionOneEnd.style.display ="none"
    optionOne.style.display = "block";
    optionTwo.style.display = "block"
    optionOneScreen.style.display = "none";

 });
 
 


 
 




















 
 optionTwo.addEventListener('click', function(){
 optionTwoScreen.style.display = "block";
 storyOpening.style.display = "none";
 title.style.display = "none";

 });
 ocean.addEventListener("click" , function(){
    optionTwoEnd.style.display = "block";
    storyOpening.style.display = "none"
    optionTwoScreen.style.display = "none"
    optionOne.style.display = "none";
    optionOneScreen.style.display = "none";
    optionOneEnd = "none";
 });
 

 
 optionTwoEnd.addEventListener("click", function(){
   optionOneEnd.style.display = "block";

 });

 

