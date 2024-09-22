export const SecurityMonitor = {
    activateCamera() {
        console.log(`${this.name} security camera activated`);
        this.cameraActive = true;
    },
    deactivateCamera() {
        console.log(`${this.name} security camera deactivated`);
        this.cameraActive = false;
    }
};