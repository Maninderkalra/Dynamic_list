import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-list-with-icon',
  templateUrl: './simple-list-with-icon.component.html',
  styleUrls: ['./simple-list-with-icon.component.css'],
})
export class SimpleListWithIconComponent implements OnInit {
  @Input() listData: any[] = [];
  @Output() selectedItemEmitter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  itemClick(data: any) {
    this.selectedItemEmitter.emit(data);
  }
}
