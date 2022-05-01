namespace maxBot {

    const leftMotor = AnalogPin.P8, rightMotor = AnalogPin.P12;
    let leftStrip = neopixel.create(DigitalPin.P5, 10, NeoPixelMode.RGB);
    let rightStrip = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB);

    /**
     * Make max:bot move forward at a set speed
     */
    //% blockID=maxbotForwardSpeed
    //% block="Max:Bot forward at $speed"
    //% speed.min=1 speed.max=90
    export function forward(speed : number) : void {
        speed |= 0;
        pins.servoWritePin(leftMotor, 90+speed);
        pins.servoWritePin(rightMotor, 90-speed);
    }

    /**
     * Make max:bot move backward at a set speed
     */
    //% blockID=maxbotBackwardSpeed
    //% block="Max:Bot reverse at $speed"
    //% speed.min=1 speed.max=90
    export function backward(speed: number): void {
        speed |= 0;
        pins.servoWritePin(leftMotor, 90 + speed);
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
        pins.servoWritePin(rightMotor, 90 - speed);
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
        pins.servoWritePin(rightMotor, 90 + speed);
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
        return leftStrip;
    }
}
