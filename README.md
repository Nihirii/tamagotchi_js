# Tamagotchi JS

Un mini-jeu en JavaScript inspiré des Tamagotchi. Le but est de prendre soin d’un petit requin-baleine virtuel en répondant à ses besoins.

**[Jouer en ligne](https://nihirii.github.io/tamagotchi_js/)**

![Accueil, console et plein écran sur téléphone](screenshots/0-apercu.png)

## Comment jouer

- Nourris ton requin-baleine et donne-lui à boire.
- Fais-le dormir et joue avec lui.
- S’il tombe malade, soigne-le d’abord. Les autres actions sont bloquées jusqu’à sa guérison.

## Contexte

J’ai réalisé ce projet en trois heures dans le cadre d’un exercice. L’objectif était de recréer en JavaScript un [Tamagotchi que j’avais d’abord développé en Python](https://github.com/Nihirii/Tamagotchi_PY). J’ai choisi d’ajouter la maladie pour donner une priorité aux actions du joueur.

## Interface

Le jeu prend la forme d’une console ocean tech : coque bleu abysse au contour néon cyan, écran façon sonar avec ligne de balayage, boutons lumineux et bulles en fond. Sur téléphone comme sur ordinateur, un sélecteur permet de jouer dans la console ou en plein écran.

![Mode plein écran sur ordinateur](screenshots/4-plein-ecran-desktop.png)

<p>
  <img src="screenshots/2-console.png" width="250" alt="Mode console : le requin-baleine est content">
  <img src="screenshots/3-plein-ecran-mobile.png" width="250" alt="Plein écran sur téléphone : le requin-baleine a faim">
  <img src="screenshots/5-fin.png" width="250" alt="Écran de fin">
</p>

## Émotions

Le requin-baleine change d’expression selon ses jauges : content, faim, soif, fatigué, ennui, malade et mort. Les sources SVG des sprites sont dans `resources/img/src/`.

![Les 7 émotions du requin-baleine](screenshots/6-emotions.png)
