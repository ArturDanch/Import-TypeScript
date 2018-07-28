import { CarsBaggage } from './carsbaggage.interface'
export interface NewObject {
    name: string;
    wheels: number;
    abilityToStart: boolean;
    passengers: string[];
    carsBaggage: CarsBaggage;
    levelOfLoud: string;
    windowOpen: boolean
}