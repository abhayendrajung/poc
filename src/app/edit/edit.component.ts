import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  data: any;
  constructor(
    private dialogRef: MatDialogRef<EditComponent>,
    public service: FormService
  ) {}

  ngOnInit(): void {
    this.data = this.service.throwdata();
    console.log('emitted data', this.data);
    this.service.form.setValue({
      id: this.data.id,
      roll: this.data.roll,
      name: this.data.name,
      english: this.data.english,
      maths: this.data.maths,
      date: this.data.date,
    });
  }
  onSubmit() {
    console.log('data to edit', this.service.form.value);
    this.dialogRef.close(this.service.form.value);
  }
}
