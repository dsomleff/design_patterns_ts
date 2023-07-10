import Car from "./types";

export default class Tesla implements Car {
    model = "Tesla";

    drive() {
        console.log(`You are driving a ${this.model}`);
    }
}
