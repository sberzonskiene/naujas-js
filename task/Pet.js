/*
export class Pet {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.legsCount = 4;
        this.eyesColor = 2;
}

hi() {
    return `Hi, my name is ${this.name}.`;
}
voice() {
    const sound = (' ' + this.sound(repete2));
    return `${this.name}: miau miau !`;
    }
}
*/

import { Animal } from "./Animal.js";

export class Pet extends Animal {
    constructor(name, furColor) {
        super(name);
        this.furColor = furColor;
        this.legsCount = 4;
        this.eyesCount = 2;
        this.sound = 'au miau krimst';
        this.emoji = '🐕🐈🐹';
    }

    voice() {
        const sound = (' ' + this.sound).repeat(2);
        const emojies = this.emoji.repeat(2);
        return `${this.name}:${sound} ${emojies}!`;
    }
}