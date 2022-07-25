# Assignment 3 - Pokemon Trainer
This project was created as part of an assigment in javascript. The application allows for users to collect and see pokemons. 

## Installation

### Installing node and npm
Download and install node from https://nodejs.org/en/ and then enter the following in the terminal to install npm:
```
npm install -g npm
```
npm will be used to start a local demo of the application.
### Setting up the api connection
Create a folder named 'environments' in the project folder and enter the following files:
```
environments.ts
envrinments.prod.ts
```
In the files add the follwoing:
```
export const environment = {
    production: true,
    apiUsers: "<api users placeholder>",
    apiPokemons: "<api pokemon placeholder>", 
    apiKey: "<api key placeholder>"
};

```
Replace placeholders with your api user key, api url and apiKey. 

## Usage
Enter the following in the terminal to start the application:
```
npm start
```
A local demo of the application will start at http://localhost:4200.

Enter an username to get access to the collection feature. If it the first time logging in with that username an account will be created automatically.

## Deployment


## Contributors
Johanna Olsson @johannaolsson

Veronica Andersen @VeronicaAndersen
