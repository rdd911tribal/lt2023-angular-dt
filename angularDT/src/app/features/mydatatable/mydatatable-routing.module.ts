import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDTComponent } from './components/basicdt/basicdt.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicDTComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydatatableRoutingModule {}
