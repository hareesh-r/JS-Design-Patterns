    // Observer

    // With the observer pattern, we can subscribe certain objects, 
    // the observers, to another object, called the observable. 
    // Whenever an event occurs, the observable notifies all its observers!

    class Observable {
        constructor() {
            this.observers = [];
        }

        subscribe(func) {
            this.observers.push(func);
        }

        unsubscribe(func) {
            this.observers = this.observers.filter((observer) => observer !== func);
        }

        notify(data) {
            this.observers.forEach((observer) => observer(data));
        }
    }