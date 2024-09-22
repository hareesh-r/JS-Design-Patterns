export const TemperatureControl = {
    setTemperature(value) {
        console.log(`${this.name} temperature set to ${value}°C`);
        this.temperature = value;
    },
    increaseTemperature() {
        this.temperature += 1;
        console.log(`${this.name} temperature increased to ${this.temperature}°C`);
    },
    decreaseTemperature() {
        this.temperature -= 1;
        console.log(`${this.name} temperature decreased to ${this.temperature}°C`);
    }
};