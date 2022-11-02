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
export const unknownData = delimitersData;

// Missing or mismatched opening and closing tags
export const mismatchedInput= '<p>{{#if person.firstName == "Joe"}}</p><p>Hello Joe!</p><p>{{#endeach}}</p>';
export const mismatchedData = delimitersData;

// Misplaced tags
// export const misplacedInput = '<p>{{#if person.firstName == "Joe"}}</p><ul><li>Hello Joe!</li><li>{{#endif}}</li></ul>';
export const misplacedInput = '<p>{{#if person.firstName == "Joe"}}</p><table><tbody><tr><td>Hello Joe!</td><td>{{#endif}}</td></tr></tbody></table>';
export const misplacedData = delimitersData;

// Malformed expressions
export const malformedInput = '<p>{{a b c}}</p>';
export const malformedData = JSON.stringify({
    a: 1,
    b: 2,
    c: 3
});

// Missing data in an expression Tag
export const missingInput = '<p>{{d}}</p>';
export const missingData = malformedData;

// Missing data in other tags (statements)
export const eachInput = '<p>{{#each person.children}}</p><p>{{firstName + " " + lastName}}</p><p>{{#endeach}}</p>';
export const eachData = delimitersData;