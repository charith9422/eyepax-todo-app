import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './widgets/table/table.component';
import { TableModule } from 'primeng/table';
import { PageNotFoundComponent } from './widgets/page-not-found/page-not-found.component';

@NgModule({
  declarations: [TableComponent, PageNotFoundComponent],
  imports: [CommonModule, TableModule],
  exports: [TableComponent],
})
export class SharedModule {}
