import Car from "./types";

export default class Mercedes implements Car {
    model = "Mercedes";

    drive() {
        return `You are driving a ${this.model}`;
    }
}
