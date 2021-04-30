import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module"
import { EntryComponent } from './entry/entry.component'
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';
import { DeleatComponent } from './delete/delete.component'
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EditComponent,
    DeleatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
