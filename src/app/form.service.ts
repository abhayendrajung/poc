import { Injectable } from '@angular/core';
import {FormGroup ,FormControl ,Validators} from "@angular/forms"
@Injectable({
  providedIn: 'root'
})
export class FormService {
 localdata:any;

  constructor( ) {
   
   }
  form: FormGroup= new FormGroup({
    id: new FormControl(),
    roll: new FormControl ("",Validators.required),
    name: new FormControl("",Validators.required) ,
    maths:new FormControl(),
    english:new FormControl(),
    date: new FormControl(),
  })
  handledata(data:any){
this.localdata=data;


  }
  throwdata(){
    return this.localdata;
  }
  
}
