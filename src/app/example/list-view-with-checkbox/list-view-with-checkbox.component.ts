import { Component, OnInit } from '@angular/core';
import { checkBoxList, IListCheckBox } from './model/check-box-data';

@Component({
  selector: 'app-list-view-with-checkbox',
  templateUrl: './list-view-with-checkbox.component.html',
  styleUrls: ['./list-view-with-checkbox.component.css'],
})
export class ListViewWithCheckboxComponent implements OnInit {
  listData: IListCheckBox[] = [];
  selectedItem: IListCheckBox;
  constructor() {}

  ngOnInit() {
    this.listData = new checkBoxList().listData;
  }

  itemClick(event) {
    this.selectedItem = event;
  }
}
