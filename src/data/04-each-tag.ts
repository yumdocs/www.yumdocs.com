// Each
export const eachInput = `<h1>{{organization.name}}</h1><p>{{#each organization.members}}</p><ul><li>{{firstName + " " + lastName}}</li></ul><p>{{#endeach}}</p>`;
export const eachData = JSON.stringify({
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