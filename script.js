document.addEventListener("DOMContentLoaded", () => {
    let joueur = "X";
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
    const cellules = document.querySelectorAll('td');
    let grille = ["", "", "", "", "", "", "", "", ""];
    let jeuEnCours = true;
    let gagnant = null;

    //const scoreJX = document.querySelector("p:nth-of-type(1)");
    //const scoreJO = document.querySelector("p:nth-of-type(2)");

    const checkGagnant = () => {
        for (let combinaison of combinaisonsGagnantes) {
            const [a, b, c] = combinaison;
            if (
                grille[a] &&
                grille[a] === grille[b] &&
                grille[a] === grille[c]
            ) {
                gagnant = grille[a];
                break;
            }
        }

        if (gagnant) {
            jeuEnCours = false;
            alert(`Félicitation le joueur ${gagnant} a gagné!`);
            Score();
        } else if (!grille.includes("")) {
            jeuEnCours = false;
            alert("Match nul!");
        }
    };

// Assurez-vous que ces éléments contiennent un nombre dès le début
    const scoreJX = document.querySelector("p:nth-of-type(1)");
    scoreJX.textContent = "Joueur X : 0";
    const scoreJO = document.querySelector("p:nth-of-type(2)");
    scoreJO.textContent = "Joueur O : 0";

    const Score = () => {
        if (gagnant === "X") {
            let scoreActuel = parseInt(scoreJX.textContent.split(": ")[1]);
            scoreJX.textContent = `Joueur X : ${scoreActuel + 1}`;
        } else if (gagnant === "O") {
            let scoreActuel = parseInt(scoreJO.textContent.split(": ")[1]);
            scoreJO.textContent = `Joueur O : ${scoreActuel + 1}`;
        }
    };



    const clicCellule = (event) => {
        const cell = event.target;
        const cellIndex = Array.from(cellules).indexOf(cell);

        if (grille[cellIndex] === "" && jeuEnCours) {
            grille[cellIndex] = joueur;
            cell.textContent = joueur;
            cell.classList.add(joueur);
            joueur = joueur === "X" ? "O" : "X";
            checkGagnant();
        }
    };

    const restartGame = () => {
        grille = ["", "", "", "", "", "", "", "", ""];
        jeuEnCours = true;
        gagnant = null;
        joueur = "X";
        cellules.forEach((cell) => {
            cell.textContent = "";
            cell.classList.remove("X", "O");
        });
    };

    cellules.forEach((cell) => {
        cell.addEventListener("click", clicCellule);
    });

    const restartButton = document.createElement("button");
    restartButton.textContent = "Recommencer";
    restartButton.addEventListener("click", restartGame);
    document.querySelector("section").appendChild(restartButton);

});
