 const reponse = await fetch ("pieces-autos.json");
 const pieces = await reponse.json();


 for (let i = 0; i < pieces.length; i++) {

    const articles = pieces[i];

    const divElement = document.createElement("article");
    
    const imageElement = document.createElement("img");
    imageElement.src = articles.image;
    imageElement.alt = articles.nom;
    const nomElement = document.createElement("h2");
    nomElement.textContent = articles.nom;
    const prixElement = document.createElement("p");   
    prixElement.textContent ="prix : " + articles.prix + "€";
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = articles.description;
    const cathegorieElement = document.createElement("p");
    cathegorieElement.textContent = articles.cathegorie;
    const disponibilie = document.createElement("p");
    if (articles.disponibilie == true ) {
        disponibilie.textContent= "en stock";
    }
    else {
        descriptionElement.textContent = "rupture de stock";
    }

    divElement.appendChild(imageElement);
    divElement.appendChild(nomElement);
    divElement.appendChild(prixElement);
    divElement.appendChild(descriptionElement);
    divElement.appendChild(cathegorieElement);
    divElement.appendChild(disponibilie);

    const fichesElement = document.querySelector(".fiches");
    fichesElement.appendChild(divElement);

}
  
const btnTrie = document.querySelector(".btn-trier");
btnTrie.addEventListener("click", function() {
    const orderplus = Array.from(pieces)
    orderplus.sort(function(a, b){
        return a.prix-b.prix
    })
    console.log(orderplus)
})
 //function pour filtrer
function filterMoinsDe35() {
    const produitsFiltres = pieces.filter(function(article) {
        return article.prix < 35;
    });
    console.log(produitsFiltres);
}

const btnFiltrer = document.querySelector(".btn-filtrer");
if (btnFiltrer) {
    btnFiltrer.addEventListener("click", filterMoinsDe35);
}