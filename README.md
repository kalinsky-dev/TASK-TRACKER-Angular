# TASK TRACKER

This is an application like Kanban, where you and your team can store and manage your Tasks.
The system include all the Tasks which has to be resolved.

### Features

Every Task includes dynamic Information for its:

- Name
- Description
- Creator
- Information, if the Task is taken or still available 
- Information for the person, who has taken the Task, if it is in a progress
- Information for the state, if the Task is finished, person who resolved it and his working hours


Non-authenticated users are prompt to sign-in in the system. 
If there are no Tasks created, the user is ivited to craete its own.
Once authenticated a user can Create, Read, Update, Take/Finish, Delete and Sort the Tasks:

 1. Create:
 - By means of an Add button, the user can Create his own Task, submitting its Name and Description.
 2. Read:
 - All created Tasks are listed in the Board.
 3. Update:
 - By double click of the Task in the board, the user can update it (change its Name or Description), 
 but only if it is the Creator and the Task is not in a progress. The Task can also not be updated, if it is Finished.
 4. Take:
 - By double click of the Task in the board, the user can Take it, but only if it is still available(not in Progress).
 5. Finish:
 - The user who has taken the Task can Finish it, by dobule click on the Task in the board, submitting his working hours.
 If the Task is clicked by person, who has not taken it directly, a message is shown that the Task is in a Progress.
 6. Delete:
- Only the creator of the Task can Delete it, but only if it is not in Pogress.
- If the Task is in Progress, it can not be deleted by anyone.
- When the Task is finished an X icon on the right top corner is shown and the user can Delete it from there.
- The Task can be deleted also by double click.
 7. Sort:
 - If Tasks are more than one, a Sort button is shown and everybody can Sort all Tasks in the system by their working hours in ascending order. Tasks, which are still not taken, are arranged on the bottom of the board. If there is no Task taken, the button does not rearrange.


### Used technologies

- Front-end built with Angular
- Softuni-Pracite-Server for authentication and data storage
- HTML & CSS
- Deploy in Firebese: https://angular-task-tracker-ddf70.web.app/

# Getting Started with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

```
ng serve
```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Server for my backend

```
cd server && node server.js
```
Runs the server. 
Be careful to run the server from the backend server folder in a separate terminal.

## Code scaffolding

```
ng generate component component-name
```
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```
ng build
```
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

```
ng test
```
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

```
ng e2e
```
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
