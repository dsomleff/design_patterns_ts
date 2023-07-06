export default class Person {
    streetAddress: string;
    postcode: string;
    city: string;
    companyName: string;
    position: string;
    annualIncome: number;

    constructor() {
        this.streetAddress = this.postcode = this.city = '';
        this.companyName = this.position = '';
        this.annualIncome = 0;
    }

    toString(): string {
        return `Person lives at 
            ${this.streetAddress}, 
            ${this.city}, 
            ${this.postcode}\n`
            + `and works at 
            ${this.companyName} as a 
            ${this.position} earning 
            ${this.annualIncome}
        `;
    }
}
