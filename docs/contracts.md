---
id: contracts
title: Contracts
sidebar_position: 3
---

A contract is the base model that structure a JSON communication between the BFF and the app.

Currently, we have only one type of contract that is `Screen`, but we are working to abstract the idea of contract to allow different schemas.

# Screen Contract

This contract contains the information to create an entire UI screen and all its life cycle.

It contains four attributes:
1. **metadata**: It is an object that contains:
    1. **id**: Identifier of the screen. It's required.
    2. **version**: The version of the contract.
    3. **flow**: The identifier of the flow to which the screen belongs. Optional
2. **actions**: This actions will be executed through out the life cycle of the screen:
    1. **didLoad**: Array of Actions excuted when the data is loaded.
    2. **willAppear**: Array of Actions excuted each time the screen is shown.
    3. **willDisappear**: Array of Actions excuted each time the screen is hidden.
    4. **back**: Array of Actions executed when the user goes back.
3. **keepInStack**: Boolean that indicate if the screen should be kept in stack once its dissapeared. Optional.
4. **backgroundColor**: String of a color in hexadecimal form. Its the background color of the entire screen.
5. **ui**: Array of Widgets that conform the user interface of the screen.

```json title="screenSchema.json"
{
    "metadata": {
        "id": "string",
        "version": "string",
        "flow": "string"
    },
    "actions": {
		"didLoad": "[Action]",
		"willAppear": "[Action]",
		"willDisappear": "[Action]",
		"back": "[Action]"
	},
    "keepInStack": "boolean",
    "backgroundColor": "string",
    "ui": "[Widget]"
}
```

#### Here's an example of a screen:

```
https://run.mocky.io/v3/f960b018-feca-4860-bcaf-b31b66bd95b7
```