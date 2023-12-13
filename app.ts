// // enum VehicleType {
// //   car,
// //   motorcycle

// // }
// // enum engineType {
// //   doch,
// //   turbo
// // }
// // interface Vehicle {
// //   brandName: string,
// //   modelName: string,
// //   year: Date,
// //   fuelCapacity: number,
// //   fuelFor1Km: number,
// //   engine: engineType,
// //   getInfo(): string,
// //   drive(km: number): string,
// //   currentFuel: number,
// //   millage: number,

// // }
// // class motorcycle implements Vehicle {

// //   constructor(
// //     public vehicleType: VehicleType,
// //     public brandName: string,
// //     public modelName: string,
// //     public year: Date,
// //     public fuelCapacity: number,
// //     public fuelFor1Km: number,
// //     public engine: engineType,
// //     public currentFuel: number,
// //     public millage: number
// //   ) { }
// //   getInfo(): string {
// //     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
// //   }
// //   drive(km: number): string {
// //     if (km <= this.currentFuel / this.fuelFor1Km) {
// //       let Current: number = this.currentFuel - km * this.fuelFor1Km
// //       let millageNow: number = this.millage + km
// //       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
// //     }
// //     else {
// //       return `Salam`
// //     }



// //   }
// // }
// // const myMoto = new motorcycle(VehicleType.motorcycle, 'suzuki', '911kms', new Date(2022, 0, 1), 60, 12, engineType.doch, 230, 20000);
// // console.log(myMoto.getInfo());
// // console.log(myMoto.drive(2));

// // class Car implements Vehicle {

// //   constructor(
// //     public vehicleType: VehicleType,
// //     public brandName: string,
// //     public modelName: string,
// //     public year: Date,
// //     public fuelCapacity: number,
// //     public fuelFor1Km: number,
// //     public engine: engineType,
// //     public currentFuel: number,
// //     public millage: number


// //   ) { }
// //   getInfo(): string {
// //     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
// //   }
// //   drive(km: number): string {
// //     if (km <= this.currentFuel / this.fuelFor1Km) {
// //       let Current: number = this.currentFuel - km * this.fuelFor1Km
// //       let millageNow: number = this.millage + km
// //       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
// //     }
// //     else {
// //       return `Salam`
// //     }



// //   }
// // }
// // console.log();
// // const myCar = new Car(VehicleType.car, 'Toyota', 'Camry', new Date(2022, 0, 1), 60, 12, engineType.doch, 30, 50000);
// // console.log(myCar.getInfo());


// enum VehicleType {
//   car,
//   motorcycle

// }
// enum engineType {
//   doch,
//   turbo
// }
// interface Vehicle {
//   brandName: string,
//   modelName: string,
//   year: Date,
//   fuelCapacity: number,
//   fuelFor1Km: number,
//   engine: engineType,
//   getInfo(): string,
//   drive(km: number): string,
//   currentFuel: number,
//   millage: number,

// }
// class motorcycle implements Vehicle {

//   constructor(
//     public vehicleType: VehicleType,
//     public brandName: string,
//     public modelName: string,
//     public year: Date,
//     public fuelCapacity: number,
//     public fuelFor1Km: number,
//     public engine: engineType,
//     public currentFuel: number,
//     public millage: number
//   ) { }
//   getInfo(): string {
//     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
//   }
//   drive(km: number): string {
//     if (km <= this.currentFuel / this.fuelFor1Km) {
//       let Current: number = this.currentFuel - km * this.fuelFor1Km
//       let millageNow: number = this.millage + km
//       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
//     }
//     else {
//       return `Salam`
//     }



//   }
// }
// const myMoto = new motorcycle(VehicleType.motorcycle, 'suzuki', '911kms', new Date(2022, 0, 1), 60, 12, engineType.doch, 230, 20000);
// console.log(myMoto.getInfo());
// console.log(myMoto.drive(4));

// class Car implements Vehicle {

//   constructor(
//     public vehicleType: VehicleType,
//     public brandName: string,
//     public modelName: string,
//     public year: Date,
//     public fuelCapacity: number,
//     public fuelFor1Km: number,
//     public engine: engineType,
//     public currentFuel: number,
//     public millage: number


//   ) { }
//   getInfo(): string {
//     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
//   }
//   drive(km: number): string {
//     if (km <= this.currentFuel / this.fuelFor1Km) {
//       let Current: number = this.currentFuel - km * this.fuelFor1Km
//       let millageNow: number = this.millage + km
//       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
//     }
//     else {
//       return `Salam`
//     }



//   }
// }
// console.log();
// const myCar = new Car(VehicleType.car, 'Toyota', 'Camry', new Date(2022, 0, 1), 60, 12, engineType.doch, 30, 50000);
// console.log(myCar.getInfo());
interface IAnimal {
  name: string;
  age: number;
  getInfo(): void;
}
enum LivePlace {
  river,
  ocean,
  sea
}
type killType = string | string[]
interface IKill<T extends killType> {
  kill: T
}
interface IFish extends IKill<killType> {
  swim(): void,
  livePlace: LivePlace
  kill: killType

}

abstract class Animal implements IAnimal {
  constructor(
    readonly name: string,
    readonly age: number
  ) { }

  getInfo(): void {
    console.log(this.name, this.age);
  }
}

class Fish extends Animal implements IFish {
  livePlace: LivePlace
  kill: killType;
  constructor(
    name: string,
    age: number,
    livePlace: LivePlace,
    kill: killType,

  ) {
    super(name, age);
    this.livePlace = livePlace;
    this.kill = kill
  }
  swim(): void {
    console.log("uzur baliq");

  }
  getInfo(): void {
    console.log(`Fish: ${this.name}, Age: ${this.age},Color: ${LivePlace[this.livePlace]},kill: ${this.kill}`);
  }
}


const myFish = new Fish("Nemo", 2, LivePlace.ocean, "nese");
myFish.getInfo();
myFish.swim()