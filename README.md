# ◉ Tama·sub — Tamagotchi JS

Un mini-jeu en JavaScript inspiré des Tamagotchi, au style ocean tech. Le but est de prendre soin d’un petit requin-baleine virtuel en répondant à ses besoins.

**[▶ Jouer en ligne](https://nihirii.github.io/tamagotchi_js/)**

![Accueil, console et plein écran sur téléphone](screenshots/0-apercu.png)

## Comment jouer

1. Donne un petit nom à ton requin-baleine, puis appuie sur **Plonger**.
2. Surveille ses quatre jauges : faim, énergie, soif et amusement.
3. Utilise les boutons pour t’en occuper :

| Bouton | Action |
|---|---|
| 🍗 Manger | Remplit la jauge de faim |
| 🥤 Boire | Remplit la jauge de soif |
| 💉 Soigner | Guérit ton requin-baleine quand il est malade |
| 💤 Dormir | Recharge son énergie |
| 🧶 Jouer | Remonte son amusement |

### Les règles

- Ne laisse jamais la **faim**, la **soif** ou l’**énergie** tomber à 0.
- S’il ne joue pas assez (amusement sous 50), il tombe **malade**.
- Malade, il faut d’abord le **soigner** : il ne peut plus manger, boire, jouer ni dormir.
- Un jour dure **5 secondes**.

## Émotions

Le requin-baleine change d’expression selon ses jauges.

![Les 7 émotions du requin-baleine](screenshots/6-emotions.png)

| | | | | | | |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| <img src="resources/img/tama_Normal.png" width="90" alt=""> | <img src="resources/img/tama_Faim.png" width="90" alt=""> | <img src="resources/img/tama_Soif.png" width="90" alt=""> | <img src="resources/img/tama_Fatigue.png" width="90" alt=""> | <img src="resources/img/tama_ennuie.png" width="90" alt=""> | <img src="resources/img/tama_Malade.png" width="90" alt=""> | <img src="resources/img/tama_Mort.png" width="90" alt=""> |
| Content | Faim | Soif | Fatigué | Ennui | Malade | Mort |

Les sources SVG des sprites sont dans [`resources/img/src/`](resources/img/src/).

## Interface

Le jeu prend la forme d’une console ocean tech : coque bleu abysse au contour néon cyan, écran façon sonar avec ligne de balayage, boutons lumineux et bulles en fond. Sur téléphone comme sur ordinateur, un sélecteur en haut de l’écran permet de jouer dans la **console** ou en **plein écran**.

### Sur téléphone

<p>
  <img src="screenshots/1-accueil.png" width="200" alt="Écran d’accueil : choix du nom">
  <img src="screenshots/2-console.png" width="200" alt="Mode console : le requin-baleine est content">
  <img src="screenshots/3-plein-ecran-mobile.png" width="200" alt="Plein écran : le requin-baleine a faim">
  <img src="screenshots/5-fin.png" width="200" alt="Écran de fin">
</p>

Accueil · Console · Plein écran · Fin de partie

### Sur ordinateur

![Mode plein écran sur ordinateur : le requin-baleine est fatigué](screenshots/4-plein-ecran-desktop.png)

## Lancer le jeu en local

Le jeu n’a besoin d’aucune installation : clone le dépôt et ouvre `index.html` dans ton navigateur.

```bash
git clone https://github.com/Nihirii/tamagotchi_js.git
```

## Structure

```
index.html              Page du jeu
styles/theme.css        Design ocean tech
js/core/Tamagotchi.js   Logique du Tamagotchi (jauges, maladie, mort)
js/app.js               Affichage et boutons
resources/img/          Sprites du requin-baleine (PNG + sources SVG)
screenshots/            Captures d’écran du README
```

## Contexte

J’ai réalisé ce projet en trois heures dans le cadre d’un exercice. L’objectif était de recréer en JavaScript un [Tamagotchi que j’avais d’abord développé en Python](https://github.com/Nihirii/Tamagotchi_PY). J’ai choisi d’ajouter la maladie pour donner une priorité aux actions du joueur.
