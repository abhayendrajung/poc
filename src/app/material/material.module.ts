import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from "@angular/material/dialog"
import {MatGridListModule} from "@angular/material/grid-list"
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
                                        
const MaterialComponent=[
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponent,
    
  ],
  exports: [ MaterialComponent,
  ]
})
export class MaterialModule { }
