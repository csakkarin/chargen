import idb from 'idb';

class DBService {

    public async  getAll(dbname: string, version: number, table: string) {
      const db = await this.openDb(dbname, version, table);
      const tx = db.transaction(table, 'readonly');
      const store = tx.objectStore(table);
      const items = await store.getAll();
      db.close();
      return items;
    }
    public async  getById(dbname: string, version: number, table: string, id: any) {
      const db = await this.openDb(dbname, version, table);
      const tx = db.transaction(table, 'readonly');
      const store = tx.objectStore(table);
      const item = await store.get(id);
      db.close();
      return item;
  }
    public async save(dbname: string, version: number, table: string, value: any) {
      const db = await this.openDb(dbname, version, table);
      const tx = db.transaction(table, 'readwrite');
      const store = tx.objectStore(table);
      const id = await store.put(value);
      db.close();
      return id;
    }
    public async update(dbname: string, version: number, table: string, value: any, key: any) {
      const db = await this.openDb(dbname, version, table);
      const tx = db.transaction(table, 'readwrite');
      const store = tx.objectStore(table);
      const id = store.put(value, key);
      db.close();
      return id;
    }

    public async delete(dbname: string, version: number, table: string, key: any) {
      const db = await this.openDb(dbname, version, table);
      const tx = db.transaction(table, 'readwrite');
      const store = tx.objectStore(table);
      const id = store.delete(key);
      db.close();
      return id;
    }

    private async openDb(dbname: string, version: number, table: string) {
      return await idb.open(dbname, version, (upgradeDb) => {
        if (!upgradeDb.objectStoreNames.contains(table)) {
            upgradeDb.createObjectStore(table, { keyPath: 'id', autoIncrement: true});
        }
      });
    }

  }

export const dbService = new DBService();
