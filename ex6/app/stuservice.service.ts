import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StuserviceService {

  constructor() { }
  getStudents(){
    return[
      {name:"Abarna",roll_no:"20ISR001",cgpa:"9.55",address:"Tiruchengode"},
      {name:"Aishwarya",roll_no:"20ISR002",cgpa:"8.55",address:"Erode"},
      {name:"Anusuya",roll_no:"20ISR003",cgpa:"7.55",address:"Tiruchy"},
      {name:"Anusurya",roll_no:"20ISR004",cgpa:"7.95",address:"Erode"},
      {name:"Gokilavani",roll_no:"20ISR005",cgpa:"9.75",address:"Tirupur"},
      {name:"Harini",roll_no:"20ISR006",cgpa:"9.00",address:"Erode"},
      {name:"Harsha Vardhini",roll_no:"20ISR007",cgpa:"8.90",address:"Coimbatore"},
      {name:"Mathu Priya",roll_no:"20ISR008",cgpa:"9.05",address:"Kavunthapadi"},
      {name:"Mothika",roll_no:"20ISR009",cgpa:"9.00",address:"Erode"},
      {name:"Nithya",roll_no:"20ISR010",cgpa:"8.90",address:"Salem"},
      {name:"Ragavi",roll_no:"20ISR011",cgpa:"9.20",address:"Kunnathur"},
      {name:"Roja",roll_no:"20ISR012",cgpa:"9.15",address:"Tiruppur"}
    ];
  }
}
