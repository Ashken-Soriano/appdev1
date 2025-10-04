// 1. Person class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

// 2. Student subclass
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// 3. Example usage
const person1 = new Person("Ashken");
person1.sayHello(); // Hi, I am Ashken

const student1 = new Student("Ashken");
student1.sayHello(); // Hi, I am Ashken (inherited)
student1.study();    // Ashken is studying
