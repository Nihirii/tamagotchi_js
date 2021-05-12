// Screens
let setup, game, dead;

// Progress bars
let hungerBar, thirstBar, sleepBar, playBar;

// Other
let tamaSprite, status, age, deathStatus, AoD;


// Attend quand le DOM ai charmé
document.addEventListener("DOMContentLoaded", function () {

    setup = document.querySelector("#setup");
    game = document.querySelector("#game");
    dead = document.querySelector("#dead");

    hungerBar = document.querySelector("#hunger-progress");
    thirstBar = document.querySelector("#thirst-progress");
    sleepBar = document.querySelector("#sleep-progress");
    playBar = document.querySelector("#play-progress");

    tamaSprite = document.querySelector("#sprite");
    status = document.querySelector("#status");
    age = document.querySelector("#age");
    deathStatus = document.querySelector("#death-causes");
    AoD = document.querySelector("#age-of-death");

    // On show #setup
    setup.classList.add("visible");


});

const submitSetupForm = (e) => {

    // Prevent page reload
    e.preventDefault();

    // Recup la valeur du name

    const name = document.querySelector("#tama-name").value;

    let myTama = new Tamagotchi(name, renderInterface, die);

    gameInit(myTama);
};


const gameInit = (tama) => {

    // Cache setup, affiche game
    setup.classList.remove("visible");
    game.classList.add("visible");

    /* #region  Buttons */

    /* #region  Buttons definition */


    // Regular buttons
    const feed = document.querySelector("#feed-btn");
    const drink = document.querySelector("#drink-btn");
    const sleep = document.querySelector("#sleep-btn");
    const play = document.querySelector("#play-btn");

    //Special buttons
    const heal = document.querySelector("#heal-btn");
    const replay = document.querySelector("#replay-btn");

    /* #endregion */

    /* #region  Button click handlers */
    feed.addEventListener("click", () => {
        tama.eat();

    });

    drink.addEventListener("click", () => {
        tama.drink();

    });

    sleep.addEventListener("click", () => {
        tama.sleep();

    });

    play.addEventListener("click", () => {
        tama.play();
    });

    heal.addEventListener("click", () => {
        tama.heal();

    });

    replay.addEventListener("click", () => {
        if(!tama.alive) {

            dead.classList.remove("visible");
            setup.classList.add("visible");
            renderInterface(tama);
            

        }

    });
    /* #endregion */

    /* #endregion */

    tama.startLife();
};

const renderInterface = (tama) => {
    // Refresh l'interface

    console.log(tama);

    // Update Status bar
    hungerBar.value = tama.hungerMeter;
    thirstBar.value = tama.thirstMeter;
    sleepBar.value = tama.sleepMeter;
    playBar.value = tama.playMeter;

    // Update img


    //Update status text

    let statusText = `${tama.name} est en pleine forme !`;

    if (tama.alive) {

        let problems = [];

        if (tama.hungerMeter < 70) {
            if (tama.hungerMeter < 30) {
                problems.push(`${tama.name} a un très faim`);

                tamaSprite.setAttribute("src","resources/img/tama_Faim.png")
            } else {
                problems.push(`${tama.name} a faim`);
            }
        }

        if (tama.thirstMeter < 70) {
            if (tama.thirstMeter < 30) {
                problems.push(`${tama.name} a un très soif`);
                tamaSprite.setAttribute("src","resources/img/tama_Soif.png")

            } else {
                problems.push(`${tama.name} a soif`);
            }
        }

        if (tama.sleepMeter < 70) {
            if (tama.sleepMeter < 30) {
                problems.push(`${tama.name} est très fatigué`);
                tamaSprite.setAttribute("src","resources/img/tama_Fatigue.png")

            } else {
                problems.push(`${tama.name} est fatigué`);
            }
        }

        if (tama.playMeter < 70) {
            if (tama.playMeter < 30) {
                problems.push(`${tama.name} a un s'ennuie a mourir !`);
                tamaSprite.setAttribute("src","resources/img/tama_ennuie.png")

            } else {
                problems.push(`${tama.name} s'ennuie...`);
            }
        }

        if (tama.sick) {
            problems.push(`${tama.name} est malade !`);
            tamaSprite.setAttribute("src","resources/img/tama_Malade.png")

        }

        if(problems && problems.length > 0) {
            statusText = problems.join("\n");
        } else {
            tamaSprite.setAttribute("src","resources/img/tama_Normal.png")

        }

    } else {
        statusText = `${tama.name} est mort `;

        let causes = [];

        if (tama.hungerMeter === 0) {
            causes.push("de faim");
        }

        if (tama.thirstMeter === 0) {
            causes.push("de soif");
        }

        if (tama.sleepMeter === 0) {
            causes.push("d'épuisement");
        }

        if (tama.playMeter === 0) {
            causes.push("d'ennuie");
        }

        let causeString = causes.join(', ');
        statusText += causeString; 
        
        deathStatus.textContent = statusText;
    }

    status.textContent = statusText;

    // Age 
    age.textContent = `Jour ${tama.age +1}`;


};

const die = (tama) => {

    // Cache l'ecran du jeu, affiche l'écran de mort
    renderInterface(tama);

    AoD.textContent = `à l'age de ${tama.age} jour${tama.age > 1 ? "s" : ""} seulement ...`;

    game.classList.remove("visible");
    dead.classList.add("visible");

};