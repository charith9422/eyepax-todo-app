import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { TableHeader, Todo } from 'src/app/shared/models/data';
import { TodosTableConfig } from 'src/app/shared/utils/table-configs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private dataService: DataService) {}

  todos: Todo[] = [];
  columns: TableHeader[] = [];

  ngOnInit(): void {
    this.setTableConfigs();
    this.getTodoList();
  }

  getTodoList() {
    this.dataService.getTodos().subscribe((d) => {
      this.todos = d;
    });
  }

  setTableConfigs() {
    this.columns = TodosTableConfig;
  }

  getRowData(e: Todo) {
    this.dataService.getTodo(e.id).subscribe((d) => {
      console.log(d);
    });
  }
}
