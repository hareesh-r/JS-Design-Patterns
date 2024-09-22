// Observable class for weather station
class Observable {
    constructor() {
        this.observers = [];
    }

    // Subscribe a new observer
    subscribe(func) {
        this.observers.push(func);
        console.log('New observer subscribed.');
    }

    // Unsubscribe an observer
    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
        console.log('Observer unsubscribed.');
    }

    // Notify all observers about the data change
    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

// WeatherStation class (subject)
class WeatherStation extends Observable {
    constructor() {
        super();
        this.temperature = null; // Initial temperature is null
    }

    // Method to set the new temperature and notify observers
    setTemperature(newTemperature) {
        console.log(`WeatherStation: New temperature is ${newTemperature}°C`);
        this.temperature = newTemperature;
        this.notify(this.temperature); // Notify observers of the temperature change
    }
}

// Create a weather station
const weatherStation = new WeatherStation();

// Observer function (e.g., for a display)
const display1 = (temp) => console.log(`Display 1: Current temperature is ${temp}°C`);
const display2 = (temp) => console.log(`Display 2: Current temperature is ${temp}°C`);

// Subscribe displays to the weather station
weatherStation.subscribe(display1); // New observer subscribed.
weatherStation.subscribe(display2); // New observer subscribed.

// Simulate temperature changes
weatherStation.setTemperature(25); // WeatherStation: New temperature is 25°C
// Display 1: Current temperature is 25°C
// Display 2: Current temperature is 25°C

weatherStation.setTemperature(30); // WeatherStation: New temperature is 30°C
// Display 1: Current temperature is 30°C
// Display 2: Current temperature is 30°C

// Unsubscribe one display
weatherStation.unsubscribe(display1); // Observer unsubscribed.

// Change temperature again
weatherStation.setTemperature(35); // WeatherStation: New temperature is 35°C
// Display 2: Current temperature is 35°C (Only display2 is notified)
