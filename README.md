# Hunter × Hunter — Personnages & Organigrammes

Application web statique (HTML / CSS / JavaScript, sans dépendance) pour explorer
l'univers de *Hunter × Hunter* de Yoshihiro Togashi.

## Fonctionnalités

- **Personnages** — liste de tous les personnages (principaux, princes, reines,
  entourages, clans mafieux, Brigade Fantôme), triés alphabétiquement, avec leur
  affiliation, leur type de Nen et la description de leur pouvoir. Recherche et
  filtres par organisation.
- **Guerre de Succession** — organigramme des 14 princes de Kakin regroupés sous
  leurs 8 reines-mères. Cliquer un prince affiche sa **bête de Nen** et son entourage.
- **Clans du Black Whale** — les 3 familles mafieuses (Xi-Yu, Cha-R, Heil-Ly), leurs
  membres connus et le prince mécène de chacune.
- **Brigade Fantôme** — l'organisation de l'Araignée : son chef et ses membres
  (actifs, anciens, décédés).

## Lancer en local

Aucune compilation nécessaire. Servez simplement le dossier :

```bash
python -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Déploiement (GitHub Pages)

Activez Pages sur la branche `main` (dossier racine) dans
*Settings → Pages* du dépôt. L'app sera servie directement.

## Images des personnages

Par défaut, des **avatars générés** (initiales + dégradé) sont affichés.
Pour utiliser vos propres images, voir [`img/README.md`](img/README.md).

---

*Application non officielle, à but informatif. Hunter × Hunter © Yoshihiro Togashi / Shueisha.*
