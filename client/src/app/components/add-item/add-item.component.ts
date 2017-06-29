import { Component, OnInit } from '@angular/core';

import { ListItem } from '../../models/list-item'
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [ItemsService]
})
export class AddItemComponent implements OnInit {

  model: ListItem;

  constructor(private itemsService: ItemsService) {
    //TODO: fetch new id by getting id of last item in DB
    this.model = new ListItem(0, '');
  }

  ngOnInit() {
  }

  onSubmit() {
      this.itemsService.createItem(this.model);
  }

}
