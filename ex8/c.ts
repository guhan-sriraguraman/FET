class a{
    name:string;
    constructor(name:string) { 
    this.name = name; 
    } 
}
class a1 extends a{
    display():void{
    document.writeln(this.name);
    document.write("<div class=row'><div class='column'><div class='card'><img src='b1.jpg' width='100%'></div></div>")
      document.write("<div class='column'><div class='card'><img src='b2.jpg' width='100%'></div></div>")
      document.write("<div class='column'><div class='card'><img src='b3.jpg' width='100%'></div></div>")
      document.write("<div class='column'><div class='card'><img src='b4.jpg' width='100%'></div></div></div><br><br>")
    }
}
class a2 extends a{
    display():void{
    document.writeln(this.name);
    document.write("<div class=row'><div class='column'><div class='card'><img src='c1.jpg' width='100%'></div></div>")
      document.write("<div class='column'><div class='card'><img src='c2.jpg' width='100%'></div></div>")
      document.write("<div class='column'><div class='card'><img src='c3.jpg' width='100%'></div></div>")
      document.write("<div class='column'><div class='card'><img src='c4.jpg' width='100%'></div></div></div>")
    }
   }
   var obj = new a1("<br><center><h2><i>Watch Collections</i></h2></center><br>");
   obj.display();
   var obj = new a2("<br><center><h2><i>Earphone Collections</i></h2></center><br>");
   obj.display();   