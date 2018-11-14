import idb from 'idb';

class DBService {

    public async  getAll(dbname: string, version: number, table: string, keyPath: string = 'id') {
      const db = await this.openDb(dbname, version, table, keyPath);
      const tx = db.transaction(table, 'readonly');
      const store = tx.objectStore(table);
      const items = await store.getAll();
      db.close();
      return items;
    }
    public async  getById(dbname: string, version: number, table: string, id: any, keyPath: string = 'id') {
      const db = await this.openDb(dbname, version, table, keyPath);
      const tx = db.transaction(table, 'readonly');
      const store = tx.objectStore(table);
      const item = await store.get(id);
      db.close();
      return item;
  }
    public async save(dbname: string, version: number, table: string, value: any, keyPath: string = 'id') {
      const db = await this.openDb(dbname, version, table, keyPath);
      const tx = db.transaction(table, 'readwrite');
      const store = tx.objectStore(table);
      const id = await store.put(value);
      db.close();
      return id;
    }
    public async update(dbname: string, version: number, table: string, value: any, key: any, keyPath: string = 'id') {
      const db = await this.openDb(dbname, version, table, keyPath);
      const tx = db.transaction(table, 'readwrite');
      const store = tx.objectStore(table);
      const id = store.put(value, key);
      db.close();
      return id;
    }

    public async delete(dbname: string, version: number, table: string, key: any, keyPath: string = 'id') {
      const db = await this.openDb(dbname, version, table, keyPath);
      const tx = db.transaction(table, 'readwrite');
      const store = tx.objectStore(table);
      const id = store.delete(key);
      db.close();
      return id;
    }

    public async load(dbname: string, version: number, table: string, keyPath: string, data: any[]) {
      const db = await this.openDb(dbname, version, table, keyPath);
      const tx = db.transaction(table, 'readwrite');
      const store = tx.objectStore(table);
      data.forEach((d) => store.add(d));
    }

    private async openDb(dbname: string, version: number, table: string, key: string) {
      return await idb.open(dbname, version, (upgradeDb) => {
        if (!upgradeDb.objectStoreNames.contains(table)) {
            upgradeDb.createObjectStore(table, { keyPath: key, autoIncrement: true});
        }
      });
    }

  }

export const dbService = new DBService();
