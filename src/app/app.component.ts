import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EntryComponent } from './entry/entry.component';
import { EditComponent } from './edit/edit.component';

import { FormService } from './form.service';
import { DeleatComponent } from './delete/delete.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poc';

  constructor(private dialog: MatDialog, public service: FormService) {}
  datas: any = [
    { id: 0, roll: 1, name: 'Sam', maths: 40, english: 60, date: '2021-04-19' },
    { id: 1, roll: 2, name: 'Tom', maths: 40, english: 60, date: '2021-04-19' },
    {
      id: 2,
      roll: 3,
      name: 'Alex',
      maths: 40,
      english: 60,
      date: '2021-04-19',
    },
  ];
  onCreate() {
    const dialogeconfig = new MatDialogConfig();
    dialogeconfig.disableClose = true;
    dialogeconfig.width = '40%';
    dialogeconfig.autoFocus = true;

    let dialogref = this.dialog.open(EntryComponent, dialogeconfig);
    dialogref.afterClosed().subscribe((data) => {
      if (data) {
        this.datas.push(data);
      }
    });
  }
  onEdit(data: any) {
    const dialogeconfig = new MatDialogConfig();
    dialogeconfig.disableClose = true;
    dialogeconfig.width = '40%';
    dialogeconfig.autoFocus = true;
    this.service.handledata(data);
    let dialogrefedit = this.dialog.open(EditComponent, dialogeconfig);
    dialogrefedit.afterClosed().subscribe((data) => this.updatelist(data));
  }
  updatelist(update: any) {
    let index = this.datas.findIndex((x: any) => x.id == update.id);
    this.datas[index] = update;
  }
  dellist(del: any) {
    const removeArr = this.datas.filter((item: any) => item.id !== del.id);
    this.datas = removeArr;
  }
  onDelete(data: any) {
    const dialogeconfig = new MatDialogConfig();
    dialogeconfig.disableClose = false;
    dialogeconfig.width = '40%';
    dialogeconfig.autoFocus = true;
    this.service.handledata(data);
    let dialogrefdel = this.dialog.open(DeleatComponent, dialogeconfig);
    dialogrefdel.afterClosed().subscribe((data) => this.dellist(data));
  }
}
