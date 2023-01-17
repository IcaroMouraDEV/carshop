"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.default {
    constructor(car) {
        const { id, model, year, color, status, buyValue } = car;
        super({ id, model, year, color, status, buyValue });
        this.doorsQty = car.doorsQty;
        this.seatsQty = car.seatsQty;
    }
}
exports.default = Car;
