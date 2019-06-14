# TradeCenter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.
you need to have mongoDB installed to work with this project.
you also need to have Node.Js.
## Importing Data

using your terminal use the mongoimport commande to import the Json generated from the csv files:
  `mongoimport --db project --collection trade --type json --file data.json --jsonArra`
## Development server

Access the server folder and run `node index.js` to run the backend server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
