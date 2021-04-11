import { ConsoleService } from 'src/app/core/services/http/console.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Console } from 'src/app/core/models/console';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsoleFormData } from 'src/app/core/models/console-form-data';

@Component({
  selector: 'app-console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css']
})
export class ConsoleFormComponent implements OnInit {

  consoleForm: FormGroup;
  formAction : string;

  types : string[] = [
    "console de salon",
    "console portable"
  ]

  constructor(private fb: FormBuilder,
    private _consoleService: ConsoleService,
    private _dialogRef: MatDialogRef<ConsoleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConsoleFormData)
   {
    this.formAction = data.toUpdate ? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.consoleForm = this.fb.group({
        name: [data.console.name, [Validators.required, this.noWhitespaceValidator]],
        year: [data.console.year, [Validators.required]],
        type: [data.console.type, [Validators.required]]
      })
    }
    else {
      this.consoleForm = this.fb.group({
        name: ['', [Validators.required, this.noWhitespaceValidator]],
        year: ['', [Validators.required]],
        type: ['', [Validators.required]]
      })
    }

   }

  ngOnInit(): void {
  }

  onSubmit(console: Console) {
    if (this.consoleForm.valid) {

      if (this.data.toUpdate) {
        console.id = this.data.console.id;
        this._consoleService.put(console).subscribe((next) => {
          this.consoleForm.reset();
          this._dialogRef.close();
        })
      } else {
        this._consoleService.post(console).subscribe((next) => {
          this.consoleForm.reset();
          this._dialogRef.close();
        })
      }


    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
