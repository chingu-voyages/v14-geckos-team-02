# v14-geckos-team-02
Add-project-description-here | Voyage-14 | https://chingu.io/ | Twitter: https://twitter.com/ChinguCollabs

## Table of Contents

1. [About](#about)
1. [Context](#business-context)
1. [Development Workflow](#development-workflow)
1. [Tech Stack](#tech-stack)
1. [Design Mockup](#design-mockup)

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






