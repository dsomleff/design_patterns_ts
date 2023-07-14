import {Person} from "./Person";
import {Address} from "./Address";

let john = new Person('John',
    new Address('123 London Road', 'London', 'UK'));

let jane = john.deepCopy();

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';

console.log(john.toString());
console.log(jane.toString());
