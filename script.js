document.addEventListener("DOMContentLoaded", () => {
    let joueurX = "X";
    let joueurO = "O";
    let combinaisonsGagnantes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];
    let cellule = document.querySelectorAll('td');
    let grille = document.querySelector('table');
    let tourJoueur0 = false;
    let rejouer = document.querySelector("button");
})
