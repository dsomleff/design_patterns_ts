import CarFactory from "./CarFactory";

const carFactory = new CarFactory();

const myTesla = carFactory.createCar('Tesla');
myTesla.drive();

const myMercedes = carFactory.createCar('Mercedes');
myMercedes.drive();
