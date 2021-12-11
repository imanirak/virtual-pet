/*
1. Egg must hatch after entering a name.
2. Feed button increases hunger by 2+
3. Play button increases happiness by 2+
4. Sleep button will turn off the lights for 5 secs then increase Sleepiness by 2+
5.HOW TO PLAY button should display a popup with instructions on how to survive. Also
have the option to close out this pop up.
5. If any of these conditions become less than 1 then the pet dies.



*/

/* the pet */

/* time to reference growth for vpet */

let time = 0;


class virtualPet {
    constructor() {
        this.hunger = 5,
            this.sleepiness = 5,
            this.happiness = 5,
            this.age = 0,
            this.alive = true,
            this.stage = 0,
            this.evolutionOne = ""
    }

    /* raise food progress bar by 2 */


    feed() {
        this.hunger = this.hunger + 1;
        console.log(`Feeding my pet ${vpet.name}`);
        console.log(this.hunger);
        let hungerP = document.getElementById("hunger").value = this.hunger;

        if (hungerP > 10) {
            document.getElementById("hunger").value = "10";
            alert("IM FULL!")
        } else {
            console.log("More FOOD!")
        }

    }

    sleep() {
        this.sleepiness = this.sleepiness + 1;
        console.log(`Feeding my pet ${vpet.sleepiness}`);
        console.log(this.sleepiness);
        let sleep = document.getElementById("sleepiness").value = this.sleepiness;

        if (sleep > 10) {
            document.getElementById("sleepiness").value = "10";
            alert("IM NOT TIRED!")
        } else {
            console.log("I want to sleep")
        }

    }


    play() {
        this.happiness = this.happiness + 1;
        console.log(`Feeding my pet ${vpet.happiness}`);
        console.log(this.happiness);
        let happy = document.getElementById("happiness").value = this.happiness;

        if (happy > 10) {
            document.getElementById("happiness").value = "10";
            alert("Im Happy!")
        } else {
            console.log("ugh... leave me alone")
        }

    }







}

/* create a new pet from virtualPet class */

let vpet = new virtualPet();


/* when feed button is clicked */

const feedButton = document.getElementById("feed");

feedButton.addEventListener("click", () => {

    vpet.feed()
});



const sleepButton = document.getElementById("sleep");

sleepButton.addEventListener("click", () => {

    vpet.sleep()
});




const playButton = document.getElementById("play");

playButton.addEventListener("click", () => {

    vpet.play()
});