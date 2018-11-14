export interface Reference {
    name: string;
    reference: ReferenceTypeEnum;
    reference_id: string;
}

export enum ReferenceTypeEnum {
    AbilityScores = 'ability-scores',
    Proficiencies = 'proficiencies',
    Subclasses = 'subclasses',
    Languages = 'languages',
    Subraces = 'subraces',
    Traits = 'traits',
}

export interface Options {
    choose: number;
    type: ReferenceTypeEnum;
    from: Reference[];
}