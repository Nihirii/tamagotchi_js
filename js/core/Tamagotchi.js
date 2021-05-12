class Tamagotchi {
    constructor(name, renderFn, deathFn) {
        this.name = name;
        this.birthTs;
        this.hungerMeter;
        this.thirstMeter;
        this.sleepMeter;
        this.playMeter;

        this.sick;
        this.alive;

        this.lifeCycle;
        this.renderFunction = renderFn;
        this.deathFunction = deathFn;

        this.birth(name);
    }

    birth(name) {
        this.name = name;
        this.birthTs = Date.now();
        this.hungerMeter = 100;
        this.thirstMeter = 100;
        this.sleepMeter = 100;
        this.playMeter = 100;

        this.sick = false;
        this.alive = true;
    };

    get status() {
        const statusString =
            `Mon tama s'appelle ${this.name}
        Il a actuellement ${this.age} jours,
        Il est rassasié à ${this.hungerMeter}%,
        Il est désaltéré à ${this.thirstMeter}%,
        Il est reposé à ${this.sleepMeter}%,
        Il est epanouï à ${this.playMeter}
        ${this.sick ? "Il est actuellement malade :(" : "Il est en bonne santé"}`;

        return statusString;
    }

    get age() {
        // Retourne l'age du tama
        // 5s = 1 jour tama
        const ageTamaMS = Date.now() - this.birthTs;

        // On part de son age en MS, on divise par 1000 pour avoir son age en s, on divise par 5 car un jour Tama = 5s, et on ne garde que la partie entière
        const ageTama = Math.floor((ageTamaMS / 1000) / 5)
        return ageTama;
    }

    tick() {
        // Baisse tous les attributs de 5 a chaque tick quand le tama est vivant
        if (this.alive) {
            this.hungerMeter -= 5;
            this.thirstMeter -= 5;
            this.sleepMeter -= 5;

            // Sauf l'amusement qui baisse de 2
            this.playMeter -= 2;

            if (this.playMeter < 50) {
                // Le tama tombe malade quand son amusement passe en dessous de 50
                this.sick = true;
            }

            // Après chaque tick, check si le tama est toujours en vie 
            if (this.hungerMeter > 0 && this.thirstMeter > 0 && this.sleepMeter > 0 && this.playMeter > 0) {
                // Youpi, il est toujours en vie, pour l'instant ...
            } else {
                // Oups il est mort !
                this.die();
            }
        }

        if (this.renderFunction) {
            this.renderFunction(this);
        }
        

        // On retourne l'etat du tama a chaque tick
        return this.alive;
    };


    /* #region Interactions /boutons*/
    eat() {
        if (!this.sick && this.alive) {
            this.hungerMeter += 25;
            this.hungerMeter = Math.min(100, this.hungerMeter);

            if (this.renderFunction) {
                this.renderFunction(this);
            }
        }
    }

    drink() {
        if (!this.sick && this.alive) {
            this.thirstMeter += 25;
            this.thirstMeter = Math.min(100, this.thirstMeter);

            if (this.renderFunction) {
                this.renderFunction(this);
            }
        }
    }

    sleep() {
        if (!this.sick && this.alive) {
            this.sleepMeter += 50;
            this.sleepMeter = Math.min(100, this.sleepMeter);

            if (this.renderFunction) {
                this.renderFunction(this);
            }
        }
    }

    play() {
        if (!this.sick && this.alive) {
            this.playMeter += 10;
            this.playMeter = Math.min(100, this.playMeter);

            if (this.renderFunction) {
                this.renderFunction(this);
            }
        }
    }

    heal() {
        if (this.sick) {
            this.sick = false;

            if (this.playMeter < 50) {
                this.playMeter = 60;
            }
            if (this.renderFunction) {
                this.renderFunction(this);
            }
        }
    }
    /* #endregion /boutons*/

    startLife() {
        if (!this.lifeCycle) {
            this.lifeCycle = setInterval(() => {
                this.tick();
            }, 500);
        }
    }

    die() {
        if (this.lifeCycle) {
            clearInterval(this.lifeCycle);
            this.lifeCycle = null;
            this.alive = false;

            if(this.deathFunction) {
                this.deathFunction(this);
            }
        }
    }
}