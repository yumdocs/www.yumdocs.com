// Delimiters
export const delimitersInput = '<p>Replaced: {{person.lastName}}</p><p>Not replaced: {person.lastName}</p><p>Not replaced: {{person.lastName} }</p><p>Not replaced: {person.lastName}}</p>';
export const delimitersData = JSON.stringify({
    person: {
        salutation: 'Mr',
        firstName: 'Joe',
        lastName: 'Bloggs'
    }
});

// Unknown statement
export const unknownInput = '<p>{{#unknown person}}</p>';
export const unknownData = JSON.stringify({
    person: {
        salutation: 'Mr',
        firstName: 'Joe',
        lastName: 'Bloggs'
    }
});

// Missing or mismatched opening and closing tags
export const mismatchedInput= '<p>{{#if person.firstName == "Joe"}}</p><p>Hello Joe!</p><p>{{#endeach}}</p>';
export const mismatchedData = JSON.stringify({
    person: {
        salutation: 'Mr',
        firstName: 'Joe',
        lastName: 'Bloggs'
    }
});

// Misplaced tags
export const misplacedInput = '<p>{{#if person.firstName == "Joe"}}</p><ul><li>Hello Joe!</li><li>{{#endif}}</li></ul>';
export const misplacedData= JSON.stringify({
    person: {
        salutation: 'Mr',
        firstName: 'Joe',
        lastName: 'Bloggs'
    }
});

// Malformed expressions
export const malformedInput = '<p>{{a b c}}</p>';
export const malformedData= JSON.stringify({
    a: 1,
    b: 2,
    c: 3
});