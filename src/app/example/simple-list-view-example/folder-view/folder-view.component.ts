import { Component, OnInit } from '@angular/core';
import { SimpleList, SimpleListClass } from '../model/simple-list-data';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.css'],
})
export class FolderViewComponent implements OnInit {
  listData: SimpleList[] = [];
  selectedItem: SimpleList;
  constructor() {}

  ngOnInit() {
    this.listData = new SimpleListClass().listData;
  }

  itemClick(event) {
    this.selectedItem = event;
  }
}
