import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [SharedModule],
  exports: [TodoRoutingModule],
  providers: [],
})
export class TodoModule {}
