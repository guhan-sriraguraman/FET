class d1{
    name: string;
    constructor(name:string) { 
    this.name = name; 
    } 
    display():void{
      document.write("<div class=row'><div class='column'><div class='card'><img src='t1.jpg' width='100%'><h3>Blue Printed Cotton Kurta<br>Rs 844</h3></div></div>")
      document.write("<div class='column'><div class='card'><img src='t2.jpg' width='100%'><h3>Grey Yoke Design Silk Straight Kurta<br>Rs 865</h3></div></div>")
      document.write("<div class='column'><div class='card'><img src='t3.jpg' width='100%'><h3>Blue printed cotton Kurta<br>Rs 826</h3></div></div>")
      document.write("<div class='column'><div class='card'><img src='t4.jpg' width='100%'><h3>Black Striped Rayon kurtha<br>Rs 844</h3></div></div></div>")
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