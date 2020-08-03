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
## 5. Template Literals in JSX
```javascript
import React from "react";
import ReactDOM from "react-dom";

const fname = "Naveen";
const lname = "babu";

// Template Literals in JSX
ReactDOM.render(
  <>
    <h1>Using JavaScript Expression in JSX</h1>
    <h4>{`Hello there, My name is ${fname} ${lname}`}</h4>

    <p>Generating the random number {Math.random()}</p>
  </>,
  document.getElementById("root")
);
```
## Challenge 1 : Display Current Date and time in JSX
```javascript
import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
ReactDOM.render(
  <>
    <h1>It will display current date and Time</h1>
    <p>{`Today's Date is ${date}`}</p>

    <p>{`Current time ${time}`}</p>
  </>,
  document.getElementById("root")
);
```
## 5. CSS Styling and Importing CSS in ReactJS
```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "Naveen";
const img1 = "https://source.unsplash.com/300x300/?programming";
const img2 = "https://source.unsplash.com/300x300/?coding";
const img3 = "https://source.unsplash.com/300x300/?computer";

const link = "https://source.unsplash.com/";
ReactDOM.render(
  <>
    <h1 className="heading">My name is {name}</h1>
    <div className="img-div">
      <img src={img1} alt="Random Imgs" />
      <img src={img2} alt="Random Imgs" />

      <a href={link} target="_blank">
        <img src={img3} alt="Random Imgs" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
```
## Note : Why we add className instead of class to style the elements in ReactJS
* Class is a Reserved word in ReactJs
* If we add a class to an element to style it will throw an error in the console that instead of class use className.
* In ReactJS we use className to style the elements.
* Example :-
```css
<h1 className="heading">Hope that you are gaining the knowledge from this Readme.md file 🙂</h1>
```
## 9. How to add Googlefonts in ReactJs
1. Select the font from GoogleFonts
2. Copy the CSS link from the GoogleFonts
3. Then Paste the link in public/index.html file inside the head section
4. Then you can use font-family in src/index.css file wherever you want.

## Note :-
1. For Internal Styling in ReactJS we need to create properties like same as we creating the objects in js
* Method 1:
```javascript
const head = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize'
}
<h1 className="heading" style = {head}>My name is {name}</h1>
```
* Method 2 :
```css
<h1 className="heading" style = {{color: '#fa9191', textAlign: 'center', textTransform:'capitalize' }}>My name is {name}</h1>
```
2. But here while styling we need to covert the kabab case (ex. text-transform: capitalize;) into camelCase (Ex. textTransform: 'capitalize';) and the value should be under quotes("")

## 10. Internal CSS Styling
```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "Naveen";
const img1 = "https://source.unsplash.com/300x300/?programming";
const img2 = "https://source.unsplash.com/300x300/?coding";

const head = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize'
}
ReactDOM.render(
  <>
    <h1 className="heading" style = {head}>My name is {name}</h1>
    <div className="img-div">
      <img src={img1} alt="Random Imgs" />
      <img src={img2} alt="Random Imgs" />
    </div>
  </>,
  document.getElementById("root")
);
```
## 11. ES6 Import and Export Modules in ReactJs
* Calc.jsx
```javascript
function add(a, b) {
  let sum = a + b;
  return sum;
}

function sub(a, b) {
  let sub = a - b;
  return sub;
}

function multi(a, b) {
  let mult = a * b;
  return mult;
}

function div(a, b) {
  let div = a / b;
  div = div.toFixed(2); // To display 2 digits after decimals
  return div;
}
export { add, sub, multi, div };
```
* App.jsx
```
import React from "react";
import { add, sub, multi, div } from "./Calc";
function App() {
  return (
    <>
      <ul>
        <li>Sum of Two numbers is {add(30, 3)}</li>
        <li>Sub of Two numbers is {sub(30, 3)}</li>
        <li>Multiplication of two numbers is {multi(10, 3)}</li>
        <li>Division of two numbers {div(10, 3)}</li>
      </ul>
    </>
  );
}

export default App;
```
* index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```
