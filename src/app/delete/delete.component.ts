import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog"
import{FormGroup} from "@angular/forms"
import {FormService} from "../form.service"

@Component({
  selector: 'app-deleat',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleatComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef < DeleatComponent>,
    public service   :FormService) { }
data:any;
  ngOnInit(): void {
    this.data=this.service.throwdata()
  }
  onClick() {
    console.log("data to edit",this.service.form.value)
    this.dialogRef.close(this.data);
  }

}
