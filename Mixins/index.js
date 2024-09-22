// /index.js
import { Device } from './classes/Device.js';
import { SmartHome } from './classes/SmartHome.js';
import { LightControl } from './mixins/LightControl.js';
import { TemperatureControl } from './mixins/TemperatureControl.js';
import { SecurityMonitor } from './mixins/SecurityMonitor.js';

// Initialize the smart home system
const smartHome = new SmartHome();

// Create devices
const livingRoomLight = new Device('Living Room Light');
Object.assign(livingRoomLight, LightControl); // Light can control light-related features
smartHome.addDevice(livingRoomLight);

const smartThermostat = new Device('Smart Thermostat');
Object.assign(smartThermostat, TemperatureControl); // Thermostat can control temperature
smartHome.addDevice(smartThermostat);

const smartCamera = new Device('Security Camera');
Object.assign(smartCamera, SecurityMonitor); // Camera controls security features
smartHome.addDevice(smartCamera);

// Use the devices
livingRoomLight.turnOnLight();
livingRoomLight.adjustBrightness(75);

smartThermostat.setTemperature(22);
smartThermostat.increaseTemperature();

smartCamera.activateCamera();

// View all devices in the smart home
smartHome.viewDevices();
