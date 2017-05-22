import { Component, OnInit } from '@angular/core';

import { BroadcastService } from '../services/broadcast.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list: Array<string> = [];

  constructor(
    private broadcastService: BroadcastService
  ) {

    broadcastService.getBoardIdBroadcast().subscribe(
            id => {
              // this.loadData(id);
            },
            err => {

            },
            () => { /* called when completed */

            }
        );
  }

  ngOnInit() {
    this.list.push("hello");
    this.list.push("world");

  }

}
