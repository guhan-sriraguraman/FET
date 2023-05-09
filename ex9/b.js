var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var d1 = /** @class */ (function () {
    function d1(name) {
        this.name = name;
    }
    d1.prototype.display = function () {
        document.write("<div class=row'><div class='column'><div class='card'><img src='t1.jpg' width='100%'><h3>Blue Printed Cotton Kurta<br>Rs 844</h3></div></div>");
        document.write("<div class='column'><div class='card'><img src='t2.jpg' width='100%'><h3>Grey Yoke Design Silk Straight Kurta<br>Rs 865</h3></div></div>");
        document.write("<div class='column'><div class='card'><img src='t3.jpg' width='100%'><h3>Blue printed cotton Kurta<br>Rs 826</h3></div></div>");
        document.write("<div class='column'><div class='card'><img src='t4.jpg' width='100%'><h3>Black Striped Rayon kurtha<br>Rs 844</h3></div></div></div>");
    };
    return d1;
}());
var d2 = /** @class */ (function (_super) {
    __extends(d2, _super);
    function d2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    d2.prototype.display = function () {
        document.writeln(this.name);
        _super.prototype.display.call(this);
    };
    return d2;
}(d1));
var obj = new d2("<br><center><h2><i>Our Trending Collections</i></h2></center><br>");
var o1 = new d2("<h1>Thanks for visiting</h1>");
obj.display();
