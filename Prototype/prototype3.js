// Base Dog class (Constructor function)
class Dog {
  constructor(name) {
      this.name = name; // Each instance will have its own "name" property
  }

  // Instance method: Shared by all instances through the prototype
  bark() {
      console.log("Woof!");
  }
}

// Adding a method to the prototype (not defined inside the class)
Dog.prototype.play = function() {
  console.log(`${this.name} is playing!`);
};

// Now, let's create a subclass using prototype-based inheritance (via class syntax)
class SuperDog extends Dog {
  constructor(name) {
      super(name); // Calls the constructor of the Dog class
  }

  // Instance method specific to SuperDog class
  fly() {
      console.log(`${this.name} is flying!`);
  }
}

// Create instances
const dog1 = new SuperDog("Daisy");
const dog2 = new Dog("Max");

// Instance of SuperDog can use both inherited and its own methods
dog1.bark();  // Inherited from Dog class
dog1.play();  // Inherited from Dog prototype
dog1.fly();   // Method specific to SuperDog

// Instance of Dog cannot use SuperDog methods
dog2.bark();  // Works, as it's part of the Dog class
dog2.play();  // Works, as it's part of Dog's prototype
// dog2.fly(); // Error: dog2.fly is not a function (Only SuperDog instances have this method)
