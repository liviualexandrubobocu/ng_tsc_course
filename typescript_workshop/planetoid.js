"use strict";
exports.__esModule = true;
var size_1 = require("./size");
var Planetoid = /** @class */ (function () {
    function Planetoid() {
        this.size = size_1["default"].SMALL;
        this.radius = 312312;
    }
    Planetoid.prototype.getCircumference = function () {
        return this.radius * Math.PI * 2;
    };
    return Planetoid;
}());
exports["default"] = Planetoid;
