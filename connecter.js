        // Fonction de validation de connexion
        function validerConnexion(event) {
            event.preventDefault(); // Empêche le rechargement de la page

            // Identifiants fixes pour l'administrateur et le vendeur
            const adminEmail = "muslim@gmail.com";
            const adminPassword = "muslim123";
            const vendeurEmail = "junior@gmail.com";
            const vendeurPassword = "junior123";

           


            // Récupérer les valeurs saisies dans le formulaire
            const email = document.getElementById("emaile").value;
            const motDePasse = document.getElementById("motpasse").value;

            // Vérifier si c'est un administrateur ou un vendeur
            if (email === adminEmail && motDePasse === adminPassword) {
                alert("Connexion réussie en tant qu'administrateur.");
                window.location.href = "admin.html"; // Rediriger vers la page d'administration
            } else if (email === vendeurEmail && motDePasse === vendeurPassword) {
                alert("Connexion réussie en tant que vendeur.");
                window.location.href = "vendeur.html"; // Rediriger vers la page d'accueil du vendeur
            } else {
                alert("Identifiant ou mot de passe incorrect.");
            }
        }
