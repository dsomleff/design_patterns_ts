import {Address} from "./Address";

export class Person {
    name: string
    address: Address;

    constructor(name: string, address: Address)
    {
        this.name = name;
        this.address = address;
    }

    deepCopy()
    {
        return new Person(
            this.name,
            this.address.deepCopy()
        );
    }

    toString()
    {
        return `${this.name} lives at ${this.address}`;
    }
}
