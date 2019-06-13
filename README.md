# Fraction Calculator App

Fraction Calculator App is .

## Screenshot
![alt text](https://i.ibb.co/xLQwDx2/image.png)



## Live Demo
See [Demo Here](https://fraction-calculator-app.herokuapp.com/).


## Structure

    .
    ├── dist                    # Compiled files for production
    ├── public                  # Public Folder
    ├── src                     # Source files
      ├── assets                # Images, File, Docs, etc 
      ├── components            # Component Folder
    ├── tests                   # Unit Testing
    ├── utils                   # Tools and utilities
      ├── constants             # Constants Files
    └── README.md

> Use short lowercase names at least for the top-level files and folders except
> `LICENSE`, `README.md`


## Dependencies
Make sure Node.js and NPM installed on your computer,  for check npm or node.js installed in your computer.
you can open Windows Shell or Cmd and type ```node -v (Test Node.Js )``` or ```npm -v (Test NPM)```,

if not installed, you can download [here](https://nodejs.org/en/download/)




## Installation

1. Open your cmd based on location project, and run command :

```
npm install -g @vue/cli
npm install

```

2. You can run app with run command :
```
npm run serve
```


3. open [http://localhost:8080/](http://localhost:8080/) in your browser


## Unit Testing
You could testing application with run command :

```
npm run test:unit
```


## Compiles and Minifies for Production
```
npm run build
```


## Docs

### Available Fraction
```
 100000,
 50000,
 20000,
 10000,
 5000,
 1000,
 500,
 100,
 50
```


### Add Fraction
you could be adding fraction with modifying AVAILABLE_FRACTIONS variable in ```/utils/constants``` 

```
export const AVAILABLE_FRACTIONS =  [
    20000000, # Example
    100000,
    50000,
    20000,
    10000,
    5000,
    1000,
    500,
    100,
    50
  ]
```
