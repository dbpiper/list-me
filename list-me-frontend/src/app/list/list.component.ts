import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.list.push("hello");
    this.list.push("world");
  }

}
