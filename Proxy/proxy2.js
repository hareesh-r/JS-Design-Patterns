const person = {
    name: 'Hareesh Rajendran',
    age: 22,
    email: 'hareeshprogrammer@gmail.com',
    country: 'India',
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(
                `Hmm.. this property doesn't seem to exist on the target object`
            );
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`);
            return obj[prop];
        }
    },
    set: (obj, prop, value) => {
        if (prop === "age" && typeof value !== "number") {
            console.log(`Sorry, you can only pass numeric values for age.`);
        } else if (prop === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
        } else {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
            obj[prop] = value;
        }
    },
});

// let's change to an invalid name
personProxy.name = 'k';
console.log(personProxy.name);

// let's try an invalid age
console.log(personProxy.age = 'asdf');
console.log(personProxy.age);

// let's try a valid age
personProxy.age = 50;
console.log(personProxy.age);

// let's try a valid name
personProxy.name = 'Hareesh'
console.log(personProxy.name);