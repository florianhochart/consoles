import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Console } from '../core/models/console';
import { ConsoleService } from '../core/services/http/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  consoles$ : Observable<Console[]>

  constructor() { }

  ngOnInit(): void {

  }

}
