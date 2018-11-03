<style scoped lang="scss" src="./HelloWorld.scss"></style>
<template src="./HelloWorld.html"></template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  public mounted() {
    this.test();
  }

  private test() {
    let request = window.indexedDB.open('EXAMPLE_DB', 1);
    request.onupgradeneeded = function(event: any) {
      const db = event.target.result;
      const store = db.createObjectStore('products', { keyPath: 'id' });
    };
    request.onsuccess = function(event: any) {
      // some sample products data
      const products = [
        { id: 1, name: 'Red Men T-Shirt', price: '$3.99' },
        { id: 2, name: 'Pink Women Shorts', price: '$5.99' },
        { id: 3, name: 'Nike white Shoes', price: '$300' }
      ];

      // get database from event
      const db = event.target.result;

      // create transaction from database
      const transaction = db.transaction('products', 'readwrite');

      // add success event handleer for transaction
      // you should also add onerror, onabort event handlers
      transaction.onsuccess = function(event: any) {
        console.log('[Transaction] ALL DONE!');
      };

      // get store from transaction
      // returns IDBObjectStore instance
      const productsStore = transaction.objectStore('products');

      // put products data in productsStore
      products.forEach(function(product) {
        const db_op_req = productsStore.add(product); // IDBRequest
      });
    };
  }
}
</script>