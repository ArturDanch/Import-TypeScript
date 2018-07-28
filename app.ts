import { NewObject } from './newObject.interface'
let newObject: NewObject = {
    name: 'Jiguli',
    wheels: 4,
    abilityToStart: true,
    passengers: ['Ded Panas', 'Svekruha Luba', 'Zit Mykola'],
    carsBaggage: {
        DedPanas: 'Vodka',
        SvekruhaLuba: 'Radeiko',
        ZitMykola: 'Zakuska'
    },
    levelOfLoud: 'High',
    windowOpen: true
};

console.log(newObject.carsBaggage);