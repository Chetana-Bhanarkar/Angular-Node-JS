import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './pages/emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees-detail';

  constructor(private _dailog : MatDialog){}

  getbox(){
    this._dailog.open(EmpAddEditComponent)
  }


}
