export const LightControl = {
    turnOnLight() {
        console.log(`${this.name} light is turned ON`);
        this.lightStatus = true;
    },
    turnOffLight() {
        console.log(`${this.name} light is turned OFF`);
        this.lightStatus = false;
    },
    adjustBrightness(level) {
        if (level >= 0 && level <= 100) {
            console.log(`${this.name} light brightness set to ${level}%`);
            this.brightness = level;
        } else {
            console.log(`Invalid brightness level for ${this.name}`);
        }
    }
};
