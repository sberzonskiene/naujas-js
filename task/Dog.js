import { Pet } from "./Pet.js";


/*
export class Dog extends Pet {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = this.furColor;
        this.legsCount = 4;
        this.eyesColor = 2;
        }
    hi() {
        return `Hi, my name is ${this.name}.`;
    }
    voice() {
        return `${this.name}: au au !`;
    }
}
 */


export class Dog extends Pet {
    constructor(name, furColor) {
        super(name, furColor);
        this.sound = 'au';
        this.emoji = '🐕';
    }
}