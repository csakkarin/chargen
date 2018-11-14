import { dbService } from './indexdb.service';
import Race from '../models/races';
import { __await } from 'tslib';
import data from '../assets/reference/5e-SRD-Races.json';
class RaceService {

    private readonly dbName: string = 'Reference';
    private readonly dbTable: string = 'Races';
    private readonly dbKey: string = 'index';

    public async getAll(): Promise<Race[]> {
        return await dbService.getAll(this.dbName, 1, this.dbTable, this.dbKey) as Race[];
    }
    public async getById(id: number): Promise<Race> {
        const hero = await dbService.getById(this.dbName, 1, this.dbTable, id, this.dbKey);
        return hero;
    }

    public async setupData() {
        this.getAll().then((races) => {
            if (races.length < 1) {
                dbService.load(this.dbName, 1, this.dbTable, this.dbKey, data);
            }
        });
        //return await dbService.getAll(this.dbName, 1, this.dbTable) as Class[];
    }

}

export const raceService = new RaceService();
