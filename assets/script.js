
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

//Garde en memoire l'indice de l'image 
		let counter_image = 0;

//Contient l'image et le texte du carroussel qui est affichée
        const banner = document.querySelector("#banner")

//points indiquant quelle image est affichée
        const dots = document.querySelector(".dots");
        if (dots.children.length === 0) 

//Boucle pour créer les points
 for (let i = 0; i< slides.length; i++) {

//Elément div pour chaque point
	let dot = document.createElement("div");

//Class dot  pour styliser le point 
	dot.classList.add("dot");
	dots.appendChild(dot);	
	    if (i === 0) {
		dot.classList.add("dot_selected");
	}
}

//Creation de la fléche gauche 
     if (!document.querySelector(".arrow_left")) {
     const img_left = document.createElement("img");
     img_left.src = "assets/images/arrow_left.png";
     img_left.alt = "flèche gauche";

//Class permettant de stylage via css
img_left.classList.add("arrow ","arrow_left");

//Fléche  dans l'element banner pour devenir visible 
banner.appendChild(img_left);
}
//IDEM QUE POUR LA FLECHE GAUCHE
if (!document.querySelector(".arrow_right")) {
const img_right = document.createElement("img");
img_right.src = "assets/images/arrow_right.png";
img_right.alt = "flèche droite";
img_right.classList.add("arrow", "arrow_right");
banner.appendChild(img_right);
}

//Trouve les fleches sur la page 
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

//Action pour aller à l image précedente  quand on clic dessus 
      arrow_left.addEventListener("click", function() {
	
//Code pour affiché l'image précedente 
         const dot_1 = document.querySelector(".dot_selected");
	     let dot_2 = dot_1.previousElementSibling || dots.lastElementChild;
		 counter_image = (counter_image - 1 + slides.length ) % slides.length;
         defilementCarrousel(counter_image,dot_1,dot_2);
});

//IDEM QUE POUR FLECHE GAUCHE
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





	










 


 







