let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

const imageFruit = document.getElementById('imageFruit');
const boutonFruits = document.querySelectorAll('.boutonFruits');

let boutonClique = null;
let imageParDefaut = "all-fruits.jpg";

function afficherImage(image) {
    imageFruit.style.backgroundImage = `url("../images/${image}")`;
}

boutonFruits.forEach(bouton => {
    bouton.addEventListener('mouseover', () => {
        if (boutonClique === null || boutonClique !== bouton) {
            let fruitName = bouton.textContent;
            let fruit = fruits.find(item => item.name === fruitName);
            afficherImage(fruit.image);
        }
    });

    bouton.addEventListener('click', () => {
        boutonFruits.forEach(boutonNonClique => {
            boutonNonClique.style.backgroundColor = "gray";
        });

        if (boutonClique !== bouton) {
            let fruitName = bouton.textContent;
            let fruit = fruits.find(item => item.name === fruitName);
            afficherImage(fruit.image);
            bouton.style.backgroundColor = "red";
            if (boutonClique !== null) {
                boutonClique.style.backgroundColor = "gray";
            }
            boutonClique = bouton;
        } else {
            boutonClique = null;
            afficherImage(imageParDefaut);
        }
    });
});
