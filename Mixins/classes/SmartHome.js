export class SmartHome {
    constructor() {
        this.devices = [];
    }

    addDevice(device) {
        this.devices.push(device);
        console.log(`Device ${device.name} has been added to the smart home.`);
    }

    viewDevices() {
        console.log('Current devices in the smart home:', this.devices.map(d => d.name));
    }
}