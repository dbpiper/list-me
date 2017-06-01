import { Component, OnInit } from '@angular/core';

import { ListItem } from '../../models/list-item'

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  model: ListItem;

  constructor() {
    //TODO: fetch new id by getting id of last item in DB
    this.model = new ListItem(0, '');
  }

  ngOnInit() {
  }

}
