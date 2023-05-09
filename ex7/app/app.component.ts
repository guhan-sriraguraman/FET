import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName={firstName:'Home', secondName:'Town'}
changeValue()
{
this.fullName.firstName="Warm";
this.fullName.secondName="Welcome";
}
  employees: any[] = [  
    {  
        i1:"Doll Up Your Walls" 
    },  
    {  
      i1:"Add Stylish Accents To Your Home"
    },  
    {  
      i1:"Do Fantastic Furnishing"
    },  
    {  
      i1:"Brighten Up Your Home"
    },  
];  

}
