export default class Hero {
    public id: number;
    public name: string;
    public gender: string;

    constructor( name: string, gender: string) {
        this.id = 0;
        this.name = name;
        this.gender = gender;
    }
}
