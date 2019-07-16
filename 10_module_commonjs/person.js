module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log('Name: '+this.name, '| Age: '+ this.age);
    }
}