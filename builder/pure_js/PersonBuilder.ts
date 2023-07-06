import Person from "./Person";
import PersonJobBuilder from "./PersonJobBuilder";
import PersonAddressBuilder from "./PersonAddressBuilder";

export default class PersonBuilder {
    person: Person;

    constructor(person = new Person()) {
        this.person = person;
    }

    get lives(): PersonAddressBuilder {
        return new PersonAddressBuilder(this.person);
    }

    get works(): PersonJobBuilder {
        return new PersonJobBuilder(this.person);
    }

    build(): Person {
        return this.person;
    }
}
