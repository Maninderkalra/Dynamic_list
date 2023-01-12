import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-list-view',
  templateUrl: './simple-list-view.component.html',
  styleUrls: ['./simple-list-view.component.css'],
})
export class SimpleListViewComponent implements OnInit {
  @Input() listData: any[] = [];
  @Output() selectedItemEmitter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  itemClick(data: any) {
    this.selectedItemEmitter.emit(data);
  }
}
