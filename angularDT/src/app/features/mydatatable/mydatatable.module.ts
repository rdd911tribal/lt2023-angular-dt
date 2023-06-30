import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydatatableRoutingModule } from './mydatatable-routing.module';
import { BasicDTComponent } from './components/basicdt/basicdt.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [BasicDTComponent],
  imports: [CommonModule, DataTablesModule.forRoot(), MydatatableRoutingModule],
  exports: [BasicDTComponent],
})
export class MydatatableModule {}
