import { Options, Reference } from './util';

export default interface Race {
    index:                        number;
    name:                         string;
    speed:                        number;
    ability_bonuses:              number[];
    alignment:                    string;
    age:                          string;
    size:                         string;
    size_description:             string;
    starting_proficiencies:       Reference[];
    starting_proficiency_options: Options;
    languages:                    Reference[];
    language_options:             Options;
    language_desc:                string;
    traits:                       Reference[];
    subraces:                     Reference[];
    reference:                    string;
    reference_id:                 string;
    trait_options?:               Options;
}