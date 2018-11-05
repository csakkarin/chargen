import {dbService} from './indexdb.service';
import Hero from '../models/hero';
import { __await } from 'tslib';

class HeroService {

    private readonly dbName: string = 'HeroCreator';
    private readonly dbTable: string = 'Heros';

    public async getAll(): Promise<Hero[]> {
        return await dbService.getAll(this.dbName, 1, this.dbTable) as Hero[];
    }
    public async getById(id: number): Promise<Hero> {
       const hero = await dbService.getById(this.dbName, 1, this.dbTable, id);
       return hero;
    }
    public async addHero(hero: Hero): Promise<Hero> {
        const id = await dbService.save(this.dbName, 1, this.dbTable, hero) as number;
        hero.id = id;
        return hero;
    }
    public async updateHero(hero: Hero): Promise<Hero> {
        await dbService.update(this.dbName, 1, this.dbTable, hero, hero.id);
        return hero;
    }
    public async deleteHero(id: number): Promise<Hero[]> {
        await dbService.delete(this.dbName, 1, this.dbTable, id);
        return this.getAll();
    }

}

export const heroService = new HeroService();
