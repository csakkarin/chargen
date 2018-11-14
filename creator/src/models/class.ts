import { Reference, Options } from './util';

export default interface Class {
    index: number;
    name: string;
    hit_die: number;
    proficiency_choices: Options[];
    proficiencies: Reference[];
    saving_throws: Reference[];
    starting_equipment: EquipmentReference;
    class_levels: ClassLevels;
    subclasses: Reference[];
    spellcasting: Spellcasting;
    reference: string;
    reference_id: string;
}

export interface ClassLevels {
    url: string;
    class: string;
}

export interface Spellcasting {
    reference: string;
    reference_id?: string;
    class?: string;
}

export interface EquipmentReference{
    reference_id?: string;
    class?: string;
    reference: string;
}