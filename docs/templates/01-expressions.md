---
sidebar_position: 1
---

import ExpressionPlayground from '@site/src/components/ExpressionPlayground';

# Expressions

> Learn how to write expressions for Yumdocs.

:::tip Tip

Yumdocs uses a [custom implementation](https://www.npmjs.com/package/jexl) of
[JEXL](https://commons.apache.org/proper/commons-jexl/) by default,
but can be configured to use any [expression engine](../contribution/05-expression-engine.md).

:::

## Object properties

Object properties are in the form `"name": value` where `value` can be a string (between double quotes),
a boolean (true or false), a number, an object (between curly braces) or an array (between square brackets).

An object is a collection of properties. An array is a collection of values.

A property is evaluated by its name. If the value of a property is an object (e.g person), a dot is used to access
the properties of this object (e.g. person.firstName), which you can experiment in the following playground:

<ExpressionPlayground expression="person.father.lastName" height="260px">

/*
{
    "person": {
        "firstName": "Jack",
        "lastName": "Bloggs",
        "father": {
            "firstName": "Joe",
            "lastName": "Bloggs"
        },
        "mother": {
            "firstName": "Jane",
            "lastName": "Doe"
        }
    }
}
*/

</ExpressionPlayground>

## Array items

An array item is most commonly accessed by its index in square brackets as in `organization.members[0]`,
but expressions can also include queries, which you can experiment in the following playground:


<ExpressionPlayground expression="organization.members[.lastName == 'Parker'].heroName" height="260px">

/*
{
    "organization": {
        "name": "Avengers",
        "members": [
            {
                "firstName": "Tony",
                "lastName": "Stark",
                "heroName": "IronMan"
            },
            {
                "firstName": "Peter",
                "lastName": "Parker",
                "heroName": "SpiderMan"
            },
            {
                "firstName": "Bruce",
                "lastName": "Banner",
                "heroName": "Hulk"
            }
        ]
    }
}
*/

</ExpressionPlayground>

## Concatenation

Expressions support concatenation, which you can experiment in the following playground:

<ExpressionPlayground expression="1 + '. ' + person.firstName + ' ' + person.lastName" height="260px">

/*
{
    "person": {
        "firstName": "Jack",
        "lastName": "Bloggs",
        "father": {
            "firstName": "Joe",
            "lastName": "Bloggs"
        },
        "mother": {
            "firstName": "Jane",
            "lastName": "Doe"
        }
    }
}
*/

</ExpressionPlayground>

## Calculations

Expressions support calculations, which you can experiment in the following playground:

<ExpressionPlayground expression="percent * (year1 + year2 + year3) - 100 / 4" height="120px">

/*
{
    "year1": 100,
    "year2": 200,
    "year3": 300,
    "percent": 0.5
}
*/

</ExpressionPlayground>

## Conditions

Expressions support conditions, which you can experiment in the following playground:

<ExpressionPlayground expression="year2 > year1 ? 'up' : 'down'" height="120px">

/*
{
    "year1": 100,
    "year2": 200,
    "year3": 300,
    "percent": 0.5
}
*/

</ExpressionPlayground>

