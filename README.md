# jwt-spring-boot-angular-scaffolding

![keep growing logo](readme-images/logo_250x60.png)

This project is a multi-module application, using Spring Boot for the backend and Angular for the frontend. The project can be built into a single jar file using Maven. You can also run the modules separately during development.

The backend is secured with JSON Web Token. The frontend is ready to be secured.

## Getting Started

To clone the repository, run in the command line:
```bash
$ git clone https://github.com/little-pinecone/jwt-spring-boot-angular-scaffolding.git
```

You can build the application with:
```bash
$ mvn clean install
```

### Sign up request

![sign up request screenshot](readme-images/postman-sign-up-request.png)

### Login request

![login request screenshot](readme-images/postman-login-request.png)

### Requesting secured data

![secured API call screenshot](readme-images/postman-successful-call-to-the-secured-endpoint.png)

## Overview and technical features

The project currently serves a dummy login page and hard-coded pastry data returned from the API.
It allows registering new users, handles login requests and serves data from the API to authenticated and authorized users.

## Running tests

Run all backend tests with the following command in the root directory:
```bash
$ mvn test
```
Run all frontend tests with the following command in the `frontend/src/main/angular` directory:
```bash
$ ng test
```

## Running in production

Set up the `apiUrl` const in `frontend/src/main/angular/src/environments/environment.prod.ts`.

## Built With

* Java 11
* [Spring Boot 2.1.1](https://start.spring.io/)
* [Angular 7](https://angular.io/)
* [Bootstrap 4](https://getbootstrap.com/)
* [Maven](https://maven.apache.org/)
* [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)

## Screenshots

![login page](readme-images/login-page-screenshot.png)
![cookies](readme-images/cookie-dispenser-screenshot.png)

## To do

* Authorisation and authentication - securing frontend layer (handling logging in and logging out).

## License

This project is licensed under the MIT License - see the [license details](https://opensource.org/licenses/MIT).