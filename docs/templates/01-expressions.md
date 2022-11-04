---
sidebar_position: 1
---

import ExpressionPlayground from '@site/src/components/ExpressionPlayground';
import {objectData, objectExpression, arrayData, arrayExpression, concatenationData, concatenationExpression, calculationData, calculationExpression, conditionData, conditionExpression} from '@site/src/data/01-expressions.ts'

# Expressions

> Learn how to write expressions for Yumdocs.

:::tip Tip

Yumdocs uses a [custom implementation](https://www.npmjs.com/package/jexl) of
[JEXL](https://commons.apache.org/proper/commons-jexl/) by default,
but can be configured to use any [expression engine](../extensions/05-expression-engine.md).

:::

## Object properties

Object properties are in the form `"name": value` where `value` can be a string (between quotes),
a boolean (true or false), a number, an object (between curly braces) or an array (between square brackets).

An object is a collection of properties. An array is a collection of values.

A property is evaluated by its name. If the value of a property is an object (e.g person), a dot is used to access
the properties of this object (e.g. `person.firstName`), which you can experiment in the following playground:

<ExpressionPlayground data={objectData} expression={objectExpression} height="260px"></ExpressionPlayground>

## Array items

An array item is most commonly accessed by its index in square brackets as in `organization.members[0]`,
but expressions can also include queries, which you can experiment in the following playground:

<ExpressionPlayground data={arrayData} expression={arrayExpression} height="260px"></ExpressionPlayground>

## Concatenation

Expressions support concatenation, which you can experiment in the following playground:

<ExpressionPlayground data={concatenationData} expression={concatenationExpression} height="260px"></ExpressionPlayground>

## Calculations

Expressions support calculations, which you can experiment in the following playground:

<ExpressionPlayground data={calculationData} expression={calculationExpression} height="120px"></ExpressionPlayground>

## Conditions

Expressions support conditions, which you can experiment in the following playground:

<ExpressionPlayground data={conditionData} expression={conditionExpression} height="120px"></ExpressionPlayground>
