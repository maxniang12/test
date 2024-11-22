let vendeurs = [];

document.getElementById('ajout-vendeur').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les informations du formulaire
    const nom = document.getElementById('nom-vendeur').value;
    const email = document.getElementById('email-vendeur').value;

    // Ajouter le vendeur à la liste
    const vendeur = { id: vendeurs.length + 1, nom, email };
    vendeurs.push(vendeur);

    // Réinitialiser le formulaire
    document.getElementById('ajout-vendeur').reset();

    // Mettre à jour l'affichage des vendeurs
    afficherVendeurs();
});

function afficherVendeurs() {
    const tbody = document.querySelector('#table-vendeurs tbody');
    tbody.innerHTML = ''; // Vider le tableau avant de réafficher les vendeurs

    vendeurs.forEach((vendeur) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${vendeur.nom}</td>
            <td>${vendeur.email}</td>
            <td class="actions">
                <button onclick="modifierVendeur(${vendeur.id})">Modifier</button>
                <button onclick="supprimerVendeur(${vendeur.id})">Supprimer</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function modifierVendeur(id) {
    const vendeur = vendeurs.find(v => v.id === id);
    const nouveauNom = prompt('Modifier le nom du vendeur', vendeur.nom);
    const nouveauEmail = prompt('Modifier l\'email du vendeur', vendeur.email);

    if (nouveauNom && nouveauEmail) {
        vendeur.nom = nouveauNom;
        vendeur.email = nouveauEmail;
        afficherVendeurs();
    }
}

function supprimerVendeur(id) {
    vendeurs = vendeurs.filter(v => v.id !== id);
    afficherVendeurs();
}




function afficherMessages() {
    const tbody = document.querySelector('#table-messages tbody');
    tbody.innerHTML = ''; // Vider le tableau avant d'afficher les messages
    vendeurs.forEach((vendeur) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${vendeur.nom}</td>
            <td>${vendeur.email}</td>
            <td>${'---'}</td>
           `;
        tbody.appendChild(row);
    });
  
}

afficherMessages();