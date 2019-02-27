// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `hi ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // calls parent constructor function
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;

    }
    return description;
  }
};

class Traveller extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  hasHome() {
    return !!this.home;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHome()) {
      greeting += ` I'm visiting from ${this.home}`;

    }
    return greeting;
  }
};

const me = new Traveller('Matt Smith', 43, 'Portland');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());