---
id: data_types
title: Data Types
sidebar_position: 2
---

## Primitive types

The primitive data types of JSON are taken, which are:
* **string**
* **integer**
* **number**
* **boolean**

## Skima types

They are the data models that are part of the Skima Core: Widget, Constraint and Action.

### Widget

Widgets have four attributes:
* **type**: It is the name of the widget to use as a model.
* **id**: Is an identifier for the current instance of the widget. It is optional.
* **props**: It is a properties object to correctly build the Widget. The values of this object can be of a primitive type such as a Skima type.
* **constraints**: It is an array of Constraints that will be applied to the widget in question.

### Constraint

They have five attributes:
* **id**: Uniquely identifies the constraint. It is optional.
* **type**: It is the type of constraint to apply. Can be: `topEqual`, `bottomEqual`, `rightEqual`, `leftEqual`, `height`, `width`, `centerX`, `centerY` or `horizontalMargin`. It is mandatory.
* **to**: Where appropriate, indicates against which side of the other widget to apply the constraint. It can be: `top`, `bottom`, `left` or `right`.
* **of**: Where applicable, it is the id of the widget against which the constraint must be applied.
* **value**: It is a number that indicates the value of the constraint.

### Action

Actions have three attributes:
* **type**: It is the name of the Action to use.
* **id**: Uniquely identifies the Action. It is optional.
* **data**: It is an object with all the necessary parameters to execute the action correctly. The values of this object can be of a primitive type such as a Skima type.