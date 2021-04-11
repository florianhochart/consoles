import { ConsoleService } from 'src/app/core/services/http/console.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Console } from 'src/app/core/models/console';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css']
})
export class ConsoleFormComponent implements OnInit {

  consoleForm: FormGroup;

  types : string[] = [
    "console de salon",
    "console portable"
  ]

  constructor(private fb: FormBuilder, private _consoleService: ConsoleService, private _dialogRef : MatDialogRef<ConsoleFormComponent>)
   {
      this.consoleForm = this.fb.group({
        name: ['', [Validators.required, this.noWhitespaceValidator]],
        year: ['', [Validators.required]],
        type: ['', [Validators.required]]
      })

   }

  ngOnInit(): void {
  }

  onSubmit(console: Console)
  {
      if(this.consoleForm.valid)
      {
        this._consoleService.post(console).subscribe((next) =>
        {
          this.consoleForm.reset();
          this._dialogRef.close();
        })
      }
  } 

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
