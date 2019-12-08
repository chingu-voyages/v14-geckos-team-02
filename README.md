# v14-geckos-team-02
Add-project-description-here | Voyage-14 | https://chingu.io/ | Twitter: https://twitter.com/ChinguCollabs

## Table of Contents

1. [About](#about)
1. [Context](#business-context)
1. [Development Workflow](#development-workflow)
1. [Tech Stack](#tech-stack)
1. [Design Mockup](#design-mockup)
1. [Style Guide](#style-guide)

## About

This app helps you prepare for coding interviews on the web, anywhere, anytime. Review and practice topics that are commonly covered in technical interviews such as Data Structures and Algorithms, and Time Complexities. 

> Taking a few minutes everyday to reinforce the core concepts makes it easier to remember them.
> ~ v14-geckos-team-02                               

## Context

One of the reasons self-taught developers and Coding Bootcamp graduates struggle to find a job is the lack of computer science concepts such as data Structures, Algorithms and Time Complexity that are commonly covered in technical interviews. 

While bootcamps can create awareness within their curriculum, the time allocated for these problematic subjects is simply not enough. In the case of self-taught developers, the internet has wide variaty of resources that makes it difficult for an inexperienced person to comb through ro discover what resource is the best that is within their skill level and maybe some more but not too far detached from thier current understanding. That's actually why bootcamp industry thrives by providing just enough but structured knowledge and practice. 

This challenge can be framed as follows:

As a self-taught web developer or coding bootcamp participant

```
I WANT TO review and practice data structures and algorithms on a daily,
SO I can perform well on technical interviews.
```

```
I WANT TO review the piece of concept first and then practice
SO I retain the information
```

```
I WANT TO learn one concept at a time,
SO I become proficient on each topic
```

```
I WANT TO receive a new session everyday on related topics,
SO my learning experience circular
```

```
I WANT every session TO BE short (15-30 mins),
SO I can practice multiple times a day
```

## Sprint#1 Objectives

- [X] Meet the team 
- [X] Choose the team project & MVP
- [ ] Breaking down the project, create your backlog, and use it as a roadmap for the remainder of the project.
- [ ] Setting up your project management tools
- [ ] Designing your project using a mockup tool
- [X] Setup the development workflow

## Development Workflow

A three-level hierarchy of branches is created, through which changes are promoted.

- **Working branches:** Individual branches created by each developer when they are working on changes and bug fixes. There are 4 basic types of branches: **bug**, **feature**, **refactor**, and **style**. For example: feature/course-review. Consult the wiki for more details and examples.
- **Development:** Reflects the code for the next release. Developers work in working branches, which are then pulled into this branch. All code pulled into this branch must be tested and undergo peer review as part of the PR process.
- **Master:** Only updated from the development branch Pull Requests. This branch always reflects the current production release that is seen by live users.

1. Once the skeleton repo is built in GitHub, team members will clone it to their individual computers. 
```
git clone https://github.com/chingu-voyages/v14-geckos-team-02.git <custom-folder-name>
```

2. Working branches are created for specific features and tasks (like bug fixes).
```
git checkout -b feature/course-review
```

3. All normal development activities occur on team members' individual computers. Commits should be frequent and each commit should have a discrete, atomic purpose.

4. **Changes should be frequently pushed to the matching working branch on GitHub.** This ensures that if a computer is lost, stolen, or malfunctions, your work will still be available to the rest of your team. **Before every single push, development branch need to be pulled to make sure there is no conflict. If there is, conflicts should be resolved before the code is pushed to the matching working branch on GitHub.**

```
// In your working branch
git pull origin development

// Then
git push origin <working-branch>
```

5. Once a feature has been unit tested, a Pull Request (PR) should be created to fold it into the development branch. It's always a good idea to require that PR's be reviewed by another member of the team. This helps to ensure that the quality of the app is maintained.

6. When a group of features are ready to be promoted to Production, they should be thoroughly tested together. Then, a Pull Request should be created in order to move them into the master branch which reflects the code base that's in Production or soon to be promoted to Production.

7. Once the PR to the master branch has been completed, you are then ready to release its contents into your Production runtime environment.

![The Workflow](https://github.com/Chingu-cohorts/voyage-wiki/raw/development/images/Git%20Workflow.png)

## Tech Stack
* [React.js](https://reactjs.org/) -- JavaScript Front End Library
* [Node.js](https://nodejs.org/en/docs/) -- JavaScript runtime
* [Express.js](http://expressjs.com/) -- HTTP uitlity and middleware for Node.js
* [MongoDB](https://www.mongodb.com/) -- Cross-platform document-oriented database management program.

## Design Mockup

## Style Guide

**HTML formatting and style rules:**
  - HTML5 semantic tags such as ```<header>```, ```<footer>```, ```<article>```, ```<section>1```, etc. are used to add meaning to the code.
  - No div or section selectors are without a CSS class or id.
  - All code is lowercase
  - The code does not have trailing white spaces.
  - Indentation is consistent (2 spaces).
  - Code uses a new line for every block, list or table element and indent every such child element (it is acceptable to put all elements in one line).
  - When quoting attribute values, code uses consistent "double" quotation marks.
  - HTML documents HTML5 ```<!doctype html>```
  - Code omits type attributes for style sheets and scripts.
  - Code does not use entity references unless necessary e.g. characters with special meaning (like < and &) as well as control or “invisible” characters (like no-break spaces).

**CSS formatting and style rules:**
  - The code does not have trailing white spaces.
  - Indentation is consistent (2 spaces).
  - Code indents all content, that is rules within rules as well as declarations to reflect hierarchy and improve understanding.
  - The code uses a semicolon after every declaration for consistency and extensibility reasons.
  - Code always uses a space after a property name's colon, but no space between property and colon, for consistency reasons.
  - Code always uses a single space between the last selector and the opening brace that begins the declaration block. Code always start a new line for each selector and declaration.
  - Code always put a blank line between rules.
  - Code uses consistent quotation marks for attribute selectors or property values (single).
  - The code uses meaningful or generic ID and class names that are as short as possible, but as long as necessary.
  - The code does not use element names in conjunction with IDs or classes.
  - The code uses shorthand properties where possible.
  - Code omits unit specification after 0 values.
  - Code uses 3-character hexadecimal notation where possible.
  - Code separates words in ID and class names by a hyphen.

**JavaScript formatting and style rules**
  - The code does not have trailing white spaces.
  - Indentation is consistent (2 spaces).
  - Use comments to explain code: What does it cover, what purpose does it serve, and why is the respective solution used or preferred?
  - Mark todos and action items with ```TODO:```
  - When declaring variables, declare variables with ```const```, first. If needed, reassign the variable using ```let```. There isn't a good reason to use the var keyword anymore for variable declaration.
  - **Always use semicolons:**

    ```
    // Recommended
    const foo = () => {
      return true // Missing semicolon
    } // Missing semicolon

    function foo() {
      return true;
    }; // Extra semicolon
    ```

  - There's no reason to use wrapper objects for primitive types, plus they're dangerous. However, type casting is okay.
  - ```forEach``` or ```for``` loops are preferred over ```for-in``` loops when iterating over an array.
  - ```for-in``` loops are used to loop over keys in an object. Make sure to wrap the content of the ```for-in``` loop in a conditional statement to prevent it from from iterating over the prototype chain:
    
    ```
    // Recommended
    myObj = {'firstName':'Ada','lastName':'Lovelace'};
    for (const key in myObj) {
      if (myObj.hasOwnProperty(key)) {
        console.log(myObj[key]);
      } 
    }
    ```
  - Use Array and Object literals instead of Array and Object constructors.
  - In general, functionNamesLikeThis, variableNamesLikeThis, ClassNamesLikeThis, methodNamesLikeThis, CONSTANT_VALUES_LIKE_THIS and filenameslikethis.js
  - Because of implicit semicolon insertion, always start your curly braces on the same line as whatever they're opening.

    ```
    // Recommended
    if (something) {
      // Do something
    } else {
      // Do something else
    }
    ```

  - Single-line array and object initializers are allowed when they fit on one line. There should be no spaces after the opening bracket or before the closing bracket:

    ```
    // Recommended
    const array = [1, 2, 3];
    const object = {a: 1, b: 2, c: 3};
    ```

  - Multiline array and object initializers are indented one-level, with the braces on their own line, just like blocks:

    ```
    // Recommended:
    const array = [
      'Joe <joe@email.com>',
      'Sal <sal@email.com>',
      'Murr <murr@email.com>',
      'Q <q@email.com>'
    ];

    const object = {
        id: 'foo',
        class: 'foo-important',
        name: 'notification'
    };
    ```

  - Except for JSON objects, use single-quotes (') over double-quotes ("). This is helpful when creating strings that include HTML:

    ```
    // Recommended:
    const element = '<button class="btn">Click Me</button>';
    ```

  - 








