import PersonBuilder from "./PersonBuilder";

describe('Builder', () => {
    const personBuilder = new PersonBuilder();

    it('should build the output', () => {
        let person = personBuilder
            .lives
            .at('420 Bratislava Road')
            .in('Bratislava')
            .withPostcode('82109')
            .toJobBuilder()
            .at('Dobrychut')
            .as('Utopenec')
            .earning(12300)
            .build();

        const result = 'Person lives at 420 Bratislava Road, Bratislava, 82109\n and works at Dobrychut as a Utopenec' +
            ' earning 12300';

        expect(person.toString()).toEqual(result);
    });
})
