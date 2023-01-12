import { Component, OnInit } from '@angular/core';
import { ISimpleListIcon, simpleListIconClass } from './model/list-icon-data';

@Component({
  selector: 'app-list-with-icon',
  templateUrl: './list-with-icon.component.html',
  styleUrls: ['./list-with-icon.component.css'],
})
export class ListWithIconComponent implements OnInit {
  listData: ISimpleListIcon[] = [];
  selectedItem: ISimpleListIcon;
  constructor() {}

  ngOnInit() {
    this.listData = new simpleListIconClass().listData;
    console.log('list data: ', this.listData);
  }

  itemClick(event) {
    this.selectedItem = event;
  }
}
