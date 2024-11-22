let produits = [];

document.getElementById('ajout-produit').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les informations du formulaire
    const nom = document.getElementById('nom-produit').value;
    const categorie = document.getElementById('categorie-produit').value;
    const prix = document.getElementById('prix-produit').value;

    // Ajouter le produit à la liste
    const produit = { id: produits.length + 1, nom, categorie, prix };
    produits.push(produit);

    // Réinitialiser le formulaire
    document.getElementById('ajout-produit').reset();

    // Mettre à jour l'affichage des produits
    afficherProduits();
});

function afficherProduits() {
    const tbody = document.querySelector('#table-produits tbody');
    tbody.innerHTML = ''; // Vider le tableau avant de réafficher les produits

    produits.forEach((produit) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${produit.nom}</td>
            <td>${produit.categorie}</td>
            <td>${produit.prix} frcf</td>
            <td class="actions">
                <button onclick="modifierProduit(${produit.id})">Modifier</button>
                <button onclick="supprimerProduit(${produit.id})">Supprimer</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function modifierProduit(id) {
    const produit = produits.find(p => p.id === id);
    const nouveauNom = prompt('Modifier le nom du produit', produit.nom);
    const nouvelleCategorie = prompt('Modifier la catégorie', produit.categorie);
    const nouveauPrix = prompt('Modifier le prix', produit.prix);

    if (nouveauNom && nouvelleCategorie && nouveauPrix) {
        produit.nom = nouveauNom;
        produit.categorie = nouvelleCategorie;
        produit.prix = nouveauPrix;
        afficherProduits();
    }
}

function supprimerProduit(id) {
    produits = produits.filter(p => p.id !== id);
    afficherProduits();
}
