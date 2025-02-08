# 2048_Game

## Présentation du projet
Ce projet est une version du célèbre jeu 2048 que j'ai développée dans mon temps libre. Il s'agit d'une simple page web utilisant HTML, CSS et JavaScript, avec une gestion des déplacements, des fusions de tuiles et du calcul du score.

## Fonctionnalités et commandes du jeu
- **Mouvements** : Utilisez les **flèches du clavier** pour déplacer les tuiles.
- **Fusion** : Les tuiles de même valeur fusionnent lorsqu'elles se rencontrent.
- **Score** : Le score est mis à jour à chaque fusion.
- **Nouvelle partie** : Un bouton permet de réinitialiser le jeu et de commencer une nouvelle partie.
- **Fin de partie** : Si la grille est pleine et qu'aucun mouvement n'est possible, la partie est terminée.

## Technologies utilisées
- **HTML** : Pour structurer la page
- **CSS** : Pour le design et l'animation des tuiles
- **JavaScript** : Pour gérer la logique du jeu et les interactions

## Installation et exécution
1. Clonez ou téléchargez ce dépôt.
2. Ouvrez simplement `index.html` dans votre navigateur.

## Organisation des fichiers
```
2048_Game/
│── index.html       # Structure de la page
│── css/
│   ├── main.css     # Styles généraux
│   ├── board.css    # Styles du plateau de jeu
│   ├── tiles.css    # Styles des tuiles
│   ├── modal.css    # Styles du message "Game Over"
│── script.js        # Logique du jeu
```

## Mes idées pour améliorer ce projet
- Enregistrer le meilleur score du joueur (pour garder une trace des meilleures parties)
- Permettre la sauvegarde et la reprise d'une partie en cours 
- Créer un mode "thème sombre"
- Améliorer les animations des tuiles et/ou les rendre personnalisables
