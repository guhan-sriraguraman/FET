var Home = /** @class */ (function () {
    function Home() {
    }
    Home.prototype.display = function () {
        document.writeln("<img src='a1.jpg' style='float:left;width=250px;height=350px;margin-right:15px;'>");
        document.writeln("<h1 style='color:seashell;padding-top:100px;font-size:50px'>Let's Create Your Own Style</h1><br>");
        document.writeln("<h3 style='padding-top:20px;font-size:30px'><i>New, Amazing Stuff is here!!</i></h3>");
        document.writeln("<h5  style='padding-top:40px;font-size:25px'>Shop today and get 20% discount</h5>");
    };
    return Home;
}());
var obj = new Home();
obj.display();
