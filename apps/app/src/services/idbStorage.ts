// src/storage/index.ts
import { get, set, del } from "idb-keyval";

const idbStorage = {
  getItem: async (name: string): Promise<string | null> => {
    //console.log(`${name} has been retrieved from IndexedDB`);
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    //console.log(`${name} with value ${value} has been saved to IndexedDB`);
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    //console.log(`${name} has been removed from IndexedDB`);
    await del(name);
  },
};

export default idbStorage;
