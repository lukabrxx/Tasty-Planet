# Tasty-Planet
---
How to setup TypeScript? 

## npm i typescript --save-dev

## npx tsc --init

## $ npm install @types/express @types/node @types/async @types/bcrypt-nodejs @types/eslint @types/mongodb eslint nodemon @typescript-eslint/eslint-plugin @typescript-eslint/parser -D

## npm install bcrypt dotenv express-async-handler mongoose express cors concurrently rimraf

## npx eslint --init 
    How would you like to use ESLint?: To check syntax and find problems
    What type of modules does your project use?: JavaScript modules (import/export)
    Which framework does your project use?: None of these
    Does your project use TypeScript?: Yes
    Where does your code run?: Node
    What format do you want your config file to be in?: JavaScript

## npx eslint . --ext .ts
Run the linter to check all files with the .ts TypeScript extension:
    
## Folder Structur 2 main 
Server 
        maps 
            config  - mongo db configs ect
            controllers - api endpoints
            models - mongo db schemas
            routes - api routes 
            middleweres - user/admin
        server.js

Client

        
