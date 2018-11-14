import {dbService} from './indexdb.service';
import { __await } from 'tslib';
import data from '../assets/reference/5e-SRD-Classes.json';
import { raceService } from './race.service';
import { classService } from './class.service';
import idb from 'idb';
class ReferenceDBService {

    private readonly dbName: string = 'Reference';
    private readonly dbTables: string[] = ['Classes','Races'];
    private readonly dbKey: string = 'index';
    private readonly dbVersion: number = 1;

    public async setupData() {
       const db = await idb.open(this.dbName, this.dbVersion, (upgradeDb) => {
            this.dbTables.forEach((table) => {
                if (!upgradeDb.objectStoreNames.contains(table)) {
                    upgradeDb.createObjectStore(table, { keyPath: this.dbKey, autoIncrement: true});
                }
            });
        });
       await raceService.setupData();
       await classService.setupData();
       db.close();
    }

}

export const referencedb = new ReferenceDBService();
