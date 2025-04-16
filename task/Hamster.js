
/*
export class Hamster {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
    }
    hi() {
        return `Hi, my name is ${this.name}.`;
    }
    voice() {
        return `${this.name}: krimst, krimst !`;
    }
}
*/

import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor(name, furColor) {
        super(name, furColor);
        this.sound = 'krimst';
        this.emoji = '🐹';
    }
}
