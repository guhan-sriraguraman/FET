import { Component } from '@angular/core';
import {StuserviceService} from '../stuservice.service';
@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent {
public students:any=[];
constructor(private _stuservice:StuserviceService){}
ngOnInit()
{
  this.students=this._stuservice.getStudents();
}
}
