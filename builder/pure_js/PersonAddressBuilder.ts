import PersonBuilder from "./PersonBuilder";

export default class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(streetAddress: string): PersonAddressBuilder {
        this.person.streetAddress = streetAddress;
        return this;
    }

    withPostcode(postcode: string): PersonAddressBuilder {
        this.person.postcode = postcode;
        return this;
    }

    in(city: string): PersonAddressBuilder {
        this.person.city = city;
        return this;
    }
}
