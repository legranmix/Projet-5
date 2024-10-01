
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


		
let counter_image = 0;

const banner = document.querySelector("#banner")

const dots = document.querySelector(".dots");
if (dots.children.length === 0) 

for (let i = 0; i< slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");	
	dots.appendChild(dot);	
	
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
}

if (!document.querySelector(".arrow_left")) {
const img_left = document.createElement("img");
img_left.src = "assets/images/arrow_left.png";
img_left.alt = "flèche gauche";
img_left.classList.add("arrow ","arrow_left");
banner.appendChild(img_left);
}

if (!document.querySelector(".arrow_right")) {
const img_right = document.createElement("img");
img_right.src = "assets/images/arrow_right.png";
img_right.alt = "flèche droite";
img_right.classList.add("arrow", "arrow_right");
banner.appendChild(img_right);
}




const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");


arrow_left.addEventListener("click", function() {	
const dot_1 = document.querySelector(".dot_selected");
	let dot_2 = dot_1.previousElementSibling || dots.lastElementChild;
		
	


		counter_image = (counter_image - 1 + slides.length ) % slides.length;
	
	defilementCarrousel(counter_image,dot_1,dot_2);
});








arrow_right.addEventListener("click", function() {	

	const dot_1 = document.querySelector(".dot_selected");	
	let dot_2 = dot_1.nextElementSibling || dots.firstElementChild;
		
	counter_image = (counter_image + 1) % slides.length;
	

	defilementCarrousel(counter_image,dot_1,dot_2);
});

function defilementCarrousel(counter,dot_1,dot_2){

	//ENLEVER LA COULEUR BLANCHE
	dot_1.classList.remove("dot_selected");

	//AJOUTER LA COULEUR BLANCHE
	dot_2.classList.add("dot_selected");

	//JE SELECTIONNE LIMAGE A MODIFIER
	const image = document.querySelector(".banner-img");

	//JE MODIFIE LA SRC DE LIMAGE QUE JE VEUX MODIFIER
	image.src = "./assets/images/slideshow/" + slides[counter].image;

	//JE SELECTIONNE LE TEXTE A MODIFIER
	const tagline = document.querySelector("#banner p");

	//MODIFIER LE TEXTE
	tagline.innerHTML = slides[counter].tagLine;		
}





	










 


 







