import Car from "./types";

export default class Mercedes implements Car {
    model = "Mercedes";

    drive() {
        console.log(`You are driving a ${this.model}`);
    }
}
