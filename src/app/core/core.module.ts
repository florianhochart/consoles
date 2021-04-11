import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConsoleService } from './services/http/console.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],

  providers: [
    ConsoleService
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  exports:  [
    HeaderComponent, 
    FooterComponent
  ]
})
export class CoreModule { }
