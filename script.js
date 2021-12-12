/*
1. Egg must hatch after entering a name.
2. Feed button increases hunger by 2+
3. Play button increases happiness by 2+
4. Sleep button will turn off the lights for 5 secs then increase Sleepiness by 2+
5.HOW TO PLAY button should display a popup with instructions on how to survive. Also
have the option to close out this pop up.
5. If any of these conditions become less than 1 then the pet dies.



*/

//const { default: swal } = require("sweetalert");




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
        console.log(`Feeding my pet ${vpet.hunger}`);
        console.log(this.hunger);
        let hungerP = document.getElementById("hunger").value = this.hunger;

        if (hungerP > 10) {
            document.getElementById("hunger").value = "10";
            swal({
                title: `${nameInput.value} says`,
                text: " I 'm Full!",
                icon: "info",
                button: "OK",
            })
        } else {
            console.log("More FOOD!")
        }

    }

    sleep() {
        this.sleepiness = this.sleepiness + 1;
        console.log(`${nameInput.value} rest level is ${ vpet.sleepiness }`);
        console.log(this.sleepiness);
        let sleep = document.getElementById("sleepiness").value = this.sleepiness;

        /*turns off light */

        // document.getElementById("dark").setAttribute('background-color:', "black");
        if (sleep > 10) {
            document.getElementById("sleepiness").value = "10";
            swal({
                title: `${nameInput.value} says`,
                text: "I'm not tired anymore.",
                icon: "success",
                button: "OK",
            })
        } else {
            console.log("I want to sleep")
        }

    }


    play() {
        this.happiness = this.happiness + 1;
        console.log(`${nameInput.value} happiness level is ${ vpet.happiness} `);
        console.log(this.happiness);
        let happy = document.getElementById("happiness").value = this.happiness;

        if (happy >= 10) {
            document.getElementById("happiness").value = "10";
            swal({
                title: `${nameInput.value} says`,
                text: "I dont want to play right now.",
                icon: "info",
                button: "OK",
            })
        } else {
            console.log("I still want to play!")
        }

    }


}

const howToPlay = () => {
    console.log("HOW TO PLAY?");


}

/* create a new pet from virtualPet class */

let vpet = new virtualPet();


/* when feed button is clicked */

const feedButton = document.getElementById("feed");

feedButton.addEventListener("click", () => {

    vpet.feed();
});



const sleepButton = document.getElementById("sleep");

sleepButton.addEventListener("click", () => {

    vpet.sleep();
});




const playButton = document.getElementById("play");

playButton.addEventListener("click", () => {

    vpet.play();
});



/* make button pop up with instructions */


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//naming pet



let nameInput = document.getElementById("nameinput");

let enter = document.getElementById("nameButton");

let vName = document.getElementById("vname");


enter.addEventListener('click', () => {
    vName.innerText = nameInput.value;
    const inputBox = document.getElementById("nameinput");
    const enterBtn = document.getElementById("nameButton");
    inputBox.parentNode.removeChild(inputBox);
    enterBtn.parentNode.removeChild(enterBtn);

});