import { Component, OnInit } from '@angular/core';

import { ListItem } from '../../models/list-item'

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Array<ListItem> = []

  constructor() {
    // use mock data for now. will replace with db query later.
    this.items = [];

  }

  ngOnInit() {
  }

}
