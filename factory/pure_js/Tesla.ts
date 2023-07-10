import Car from "./types";

export default class Tesla implements Car {
    model = "Tesla";

    drive() {
        return `You are driving a ${this.model}`;
    }
}
