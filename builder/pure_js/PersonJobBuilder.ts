import PersonBuilder from "./PersonBuilder";
import Person from "./Person";

export default class PersonJobBuilder extends PersonBuilder {
    constructor(person: Person) {
        super(person);
    }

    at(companyName: string) {
        this.person.companyName = companyName;
        return this;
    }

    as(position: string) {
        this.person.position = position;
        return this;
    }

    earning(annualIncome: number) {
        this.person.annualIncome = annualIncome;
        return this;
    }
}
