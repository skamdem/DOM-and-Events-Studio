// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    //console.log('window loaded');
    //this.alert("hurray");
    //When the "Take off" button is clicked, the following should happen:
    //a) A window confirm should let the user know "Confirm that the shuttle is ready for takeoff".
    // If the shuttle is ready for liftoff, then add parts b-d.
    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function (event) {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (result){
            //b) The flight status should change to "Shuttle in flight."
            let flightStatusText = document.getElementById("flightStatus");
            flightStatusText.innerHTML = "Shuttle in flight";

            //c) The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "blue";

            //d) The shuttle height should increase by 10,000 miles.
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            let spaceShuttleHeightInNumber = Number(spaceShuttleHeight.innerHTML) + 100000;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightInNumber;
        }
    });
    
    //When the "Land" button is clicked, the following should happen:
    let landingButton = document.getElementById("landing");
    landingButton.addEventListener("click", function (event) {
        //a) A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        window.alert("The shuttle is landing. Landing gear engaged");

        //b) The flight status should change to "The shuttle has landed."
        let flightStatusText = document.getElementById("flightStatus");
        flightStatusText.innerHTML = "The shuttle has landed";

        //c) The background color of the shuttle flight screen should change from blue to green.
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";

        //d) The shuttle height should go down to 0
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        let spaceShuttleHeightInNumber = 0;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightInNumber;
    });
    
    //When the "Abort Mission" button is clicked, the following should happen:
    let missionAbortButton = document.getElementById("missionAbort");
    missionAbortButton.addEventListener("click", function (event) {
        //a) A window confirm should let the user know "Confirm that you want to abort the mission." 
        //If the user wants to abort the mission, then add parts b-d.
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result){
            //b) The flight status should change to "Mission aborted."
            let flightStatusText = document.getElementById("flightStatus");
            flightStatusText.innerHTML = "Mission aborted";

            //c) The background color of the shuttle flight screen should change from blue to green.
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "green";

            //d) The shuttle height should go to 0.
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            let spaceShuttleHeightInNumber = 0;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightInNumber;

            rocketImage.style.top = TOP;
            rocketImage.style.left = LEFT;
            console.log("knock knock");
        }

    });

    //When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    //The rocket image should move 10 px in the direction of the button that was clicked.
    //If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    let shuttleBackground = document.getElementById("shuttleBackground");
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.position = "relative";
    let upButton = document.getElementById("upButton");
    const TOP = rocketImage.style.top;
    const LEFT = rocketImage.style.left;

    upButton.addEventListener("click", function (event) {
        //rocketImage.style.top, right, bottom, and left;
        let str = rocketImage.style.top;
        let numberStr = Number(str.substr(0, str.length-2)) - 10;

        //console.log(document.getElementById("rocket").offsetTop);
        if (document.getElementById("rocket").offsetTop >= 0){
            rocketImage.style.top = String(numberStr).concat("px");
            //d) The shuttle height should increase or decrease by 10,000 miles. 
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            let spaceShuttleHeightInNumber = Number(spaceShuttleHeight.innerHTML) + 10000;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightInNumber;
        }

        /*rocketImage.style.top = String(numberStr).concat("px");
        //d) The shuttle height should increase or decrease by 10,000 miles. 
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        let spaceShuttleHeightInNumber = Number(spaceShuttleHeight.innerHTML) + 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightInNumber;*/
    });

    let downButton = document.getElementById("downButton");
    downButton.addEventListener("click", function (event) {
        //rocketImage.style.bottom = "10px";
        let str = rocketImage.style.top;
        let numberStr = Number(str.substr(0, str.length-2)) + 10;
        
        //console.log(document.getElementById("rocket").offsetTop);
        if (document.getElementById("rocket").offsetTop <= 250){
            rocketImage.style.top = String(numberStr).concat("px");
            //d) The shuttle height should increase or decrease by 10,000 miles. 
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            let spaceShuttleHeightInNumber = Number(spaceShuttleHeight.innerHTML) - 10000;
            if (spaceShuttleHeightInNumber < 0) spaceShuttleHeightInNumber = 0;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightInNumber;
        }
        
        /*rocketImage.style.top = String(numberStr).concat("px");
        //d) The shuttle height should increase or decrease by 10,000 miles. 
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        let spaceShuttleHeightInNumber = Number(spaceShuttleHeight.innerHTML) - 10000;
        if (spaceShuttleHeightInNumber < 0) spaceShuttleHeightInNumber = 0;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightInNumber;*/
    });

    let leftButton = document.getElementById("leftButton");
    leftButton.addEventListener("click", function (event) {
        let str = rocketImage.style.left;
        let numberStr = Number(str.substr(0, str.length-2)) - 10;

        //let rocketImageLeft = document.getElementById("rocket").offsetLeft;
        let l2 = document.getElementById("rocket").parentElement.offsetLeft;
        if (document.getElementById("rocket").offsetLeft >= -7){
            rocketImage.style.left = String(numberStr).concat("px");
        }
    });

    let rightButton = document.getElementById("rightButton");
    rightButton.addEventListener("click", function (event) {
        let str = rocketImage.style.left;
        let numberStr = Number(str.substr(0, str.length-2)) + 10;

        //console.log(document.getElementById("rocket").offsetLeft+document.getElementById("rocket").width);
        //console.log(document.getElementById("rocket").width);
        //console.log(document.getElementById("rocket").parentElement.offsetWidth);
        if (document.getElementById("rocket").offsetLeft + document.getElementById("rocket").width -10 <= document.getElementById("rocket").parentElement.offsetWidth){
            rocketImage.style.left = String(numberStr).concat("px");
        }
        //rocketImage.style.left = String(numberStr).concat("px");
    });
    /*
    BONUS 
    1. Keep the rocket from flying off of the background.
    2. Return the rocket to its original position on the background when it has been landed or the mission was aborted
    */
   landingButton.addEventListener("click", function (event) {
        rocketImage.style.top = TOP;
        rocketImage.style.left = LEFT;
    });

    /*missionAbortButton.addEventListener("click", function (event) {
        rocketImage.style.top = TOP;
        rocketImage.style.left = LEFT;
        console.log("knock knock");
    });
    let knock = document.getElementById("knock-button");
    knock.addEventListener("click", function (event) {
        console.log("knock knock");
    });*/
});