
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('formNote');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupération des valeurs
        const nom = document.getElementById('nom').value.trim();
        const n1 = parseFloat(document.getElementById('note1').value);
        const n2 = parseFloat(document.getElementById('note2').value);

        // Vérification
        if (!nom || isNaN(n1) || isNaN(n2)) {
            alert("Veuillez remplir correctement tous les champs !");
            return;
        }

        // Calcul
        const moyenne = (n1 + n2) / 2;
        const etat = moyenne >= 10 ? "Admis" : "Ajourné";

        // Affichage
        document.getElementById('resNom').innerText = nom;
        document.getElementById('resMoyenne').innerText = moyenne.toFixed(2);

        const resEtat = document.getElementById('resEtat');
        resEtat.innerText = etat;
        resEtat.style.color = (etat === "Admis") ? "#28a745" : "#dc3545";

        document.getElementById('resultatImmediat').style.display = 'block';

        // Sauvegarde localStorage
        const nouvelEtudiant = {
            id: Date.now(),
            nom: nom,
            moyenne: moyenne,
            etat: etat
        };

        let listeEtudiants = JSON.parse(localStorage.getItem('etudiants')) || [];
        listeEtudiants.push(nouvelEtudiant);
        localStorage.setItem('etudiants', JSON.stringify(listeEtudiants));

        // Reset après 3 secondes
        setTimeout(() => { form.reset(); }, 3000);
    });

});

