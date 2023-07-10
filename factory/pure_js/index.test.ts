import CarFactory from "./CarFactory";

describe('Factory', () => {
    it('should create a classes', () => {
        const carFactory = new CarFactory();
        const myTesla = carFactory.createCar('Tesla');
        const myMercedes = carFactory.createCar('Mercedes');

        expect(typeof myTesla).toBe('object');
        expect(typeof myMercedes).toBe('object');
        expect(myTesla.drive()).toBe('You are driving a Tesla');
        expect(myMercedes.drive()).toBe('You are driving a Mercedes');
    });
})
