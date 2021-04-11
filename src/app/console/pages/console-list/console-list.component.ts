import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Console } from 'src/app/core/models/console';
import { ConsoleService } from 'src/app/core/services/http/console.service';
import { ConsoleFormComponent } from '../../components/console-form/console-form.component';


@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit {
  consoles$: Observable<Console[]>;
  toto = ['id', 'name', 'year', 'type'];

  constructor(
    private _consoleService: ConsoleService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
   this.loadData();
  }
  loadData(){
    this.consoles$ = this._consoleService.get();
  }
  openDialog() {
    console.log('OPEN');
    const dialogRef = this.dialog.open(ConsoleFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Creation: ${result}`);
      this.loadData();
    });
  }

}
