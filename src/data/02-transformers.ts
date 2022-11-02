// Object properties
export const stringData = JSON.stringify({
    person: {
        firstName: 'Jack',
        lastName: 'Bloggs',
        father: {
            firstName: 'Joe',
            lastName: 'Bloggs'
        },
        mother: {
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
});
export const stringExpression = 'person.father.lastName';