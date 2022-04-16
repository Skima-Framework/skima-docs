---
id: overview
title: Overview
sidebar_position: 1
---

## Introduction

Server Drive UI (SDUI) is a technique for developing applications in which the behavior of the app and its user interface come in response to a request to a server instead of being in the source code. This makes it very easy to create and modify applications without having to release an update. In addition, it facilitates the maintenance of the applications as well as the experimentation with them.

In the source code there will be the components and behaviors that you want to have, but the construction of the screens and functionalities will be from JSONs coming from the server, usually through a REST request. In this JSON will be the directives of what to build and where.

## Skima Framework

Skima Framework was born with the intention of standardizing the development of applications with SDUI and creating tools to facilitate the creation and maintenance of applications at any scale.

## Basic components

### Fundamental components

There are three essential components in an application. These three components are the fundamental elements with which any application is designed and built:
1. The **user interface**, which is almost always visual.
2. The **behaviors** that must be carried out from certain events, such as when the user presses a button.
3. The **data**. Examples of this might be the data in a table or the fields in a form.

For each of these components Skima establishes a data model.

### System architecture

Skima establishes a way of working on both servers and mobile applications. For this, the entire system is divided into three parts:

#### Skima backend

The Skima backend is a server with a database where all existing Widgets and Actions, created contracts, constants and app versions are stored. In turn, the Skima backend is the one that resolves and validates the requests that will be made from BFF. Some of their specific tasks are:
* Create responses to contract requests, eg screens.
* Complete the answers with data from the database or with dynamic data.
* Validate that the answers to be sent are correct.

#### BFF

The backend for frontend (BFF) is the server that interacts with the mobile app. It contains whatever logic the developers want to carry out and relies on the **Skima backend** to build the responses.

#### AMS

The application management system (**AMS**) is a web application that allows managing the content of the **Skima backend** database in an easy and intuitive way through a user interface. The AMS allows you to create Widgets and Actions schemas, create contracts, manage constants, create composite widgets, among other tasks.

#### Frontend

The frontend represents the mobile applications. They can be native for iOS and Android, or using a Framework like Flutter or React Native.

In iOS Skima has three libraries:
1. **Skima**: It has the engines and data models to create widgets and execute actions.
2. **SkimaStandardUI**: It is a set of common Widgets to create simple applications.
3. **SkimaStandardAcions**: It is a set of common Actions to create simple applications.

### Widgets

Widgets represent a visual component, such as a button, a textfield or a label.
They have a `type` which is the identifier or name of the widget (button, textfield, label, etc.) and a `props` object which is specific to each Widget and establishes all the necessary properties to be able to create that visual component in the widget. mobile device. Also, all widgets can have an array of `constraints`.

```json
{
    "type": "label",
    "id": "label_1",
    "props": {
        "text": "Hello Skima!"
    },
    "constraints": []
}
```

### Compose Widgets

JSONs that declare screens can often get very large. To prevent a single contract from concentrating all the json, you can use **Compose Widgets**, which is a way to create more complex Widgets from the essential ones. In this way, these new composite widgets can be used exactly like any other widget. For example, you can create a Compose Widget called `comment` that is a container with an image and some text on the right. This `comment` component can be used as a widget on any screen. Below is its declaration and how to use it:

#### Declaration
```json
{
	"metadata": {
		"name": "comment"
	},
	"props": {
		"text": {
			"type": "string",
			"required": true
		},
        "imageUrl": {
			"type": "string",
			"required": true
		}
	},
    "component": {
        "type": "Container",
        "props": {
            "children": [
                {
                    "type": "label",
                    "props": {
                        "text": "$prop{text}"
                    }
                },
                {
                    "type": "image",
                    "props": {
                        "url": "$prop{imageUrl}"
                    }
                }
            ]
        }
    }
}
```
#### Usage

```json
{
    "type": "comment",
    "id": "comment_1",
    "props": {
        "text": "This is the comment!",
        "imageUrl": "https://..."
    }
}
```

### Actions

Actions represent a behavior that you want to execute, such as navigating to another screen, making a REST request or changing the text of a label.
They have a `type` which is the identifier or name of the Action (navigation, apicall, labelManipulation, etc.) and a `data` object with all the necessary parameters to correctly execute the action.

```json
{
    "type": "navigation",
    "id": "action_1",
    "data": {
        "type": "deep_link",
        "value": "skima://home"
    }
}
```

### Values

Values are variables that are created on the mobile device to be able to save and manipulate data, for example the fields of a form.
These variables are managed by the **DataEngine** and can be accessed through actions of type `manageValue`.