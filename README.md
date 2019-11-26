# silkroad / Boutique en ligne :

- Le contenu de la boutique est construit automatiquement au chargement de la page par rapport à des donnée définies par un catalogue.
- Différents catalogues doivent pouvoir être utilisés sans que cela modifie le code qui permet le chargement de la page.
- Dans la boutique, l’utilisateur peut choisir la quantité qu’il souhaite acheter à l’aide d’un champ de saisie.
- Cette quantité doit Toujours être entre 0 et 9.
- Cette contrainte de validité est garantie lorsqu’on utilise des flèches ou quand on saisie directement une valeur.
- Il doit ensuite cliquer sur le bouton (chariot de course) pour ajouter au panier cet article avec la quantité désirée.
- Le bouton de mise en panier est inactif tant que la quantité = 0
- L’inactivité du chariot se traduit par une opacité de 0.25 du composant 
- Quand il clique sur le chariot, l’opacité passe à 1 pour marquer l’action et que l’article passe au panier
- Après avoir mit l’article dans le panier, la quantité dans la boutique doit être mise à 0
- La boutique en elle même présente 2 zone, 
  - 1 page à gauche représentant la boutique 3/4
  - 1 page à droite représentant le panier 1/4
- Lorsque l’article est ajouté au panier, il doit être visible dans le panier.
- Un même article apparaît toujours avec un seul article et mais avec la quantité qui s’adapte
- Il n’est jamais autorisé à commander plus de 9 articles en tout.
- Cliquer sur la poubelle à côté de l’article supprime toute la quantité et l’article 
- Le montant total apparaît dans une zone et est dynamique en fonction des modifications
- Au dessus du total se trouve une zone de texte qui permet de filtrer les produits de la boutique
- Les articles dont le nom contenant la chaîne de caractère présent dans le filtre sera filtré et la saisie s’adapte à l’utilisateur
  
index.html
Dossier :
    Data
        catalogue1.js
            (var catalogue = [{« name » : « nounours marron »,
                               « description » : « un joli nounours »,
                               « image » : « image/nounours »,
                               « price » : « 35 » }
                            {« name » : Nounours 2 »,
                             « description » : « un joli nounours 2 »,
                             « image » : « image/nounours2.jpg »,
                             « prince » : « 34 »}]
        catalogue2.js
        …
        Images
            fichiers.jpg
    Scripts
        controlleur.js
    Style
        icones(chariot, poubelle…)
        style.css