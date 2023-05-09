import { Component } from '@angular/core';
import {StuserviceService} from '../stuservice.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  public students:any=[];
  constructor(private _stuservice:StuserviceService){}
  ngOnInit()
  {
    this.students=this._stuservice.getStudents();
  }
}
