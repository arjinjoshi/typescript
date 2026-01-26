// Create a Vehicle interface with properties like Model, vehicle type (car, bike, scooter, truck, etc), wheels, manufactureYear, whether the car isElectric or not.

// Be creative and add more properties as you see fit.

// Then write a function that takes a Vehicle object as a parameter and outputs the details.

interface Vehicle{
    Model: string;
    vehicleType: string;
    manufactureYear: number;
    isElectric: boolean;
    noOfTyres: number;
    vehicleColor: string;
}

function vehicleInfo({Model, vehicleType, manufactureYear, isElectric, noOfTyres, vehicleColor}:Vehicle): void {
    console.log(`Model=${Model}\nvehicleType = ${vehicleType}\nmanufactureYear = ${manufactureYear}\nisElectric = ${isElectric}\nnoOfTyres = ${noOfTyres}\nvehicleColor = ${vehicleColor}`);
}

const vehicle1: Vehicle = {
    Model: "Yamaha-FZS-V3",
    vehicleType: "Bike",
    manufactureYear: 2025,
    isElectric: false,
    noOfTyres: 2,
    vehicleColor: "Grey"
}

vehicleInfo(vehicle1);