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
var a = /** @class */ (function () {
    function a(name) {
        this.name = name;
    }
    return a;
}());
var a1 = /** @class */ (function (_super) {
    __extends(a1, _super);
    function a1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    a1.prototype.display = function () {
        document.writeln(this.name);
        document.write("<div class=row'><div class='column'><div class='card'><img src='b1.jpg' width='100%'></div></div>");
        document.write("<div class='column'><div class='card'><img src='b2.jpg' width='100%'></div></div>");
        document.write("<div class='column'><div class='card'><img src='b3.jpg' width='100%'></div></div>");
        document.write("<div class='column'><div class='card'><img src='b4.jpg' width='100%'></div></div></div><br><br>");
    };
    return a1;
}(a));
var a2 = /** @class */ (function (_super) {
    __extends(a2, _super);
    function a2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    a2.prototype.display = function () {
        document.writeln(this.name);
        document.write("<div class=row'><div class='column'><div class='card'><img src='c1.jpg' width='100%'></div></div>");
        document.write("<div class='column'><div class='card'><img src='c2.jpg' width='100%'></div></div>");
        document.write("<div class='column'><div class='card'><img src='c3.jpg' width='100%'></div></div>");
        document.write("<div class='column'><div class='card'><img src='c4.jpg' width='100%'></div></div></div>");
    };
    return a2;
}(a));
var obj = new a1("<br><center><h2><i>Watch Collections</i></h2></center><br>");
obj.display();
var obj = new a2("<br><center><h2><i>Earphone Collections</i></h2></center><br>");
obj.display();
