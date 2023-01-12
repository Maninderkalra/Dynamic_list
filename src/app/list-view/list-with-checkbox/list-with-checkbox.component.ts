import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-with-checkbox',
  templateUrl: './list-with-checkbox.component.html',
  styleUrls: ['./list-with-checkbox.component.css'],
})
export class ListWithCheckboxComponent implements OnInit {
  @Input() listData: any[] = [];
  @Input() lableBeforeCheck: boolean = false;
  @Input() lableAfterCheck: boolean = false;
  @Input() lableAfterCheckWithClass: boolean = false;
  @Output() selectedItemEmitter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  itemClick(data: any) {
    this.selectedItemEmitter.emit(data);
  }
}
