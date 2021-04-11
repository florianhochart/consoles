import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ConsoleListComponent } from './pages/console-list/console-list.component';
import { ConsoleComponent } from './console.component';

const routes: Routes = [
  {
    path: '',
    component: ConsoleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: "consoles"
      },
      {
        path: 'consoles',
        component: ConsoleListComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
