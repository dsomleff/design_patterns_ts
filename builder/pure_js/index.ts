import PersonBuilder from "./PersonBuilder";

const personBuilder = new PersonBuilder();
let person = personBuilder
    .lives
    .at('420 Bratislava Road')
    .in('Bratislava')
    .withPostcode('82109')
    .works
    .at('Dobrychut')
    .as('Utopenec')
    .earning(12300)
    .build();

console.log(person);

