const target = { name: 'John', age: 30 };

const handler = {
  get: function(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    return Reflect.get(...arguments);
  },
  set: function(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(...arguments);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);  // Output: "Getting name" followed by "John"
proxy.age = 35;           // Output: "Setting age to 35"
