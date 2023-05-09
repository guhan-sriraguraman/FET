interface Home {
    display: ()=>void
   }
var home:Home={
    display():void{
    document.writeln("<img src='a.jpg' style='width=100%;'>")
    }
}
home.display();