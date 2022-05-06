// tests go here; this will not be compiled when this package is used as an extension.

radio.setGroup(10);
let angryTill = 0;

radio.onReceivedValue(function(name: string, value: number) {
    let command = name;
    switch(command){
        case "forward":
            maxBot.forward(value);
            break;
        case "left":
            maxBot.turnLeft(value);
            break;
        case "right":
            maxBot.turnRight(value);
            break;
        case "stop":
            maxBot.stop();
            break;
        default:
            basic.showIcon(IconNames.Confused);
            break;
    }
});

// Go forward till about to hit something on button A pressed
input.onButtonPressed(Button.A, function() {
    while(maxBot.ultrasonicDistance() > 10){
        maxBot.forward(50);
    }
});

// Follow line for 5 seconds on button B pressed.
input.onButtonPressed(Button.B, function () {
    let startTime = control.millis();
    let endTime = startTime + (5 * 1000);
    while (control.millis() < endTime){
        if (maxBot.leftLightSensorLight()){
            maxBot.turnRight(40);
        } else if (maxBot.rightLightSensorLight()){
            maxBot.turnLeft(40);
        } else {
            maxBot.forward(40);
        }
    }
});

// Do a little dance on A + B
input.onButtonPressed(Button.AB, function () {
    for(let i = 3; i > 0; i--){
        basic.showNumber(i);
        basic.pause(1000);
    }
    for (let i = 0; i<4; i++){
        maxBot.forward(50);
        basic.pause(200);
        maxBot.backward(50);
        basic.pause(200);
        maxBot.turnLeft(50);
        basic.pause(300);
        maxBot.turnRight(50);
        basic.pause(600);
        maxBot.turnLeft(70);
        basic.pause(600);
    }
});

// Don't push lil max:bots buttons!!
basic.forever(function (){
    if(maxBot.isLeftButtonPushed() || maxBot.isRightButtonPushed()){
        angry();
        angryTill = control.millis() + 2000;
    }
});

// Check if max:bot is over his anger every 2.5 seconds
loops.everyInterval(2500, function() {
    if (angryTill < control.millis()){
        happy();
    }
})

// Function to show max:bot is angry >:(
let angry = function(){
    basic.showIcon(IconNames.Angry);
    maxBot.getLeftStrip().showColor(neopixel.rgb(255, 0, 0));
    maxBot.getRightStrip().showColor(neopixel.rgb(255, 0, 0));
};

// Function to show max:bot is happy  :)
let happy = function(){
    basic.showIcon(IconNames.Happy);
    maxBot.getLeftStrip().showRainbow(1, 360);
    maxBot.getRightStrip().showRainbow(1, 360);
};