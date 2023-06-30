import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'datatable',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/mydatatable/mydatatable.module').then(
            (m) => m.MydatatableModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
