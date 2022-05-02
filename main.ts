namespace maxBot {
    const speakerPin = AnalogPin.P0;
    const trigPin = DigitalPin.P1, echoPin = DigitalPin.P2;
    const leftMotor = AnalogPin.P8, rightMotor = AnalogPin.P12;
    const leftButton = DigitalPin.P16, rightButton = DigitalPin.P13;
    const leftLightSensor = DigitalPin.P15, rightLightSensor = DigitalPin.P14;
    let leftStrip = neopixel.create(DigitalPin.P5, 10, NeoPixelMode.RGB);
    let rightStrip = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB);


    /**
     * Set the speed of both motors
     */
    //% blockID=maxbotSetWheels
    //% block="Max:Bot set left : $leftWheel right : $rightWheel"
    //% leftWheel.min=-90 leftWheel.max=90 rightWheel.min=-90 rightWheel.max=90
    export function setWheelSpeeds(leftWheel : number, rightWheel : number) : void {
        leftWheel |= 0; 
        rightWheel |= 0;
        pins.servoWritePin(leftMotor, 90 + leftWheel);
        pins.servoWritePin(rightMotor, 90 + rightWheel);
    }
    /**
     * Stops the max:bot
     */
    //% blockID=maxbotStop
    //% block="Max:Bot stop"
    export function maxbotStop() : void {
        pins.servoWritePin(leftMotor, 90);
        pins.servoWritePin(rightMotor, 90);
    }

    /**
     * Make max:bot move forward at a set speed
     */
    //% blockID=maxbotForwardSpeed
    //% block="Max:Bot forward at $speed"
    //% speed.min=1 speed.max=90
    export function forward(speed : number) : void {
        speed |= 0;
        pins.servoWritePin(leftMotor, 90+speed);
        pins.servoWritePin(rightMotor, 90+speed);
    }

    /**
     * Make max:bot move backward at a set speed
     */
    //% blockID=maxbotBackwardSpeed
    //% block="Max:Bot reverse at $speed"
    //% speed.min=1 speed.max=90
    export function backward(speed: number): void {
        speed |= 0;
        pins.servoWritePin(leftMotor, 90 - speed);
        pins.servoWritePin(rightMotor, 90 - speed);
    }

    /**
     * Make max:bot turn left at a set speed
     */
    //% blockID=maxbotLeftSpeed
    //% block="Max:Bot turn left at $speed"
    //% speed.min=1 speed.max=90
    export function turnLeft(speed : number) : void {
        speed |= 0;
        pins.servoWritePin(leftMotor, 90 - speed);
        pins.servoWritePin(rightMotor, 90 + speed);
    }

    /**
     * Make max:bot turn right at a set speed
     */
    //% blockID=maxbotRightSpeed
    //% block="Max:Bot turn right at $speed"
    //% speed.min=1 speed.max=90
    export function turnRight(speed: number) : void {
        speed |= 0;
        pins.servoWritePin(leftMotor, 90 + speed);
        pins.servoWritePin(rightMotor, 90 - speed);
    }

    /**
     * Set max:bot left wheel speed
     */
    //% blockID=maxbotLeftWheelSpeed
    //% block="Max:Bot set left wheel to $speed"
    //% speed.min=-90 speed.max=90
    export function setLeftWheelSpeed(speed:number) : void {
        speed |= 0;
        pins.servoWritePin(leftMotor, speed);
    }
    
    /**
     * Set max:bot right wheel speed
     */
    //% blockID=maxbotRightWheelSpeed
    //% block="Max:Bot set right wheel to $speed"
    //% speed.min=-90 speed.max=90
    export function setRightWheelSpeed(speed: number): void {
        speed |= 0;
        pins.servoWritePin(rightMotor, speed);
    }

    /**
     * Get left strip on max:bot
     */
    //% blockID=maxbotGetLeftStrip
    //% block="Max:Bot left strip"
    export function getLeftStrip() : neopixel.Strip{
        return leftStrip;
    }
    
    /**
     * Get right strip on max:bot
     */
    //% blockID=maxbotGetRightStrip
    //% block="Max:Bot right strip"
    export function getRightStrip(): neopixel.Strip {
        return rightStrip;
    }

    /**
     * Returns if the left button is pushed or not
     */
    //% blockID=maxbotLeftButtonPushed
    //% block="Max:Bot is left button pushed?"
    export function isLeftButtonPushed () : boolean {
        return pins.digitalReadPin(leftButton) == 1;
    }

    /**
     * Returns if the right button is pushed or not
     */
    //% blockID=maxbotLeftButtonPushed
    //% block="Max:Bot is right button pushed?"
    export function isRightButtonPushed(): boolean {
        return pins.digitalReadPin(rightButton) == 1;
    }

    /**
     * Returns if the left light sensor detects light
     */
    //% blockID=maxbotLeftLightSensorLight
    //% block="Max:Bot left light sensor detects light?"
    export function leftLightSensorLight() : boolean {
        return pins.digitalReadPin(leftLightSensor) == 0;
    }

    /**
     * Returns if the right light sensor detects light
     */
    //% blockID=maxbotRightLightSensorLight
    //% block="Max:Bot right light sensor detects light?"
    export function rightLightSensorLight(): boolean {
        return pins.digitalReadPin(rightLightSensor) == 0;
    }

    /**
     * Returns distance sensed by ultrasonic sensor in centimeters
     */
    //% blockID=maxbotUltrasonicSensor
    //% block="Max:Bot ultrasonic sensor distance"
    export function ultrasonicDistance(): number {
        return sonar.ping(trigPin, echoPin, PingUnit.Centimeters);
    }
}
