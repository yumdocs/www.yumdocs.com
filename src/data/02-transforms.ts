// String
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
export const stringExpression = 'person.firstName|substr(0,1)';

// Boolean
export const booleanData = JSON.stringify({
    flag: true
});
export const booleanExpression = 'true|replace("tru", "fals")|upper';

// Number
export const numberData = JSON.stringify({
});
export const numberExpression = 'TODO';

// Date
export const dateData = JSON.stringify({
});
export const dateExpression = 'TODO';

// Array
export const arrayData = JSON.stringify({
});
export const arrayExpression = 'TODO';