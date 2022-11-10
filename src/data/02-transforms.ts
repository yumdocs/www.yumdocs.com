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
    integer: Math.trunc(1000 * Math.random()),
    float: 1000 * Math.random(),
    percent: Math.random(),
});
export const numberExpression = 'float|format("On sale for $0.00", "fr-FR")';

// Date
export const dateData = JSON.stringify({
    date: new Date().toString(),
    localDate: new Date().toLocaleString(),
    utcDate: new Date().toUTCString(),
});
export const dateExpression = 'date|format("dd MMM yyyy", "fr-FR")|upper';

// Array
export const arrayData = JSON.stringify({
    persons: [
        { firstName: 'John', lastName: 'Smith', age: 35 },
        { firstName: 'Jane', lastName: 'Doe', age: 42 },
        { firstName: 'Joe', lastName: 'Bloggs', age: 21 },
        { firstName: 'Mary', lastName: 'Jones', age: 53 },
    ],
    integers: new Array(1 + Math.trunc(10 * Math.random())).fill(0).map(() => Math.trunc(1000 * Math.random())),
    floats: new Array(1 + Math.trunc(10 * Math.random())).fill(0).map(() => 1000 * Math.random()),
});
export const arrayExpression = 'persons[.age > 21]|orderBy("age", true)';