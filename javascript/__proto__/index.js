// Create a constructor for Animal
function Animal(species) {
  this.species = species;
}

// Add a method to the Animal prototype
Animal.prototype.move = function() {
  return `${this.species} is moving.`;
};

// Create a constructor for Dog that inherits from Animal
function Dog(name, breed) {
  // Call the parent constructor (Animal), making sure (using Function#call)
  // that "this" is set correctly during the call
  Animal.call(this, 'Dog');

  this.name = name;
  this.breed = breed;
}

// Create a Dog prototype object that inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor property to refer to Dog
Dog.prototype.constructor = Dog;

// Add a bark method to the Dog prototype
Dog.prototype.bark = function() {
  return 'Woof!';
};

// Create a Dog instance
const myDog = new Dog('Fido', 'Labrador');

// Demonstrate the use of Dog-specific and Animal-inherited methods
console.log(myDog.bark()); // Outputs "Woof!"
console.log(myDog.move()); // Outputs "Dog is moving."

// Demonstrate that myDog is an instance of both Dog and Animal
console.log(myDog instanceof Dog);     // true
console.log(myDog instanceof Animal);  // true