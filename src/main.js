import { gsap } from "gsap";
//loading
const mainScreen = document.getElementById('main');
mainScreen.style.display = "none";
const menu = document.getElementById('menu-wrapper');
menu.style.display = "none";

const fillerPrompts = [
  "The best way to predict the future is to create it.",
  "The world is your oyster. Go out and explore it!",
  "Never stop exploring!",
  "The possibilities are endless.",
  "Go out and make your dreams a reality!",
  "The journey of a thousand miles begins with a single step.",
  "The world's largest ball of paint is in Alexandria, Indiana.",
  "The world's deepest lake is Lake Baikal in Siberia.",
  "The world's largest ball of yarn is in Minnesota.",
  "The world's largest producer of coffee is Brazil.",
  "The only thing that is constant is change.",
  "The world's largest ball of aluminum foil is in Ohio.",
  "The world's largest producer of tea is China.",
  "StreamScribe Made Cognet!",
  "streamscribe.vercel.app <-"
];

const randomQuote = fillerPrompts[Math.floor(Math.random() * fillerPrompts.length)];
console.log(randomQuote.fillerPrompts);
const filler = document.getElementById('fillerText');
filler.innerHTML= randomQuote;



//Pre Loader Percentage
const date = document.getElementById('date');

var counting = setInterval(function () {
	var loader = document.getElementById("percentage");
	var currval = parseInt(loader.innerHTML);
	var loadscreen = document.getElementById("loader-progress");
	loader.innerHTML = ++currval+'%';
	if (currval > 89){
		loader.innerHTML = 90+'%';
		if(window.jQuery) {
			//console.log('jquery loaded');
			loader.innerHTML = 95+'%';
			if(document.readyState == "interactive") {
				loader.innerHTML = 99+'%';
			}
			if(document.readyState == "complete") {
				//console.log('fully loaded!');
				clearInterval(counting);
				loader.innerHTML = 100+'%';
			  loader.textContent = "100% " +'Loaded!';
				setTimeout(function() {
				
				}, 880);
			}
		}
	} 
	
}, 20);

// Hide animation on load
$(window).on("load",function(){
  const loaderForce = document.getElementById("percentage");
   console.log('Loaded')
   loaderForce.textContent = "100% " +' '+'Loaded!';
   gsap.to("#loaderWrapper", { 
   opacity:0,
  });
  mainScreen.style.display = "block";

});

  

//getting date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

date.innerHTML = mm +' '+ dd +' '+ yyyy;

// end of loading and date :)

//https://cdn.leonardo.ai/users/c92ce122-c1d3-4cf1-9ecf-8aec73b7b43d/generations/8472f983-86c5-41a8-a830-2f0d833c3edb/variations/Default_A_mesmerizing_32k_rendering_of_mystical_plateau_under_3_8472f983-86c5-41a8-a830-2f0d833c3edb_1.jpg





