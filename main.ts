namespace maxBot {
    /**
     * Initialize Max Bot
     */
    //% blockID=maxbotInitBlock
    //% block="Max:Bot init"
    export function initMaxbot() : void {

    }

    /**
     * Make max:bot move forward at a set speed
     */
    //% blockID=maxbotForwardSpeed
    //% block="Max:Bot forward at $speed"
    //% speed.min=1 speed.max=90
    export function forward(speed : number) : void {
        speed |= 0;
        pins.servoWritePin(AnalogPin.P8, 90+speed)
        pins.servoWritePin(AnalogPin.P12, 90-speed)
    }

    /**
     * Make max:bot turn left at a set speed
     */
    //% blockID=maxbotLeftSpeed
    //% block="Max:Bot turn left at $speed"
    //% speed.min=1 speed.max=90
    export function turnLeft(speed : number) : void {
        speed |= 0;
        pins.servoWritePin(AnalogPin.P8, 90 - speed)
        pins.servoWritePin(AnalogPin.P12, 90 - speed)
    }

    /**
     * Make max:bot turn right at a set speed
     */
    //% blockID=maxbotRightSpeed
    //% block="Max:Bot turn right at $speed"
    //% speed.min=1 speed.max=90
    export function turnRight(speed: number) : void {
        speed |= 0;
        pins.servoWritePin(AnalogPin.P8, 90 + speed)
        pins.servoWritePin(AnalogPin.P12, 90 + speed)
    }

    /**
     * Set max:bot left wheel speed
     */
    //% blockID=maxbotLeftWheelSpeed
    //% block="Max:Bot set left wheel to $speed"
    //% speed.min=-90 speed.max=90
    export function setLeftWheelSpeed(speed:number) : void {
        speed |= 0;
        pins.servoWritePin(AnalogPin.P8, speed);
    }
    
    /**
     * Set max:bot right wheel speed
     */
    //% blockID=maxbotRightWheelSpeed
    //% block="Max:Bot set right wheel to $speed"
    //% speed.min=-90 speed.max=90
    export function setRightWheelSpeed(speed: number): void {
        speed |= 0;
        pins.servoWritePin(AnalogPin.P12, speed);
    }
}
