# Images des personnages

Par défaut, l'application affiche des **avatars générés** (initiales + dégradé) pour
chaque personnage, prince, reine, membre de clan ou de la Brigade Fantôme.

## Utiliser vos propres images

1. Ouvrez `hxh/app.js` et passez la constante en tête de fichier à `true` :
   ```js
   const USE_LOCAL_IMAGES = true;
   ```
2. Déposez un fichier **`<slug>.jpg`** dans ce dossier : il remplacera
   automatiquement l'avatar généré pour ce personnage.

(Par défaut la constante est à `false` : l'app n'affiche que les avatars générés
et n'envoie aucune requête réseau inutile.)

Le `slug` se déduit du nom : minuscules, sans accents, espaces remplacés par des tirets.

Exemples :
| Nom                | Fichier attendu            |
|--------------------|----------------------------|
| Gon Freecss        | `gon-freecss.jpg`          |
| Killua Zoldyck     | `killua-zoldyck.jpg`       |
| Chrollo Lucilfer   | `chrollo-lucilfer.jpg`     |
| Tserriednich       | `tserriednich.jpg`         |
| Morena Prudo       | `morena-prudo.jpg`         |
| Unma Hui Guo Rou   | `unma-hui-guo-rou.jpg`     |

> Format attendu : `.jpg`. Idéalement carré (ex. 240×240) pour un rendu net.
> Si le fichier est absent, l'avatar généré reste affiché — aucune erreur visible.
