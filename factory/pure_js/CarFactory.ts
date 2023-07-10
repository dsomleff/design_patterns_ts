import Car from "./types";
import Tesla from "./Tesla";
import Mercedes from "./Mercedes";

export default class CarFactory {
    createCar(type: string): Car {
        switch (type) {
            case 'Tesla':
                return new Tesla();
            case 'Mercedes':
                return new Mercedes();
            default:
                throw new Error('Car type must be specified!');
        }
    }
}
