import Person from "./Person";
import {PersonAddressBuilder} from "./PersonAddressBuilder";

class PersonBuilder {
    person: Person;

    constructor() {
        this.person = new Person();
    }

    get lives(): PersonAddressBuilder {
        return new PersonAddressBuilder(this.person);
    }
}

export default PersonBuilder;
