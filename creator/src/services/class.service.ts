import {dbService} from './indexdb.service';
import Class from '../models/class';
import { __await } from 'tslib';
import data from '../assets/reference/5e-SRD-Classes.json';
class ClassService {

    private readonly dbName: string = 'Reference';
    private readonly dbTable: string = 'Classes';
    private readonly dbKey: string = 'index';

    public async getAll(): Promise<Class[]> {
        return await dbService.getAll(this.dbName, 1, this.dbTable, this.dbKey) as Class[];
    }
    public async getById(id: number): Promise<Class> {
       const hero = await dbService.getById(this.dbName, 1, this.dbTable, id, this.dbKey);
       return hero;
    }

    public async setupData() {
        this.getAll().then((classes) => {
            if (classes.length < 1) {
                dbService.load(this.dbName, 1, this.dbTable, this.dbKey, data);
            }
        });      
        //return await dbService.getAll(this.dbName, 1, this.dbTable) as Class[];
    }

}

export const classService = new ClassService();
