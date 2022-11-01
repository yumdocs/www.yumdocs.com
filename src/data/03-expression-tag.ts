// Strings
export const stringInput = `<p>{{person.salutation + ' ' + person.firstName|substr(0, 1) + '. ' + person.lastName|upper}}</p><p></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
export const stringData = JSON.stringify({
    person: {
        salutation: 'Mr',
        firstName: 'Joe',
        lastName: 'Bloggs'
    }
});