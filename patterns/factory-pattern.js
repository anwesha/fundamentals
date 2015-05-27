// Factory pattern : type of creational design pattern
// - focuses on object creation
// - should be used when multiple types of objects needs to be created but object creation
//   is complicated so it needs to be abstracted from the user
// - dont use it for simple usecases


function Car(options) {
    this.make = options.make || 'golf';
    this.color = options.color || 'red';
};

function Truck(options) {
    this.wheels = options.wheels || 8;
    this.color = options.color || 'red';
};

function VehicleFactory() {};

VehicleFactory.prototype = {
    vehicleClass: Car, // default
    createVehicle: function (options) {
        switch (options.vehicleType) {
            case "car":
                this.vehicleClass = Car;
                break;
            case "truck":
                this.vehicleClass = Truck;
                break;
            default:
                this.vehicleClass = Car;
        }

        return new this.vehicleClass(options);
    }
};


var vehicle = new VehicleFactory();

var carOpts = {
    vehicleType: "car",
    make: "golf",
    color: "blue"
};

var truckOpts = {
    vehicleType: "truck",
    color: "green"
};

var car = vehicle.createVehicle(carOpts);
var truck = vehicle.createVehicle(truckOpts);

console.log(car);
console.log(truck);
