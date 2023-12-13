// // enum VehicleType {
// //   car,
// //   motorcycle
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
var LivePlace;
(function (LivePlace) {
    LivePlace[LivePlace["river"] = 0] = "river";
    LivePlace[LivePlace["ocean"] = 1] = "ocean";
    LivePlace[LivePlace["sea"] = 2] = "sea";
})(LivePlace || (LivePlace = {}));
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getInfo = function () {
        console.log(this.name, this.age);
    };
    return Animal;
}());
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, livePlace, kill) {
        var _this = _super.call(this, name, age) || this;
        _this.livePlace = livePlace;
        _this.kill = kill;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("uzur baliq");
    };
    Fish.prototype.getInfo = function () {
        console.log("Fish: ".concat(this.name, ", Age: ").concat(this.age, ",Color: ").concat(LivePlace[this.livePlace], ",kill: ").concat(this.kill));
    };
    return Fish;
}(Animal));
var myFish = new Fish("Nemo", 2, LivePlace.ocean, "nese");
myFish.getInfo();
myFish.swim();
