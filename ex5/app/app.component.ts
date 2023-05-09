import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex5a';
  submitted=false;
  courses:string[]=[
    "freeCodeCamp News",
    "freeCodeCamp YouTube Channel",
    "freeCodeCamp Forum",
    "Other"
   ]
  constructor(private fb:FormBuilder){}
  registrationform=this.fb.group({
    fname:['',[Validators.required,Validators.pattern("[A-za-z]{8}")]],
    lname:['',[Validators.required]],
    email:['',[Validators.required]],
    pwd:['',[Validators.required,Validators.pattern("[A-za-z0-9]{8}")]],
    c1:['',[Validators.required]],
    r1:['',[Validators.required]],
    bio:['',[Validators.required]],
    check1:['',[Validators.required]],
  })
  onsubmit()
  {
    this.submitted=true;
    if (this.registrationform.valid) {
      alert('Form Submitted succesfully!!!');
    }
  }
}
