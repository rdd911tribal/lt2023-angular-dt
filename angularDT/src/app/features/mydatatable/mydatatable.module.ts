import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydatatableRoutingModule } from './mydatatable-routing.module';
import { BasicDTComponent } from './components/basicdt/basicdt.component';

@NgModule({
  declarations: [BasicDTComponent],
  imports: [CommonModule, MydatatableRoutingModule],
  exports: [BasicDTComponent],
})
export class MydatatableModule {}
