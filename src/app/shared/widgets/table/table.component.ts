import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableHeader, Todo } from '../../models/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor() {}

  @Input() data: any;
  @Input() columns!: TableHeader[];
  @Output() onClickRow: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  getClickedData(e: Todo) {
    this.onClickRow.emit(e);
  }
}
