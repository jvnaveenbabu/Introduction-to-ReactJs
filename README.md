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

## 1. React Installation 👨‍💻

1. Install NodeJs and NPM

2. Install Visual Studio Code / Atom / Brackets

3. Install React from Terminal 
* npm install -g create-react-app
* create-react-app --version
* create-react-app <projectname>

## 2. What is render() method ?
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

## NOTE :
```
In ReactJs we use 
jsx instead of html
where jsx stands for JavaScript XML
```

## 3. How to Render Multiple Elements inside a ReactDOM.render() ?
* For rendering the multiple elements we have two ways :
 1. By Using array of elements 
 ```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(

  // In react v16^ it's possible for render()
  // to return an array of elements
  
  [
    <h1>Hello, World !</h1>,
    <p>Plz like and share</p>,
    <h2>Hope you are liking the tuts</h2>
  ],
 
  document.getElementById('root'));
 ```
 2. By using div's
 ```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  
  <div>
    <h1>Hello, World !</h1>
    <p>Plz like and share</p>
    <h2>Hope you are liking the tuts</h2>
  </div>
  ,
 
  document.getElementById('root'));
 ```
 
 3. By using <React.Fragment></React.Fragment> or <></>
  * <></> is used instead of <div></div> because while rendering the elements inside a div we have a draw that it will create nested div which may cause effect while using flexbox or grid in css
  ```javascript
  <div id="root">
   <div>
    <h1>Hello, World !</h1>
    <p>Plz like and share</p>
    <h2>Hope you are liking the tuts</h2>
   </div>
  </div>
  ```
  
  * Advantage of using React fragment <></>
   It will directly render the elements inside the id = 'root' it will not create nested div's
   ```javascript
 <div id="root">
    <h1>Hello, World !</h1>
    <p>Plz like and share</p>
    <h2>Hope you are liking the tuts</h2>
  </div>
   ```

## 4. JavaScript Expressions in JSX
```javascript
import React from "react";
import ReactDOM from "react-dom";

const name = "Naveen";
const lang = "ReactJs";

ReactDOM.render(
  <>
    <h1>Using JavaScript Expression in JSX</h1>
    <h4>Hello there, My name is {name}</h4>
    <h4>I'm excited to learn {lang}</h4>
    <p>Generating the random number {Math.random()}</p>
  </>,
  document.getElementById("root")
);
```
