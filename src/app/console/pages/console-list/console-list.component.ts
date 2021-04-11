import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Console } from 'src/app/core/models/console';
import { ConsoleFormData } from 'src/app/core/models/console-form-data';
import { ConsoleService } from 'src/app/core/services/http/console.service';
import { ConsoleFormComponent } from '../../components/console-form/console-form.component';


@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit {
  consoles$: Observable<Console[]>;
  toto = ['id', 'name', 'year', 'type', 'update', 'delete'];

  constructor(
    private _consoleService: ConsoleService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
   this.loadData();
  }
  loadData() {
    this.consoles$ = this._consoleService.get();
  }
  delete(console: Console) {
    this._consoleService.delete(console).subscribe(next => {
      this.loadData();
    })
  }

  openDialog(toUpdate: boolean, console: Console) {

    const consoleFormData: ConsoleFormData = {
      toUpdate: toUpdate,
      console: console
    };

    const dialogRef = this.dialog.open(ConsoleFormComponent, {
      data: consoleFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

}
