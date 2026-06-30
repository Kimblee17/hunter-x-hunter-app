# Images des personnages

L'application affiche par défaut des **avatars générés** (initiales + dégradé).
Dès qu'une vraie image existe pour un personnage, elle est utilisée à la place
(« lorsque c'est possible »). Sinon, l'avatar généré reste affiché.

## Ajouter le visage d'un personnage

Déposez simplement un fichier **`<slug>.<ext>`** dans ce dossier. C'est tout :
l'app le détecte automatiquement au chargement et remplace l'avatar.

- Formats acceptés (dans cet ordre de priorité) : `.jpg`, `.png`, `.webp`, `.jpeg`.
- Le `slug` se déduit du nom : minuscules, sans accents, espaces → tirets.
- Idéalement une image **carrée** (ex. 240×240) recadrée sur le visage.

Exemples :
| Nom                | Fichier à déposer          |
|--------------------|----------------------------|
| Gon Freecss        | `gon-freecss.jpg`          |
| Killua Zoldyck     | `killua-zoldyck.jpg`       |
| Chrollo Lucilfer   | `chrollo-lucilfer.png`     |
| Tserriednich       | `tserriednich.jpg`         |
| Morena Prudo       | `morena-prudo.webp`        |
| Unma Hui Guo Rou   | `unma-hui-guo-rou.jpg`     |

> Le mécanisme est activé par la constante `USE_LOCAL_IMAGES = true` en tête de
> `app.js`. Si un fichier est absent, l'avatar généré reste affiché — aucune erreur.

## Note sur les droits d'auteur

Les visuels de *Hunter × Hunter* sont protégés (© Yoshihiro Togashi / Shueisha).
Ce dépôt ne contient donc **aucune image officielle** : à vous d'y déposer les images
que vous êtes en droit d'utiliser.
