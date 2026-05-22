
function chargerResultats() {
    const corps = document.getElementById('corpsTableau');
    const message = document.getElementById('messageVide');
    // On récupère la liste stockée lors de la saisie
    let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];

    if (etudiants.length === 0) {
        message.style.display = 'block';
        return;
    }

    corps.innerHTML = ''; // On vide le tableau avant de le remplir

    etudiants.forEach((etudiant, index) => {
        const ligne = document.createElement('tr');

        const badgeClass = etudiant.etat === "Admis" ? "badge-admis" : "badge-ajourne";

        ligne.innerHTML = `
                <td>${etudiant.nom}</td>
                <td>${etudiant.moyenne.toFixed(2)}</td>
                <td><span class="${badgeClass}">${etudiant.etat}</span></td>
                <td><button class="btn-delete" onclick="supprimerEtudiant(${index})">Supprimer</button></td>
            `;
        corps.appendChild(ligne);
    });
}

function supprimerEtudiant(index) {
    let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];
    etudiants.splice(index, 1); // Supprime l'élément de la liste
    localStorage.setItem('etudiants', JSON.stringify(etudiants)); // Sauvegarde la nouvelle liste
    chargerResultats(); // Rafraîchit l'affichage
}

// Charger les données dès l'ouverture de la page
window.onload = chargerResultats;