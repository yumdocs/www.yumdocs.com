// Object properties
export const objectData = JSON.stringify({
    person: {
        firstName: "Jack",
        lastName: "Bloggs",
        father: {
            firstName: "Joe",
            lastName: "Bloggs"
        },
        mother: {
            firstName: "Jane",
            lastName: "Doe"
        }
    }
});
export const objectExpression = 'person.father.lastName';

// Array items
export const arrayData = JSON.stringify({
    organization: {
        name: "Avengers",
        members: [
            {
                firstName: "Tony",
                lastName: "Stark",
                heroName: "IronMan"
            },
            {
                firstName: "Peter",
                lastName: "Parker",
                heroName: "SpiderMan"
            },
            {
                firstName: "Bruce",
                lastName: "Banner",
                heroName: "Hulk"
            }
        ]
    }
});
export const arrayExpression = 'organization.members[.lastName == "Parker"].heroName';

// Concatenation
export const concatenationData = objectData;
export const concatenationExpression = '1 + ". " + person.firstName + " " + person.lastName';

// Calculations
export const calculationData = JSON.stringify({
    year1: 100,
    year2: 200,
    year3: 300,
    percent: 0.5
});
export const calculationExpression = 'percent * (year1 + year2 + year3) - 100 / 4';

// Conditions
export const conditionData = calculationData;
export const conditionExpression = 'year2 > year1 ? "up" : "down"';


