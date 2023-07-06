import Person from "./Person";
import { PersonJobBuilder } from "./PersonJobBuilder";

class PersonAddressBuilder {
    person: Person;

    constructor(person: Person) {
        this.person = person;
    }

    at(streetAddress: string): PersonAddressBuilder {
        this.person.streetAddress = streetAddress;
        return this;
    }

    in(city: string): PersonAddressBuilder {
        this.person.city = city;
        return this;
    }

    withPostcode(postcode: string): PersonAddressBuilder {
        this.person.postcode = postcode;
        return this;
    }

    toJobBuilder(): PersonJobBuilder {
        return new PersonJobBuilder(this.person);
    }
}

export { PersonAddressBuilder };
