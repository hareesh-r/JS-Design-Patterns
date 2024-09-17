const person = {
    name: 'Hareesh Rajendran',
    age: 22,
    email: 'hareeshprogrammer@gmail.com',
    country: 'India',
};

// use the "Proxy" keyword to create a proxy
const personProxy = new Proxy(person, {
    // target is same as person
    get: (target, prop) => {
        console.log(`The value of ${prop} is ${target[prop]}`);
        return target[prop];
    },
    set: (target, prop, value) => {
        console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
        target[prop] = value;
        return true;
    },
});

// This will invoke get and then the set function
personProxy.age += 1;

// This will invoke get function
console.log(personProxy.age);