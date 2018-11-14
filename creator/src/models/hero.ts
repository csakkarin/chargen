import Class from './class';

export default interface Hero {
    id: number;
    name: string;
    gender: string;
    class: Class;
    stats: AbilityStats;
    alignment: Alignment;
    speed: number;
    maxHP: number;
    currentHP: number;
    savingThrows: AbilityStats;
    armourClass: number;
    initiative: number;
    skills: Skills;
}

export interface Skills{
    acrobatics: number;
    animalHandling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleightOfHand: number;
    stealth: number;
    survival: number;
    hitDiceNum: number;
    hitDice: number;
}

export interface AbilityStats{
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}
export enum Alignment {
    LG = 'Lawful Good',
    NG = 'Neutral Good',
    CG = 'Chaotic Good',
    LN = 'Lawful Neutral',
    NN = 'Neutral',
    CN = 'Chaotic Neutral',
    LW = 'Lawful Evil',
    NE = 'Neutral Evil',
    CE = 'Chaotic Evil',
}