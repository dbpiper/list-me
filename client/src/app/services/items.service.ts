import { ListItem } from '../models/list-item';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ItemsService {
    items = [];

    constructor(private http: Http) {
      // this.loadItems();
    }

    loadItems() {
      this.http.get('/api/items')
          .map(res => res.json())
          .subscribe(
              itemData => this.items = itemData,
              err => console.error("Error loading items: " + err)
          );
    }

    createItem(item: ListItem) {
      const headers = new Headers();
      headers.append('Content-Type',
          'application/json; charset=utf-8');

      this.http.post('/api/items', item, headers)
          .subscribe(
            () => {},
            err => console.error(err)
          );
    }



  }
