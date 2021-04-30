import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog"
import {FormService} from "../form.service"
import {FormGroup ,Validators} from "@angular/forms"

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef <EntryComponent>,
    public service   :FormService) {
     
     }

  ngOnInit(): void {
    this.service.form.reset();
     this.service.form.patchValue({id :Math.floor(Math.random()*1000)})
  }
  onSubmit() {
    console.log("data",this.service.form.value)
    this.dialogRef.close(this.service.form.value);
  }

}
