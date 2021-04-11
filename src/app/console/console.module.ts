import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsoleListComponent } from './pages/console-list/console-list.component';
import { SharedModule } from '../shared/shared.module';
import { ConsoleFormComponent } from './components/console-form/console-form.component';



@NgModule({
  declarations: [ConsoleComponent, ConsoleFormComponent, ConsoleListComponent],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    SharedModule
  ]
})
export class ConsoleModule { }
