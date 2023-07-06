import Person from "./Person";

class PersonJobBuilder {
    person: Person;

    constructor(person: Person) {
        this.person = person;
    }

    at(companyName: string): PersonJobBuilder {
        this.person.companyName = companyName;
        return this;
    }

    as(position: string): PersonJobBuilder {
        this.person.position = position;
        return this;
    }

    earning(annualIncome: number): PersonJobBuilder {
        this.person.annualIncome = annualIncome;
        return this;
    }

    build(): Person {
        return this.person;
    }
}

export { PersonJobBuilder };
