# Introduction-to-ReactJs 📋
This Repository is completely beginner friendly and you can learn the React Basics from here 📖

## What is React ❓
React is a javascript **library** for building Beautiful User Interface.

## History of React 🤴
* React was first designed by **Jordan Walke**, a software enginner at facebook.
* It was first deployed for facebook News Feed around 2011.
* In 2013, react was open sourced at Js Conference.

## About React 🥋
1. **Component based Approach** ( A component is one of the core buliding blocks of react).
* In other words, we can say that every application you will develop in the react will be made up of pieces called components.
2. **User Declaration Approach** 
* Declarative programming is a programming paradigms that express the logic of a component without describing its control flow.

## Prerequisites of React ? 🤔

1. Basics Knowledge of HTML, CSS and Javascript.

2. Basic Understanding of ES6 features.

3. Basic understanding of how to use npm.

## React Installation 👨‍💻

1. Install NodeJs and NPM

2. Install Visual Studio Code / Atom / Brackets

3. Install React from Terminal 
* npm install -g create-react-app
* create-react-app --version
* create-react-app <projectname>

## what is render() method ?
render method takes 3 arugments like
1. what do you want to display 
 ```
 <h1>Hello, World !</h1>
 ```
2. Where you want to display 
```
document.getElementById('root')
```
3. Call back function 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello, World !</h1>, document.getElementById('root'));
```
