class d1{
    name: string;
    constructor(name:string) { 
    this.name = name; 
    } 
    display():void{
      document.write("<div class=row'><div class='column'><div class='card'><img src='t1.jpg' width='100%'><h3>Haldi Hues<br>$500</h3></div></div>")
      document.write("<div class='column'><div class='card'><img src='t2.jpg' width='100%'><h3>Women Krutha<br>$650</h3></div></div>")
      document.write("<div class='column'><div class='card'><img src='t3.jpg' width='100%'><h3>Princess Gown For kids<br>$1500</h3></div></div>")
      document.write("<div class='column'><div class='card'><img src='t4.jpg' width='100%'><h3>Ethnic wear for boys<br>$59</h3></div></div></div>")
    }
   }
   class d2 extends d1{
    display():void{
    document.writeln(this.name);
    super.display();
    }
   }
   var obj = new d2("<br><center><h2><i>Our Trending Collections</i></h2></center><br>");
   obj.display();