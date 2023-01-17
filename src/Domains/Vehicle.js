"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(vehicle) {
        this.id = vehicle.id;
        this.model = vehicle.model;
        this.year = vehicle.year;
        this.color = vehicle.color;
        this.status = vehicle.status;
        this.buyValue = vehicle.buyValue;
    }
}
exports.default = Vehicle;
