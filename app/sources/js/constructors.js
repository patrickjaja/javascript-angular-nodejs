//Konstruktoren

console.clear();
var arr = new Array();

function Car() {
  var color = 'red';
  this.color = 'green';
  Car.color = 'blue';

  this.drive = function () {
    console.log('Brumm!');
  };
};

Car.prototype.brake = function () {

}

Car.prototype.driver = function () {
  console.log('ZTZZZZ');
}

function ElectroCar () {
  this.laden = function () {
    console.log('laden');
  };
}

function Panzer () {
  this.schutz = function () {
    console.log('SCHUTZ AN');
  };
}

function Flugzeug () {
  this.fliegen = function () {
    console.log('Fliegen AN');
  };
}


ElectroCar.prototype = new Flugzeug();

var electroCar = new ElectroCar();


console.log(electroCar.fliegen());

// Instanzenbildung
var myAuto = new Car();

myAuto.drive();
myAuto.driver();

console.log(myAuto.color);
console.log(Car.color);
//class Logger {
//  constructor(options) {
//    this.model = options.model;
//    this.template = options.template;
//  }
//
//  render() {
//    return _.template(this.template, this.model.toObject());
//  }
//}
//
//
//
//class LogView extends View {
//  render() {
//    var compiled = super.render();
//    console.log(compiled);
//  }
//}
