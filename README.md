# MyLibrary

* Instalación de dependencias
``` npm install ```
* Ejecucion en ambiente local de desarrollo
``` npm start ``` 
* Generación de distiribuible a producción
``` npm run build ```
* Despliegue a firebase (Para esto debe realizarse la configuración de firebase)
``` firebase deploy ```

## Configuracion de firebase
* Installacion cli firebase
``` npm install -g firebase-tools ```
* Login en firebase
``` firebase login ```
* Inicializar app en firebase
``` firebase init ```
con la siguiente configuracion:
``` ? What do you want to use as your public directory? dist/my-library ```
``` ? Configure as a single-page app (rewrite all urls to /index.html)? Yes ```
``` ? Set up automatic builds and deploys with GitHub? No ```
``` ? File dist/my-library/index.html already exists. Overwrite? No ```

## Angular commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
