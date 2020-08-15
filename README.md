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
```javascript
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
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```
## 12. Props in ReactJS 
* Props ( Which Stands for properties )
* React Props are like function arguments in JavaScript and attributes
Cards.jsx
```javascript
import React from "react";

function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href="" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
```
index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./index.css";

ReactDOM.render(
  <>
    <Cards
      imgsrc="https://source.unsplash.com/400x400/?nature,water"
      title="A Netflix original series"
      sname="DARK"
    />
    <Cards
      imgsrc="https://source.unsplash.com/400x400/?coding"
      title="A Netflix original series"
      sname="Coding with love"
    />
    <Cards
      imgsrc="https://source.unsplash.com/400x400/?programmig"
      title="A Netflix original series"
      sname="Programming Days"
    />
  </>,
  document.getElementById("root")
);
```
## 13. React Hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

**Types of Hooks**
Below are some of the major Hooks that will be used generally in your React apps:

* useState — allows us to write pure functions with state in them
* useEffect — lets us perform side effects. Side effects can be API calls, updating the DOM, subscribing to event listeners
* useContext — allows us to write pure functions with context in them
* useRef — allows us to write pure functions that return a mutable ref object

```javascript
import React, { useState } from 'react';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## 14. Events in ReactJS
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

* React events are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.

#### Some Example of Events :-
1. **onChange**	An HTML element has been changed
2. **onClick**	The user clicks an HTML element
3. **onMouseOver**	The user moves the mouse over an HTML element
4. **onMouseOut**	The user moves the mouse away from an HTML element
5. **onkeyDown**	The user pushes a keyboard key
6. **onLoad**	The browser has finished loading the page

src/App.jsx
```javascript
import React, { useState } from "react";

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);

  const [name, setName] = useState("Click Me");

  const bgChange = () => {
    // console.log("clicked");
    let newBg = "#34495e";
    setBg(newBg);
    setName("Ouch !! 😫");
  };

  const bgBack = () => {
    setBg(purple);
    setName("Ayyo !! 😌");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
};

export default App;
```
src/index.css
```css
* {
  padding: 0;
  margin: 0;
}
div {
  width: 100%;
  height: 100vh;
}

button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: lightcoral;
  font-size: 15px;
  font-weight: 500;
}
button:hover {
  background-color: #dde1e7;
}
h1 {
  text-align: center;
}
```
src/index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
```
## 15. Controlled Component in ReactJS
src/App.jsx
```javascript
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [fullName, setfullName] = useState();

  const inputEvent = (event) => {
    // console.log();
    setName(event.target.value);
  };

  const onSubmit = () => {
    setfullName(name);
  };
  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputEvent}
          value={name}
        ></input>
        <button type="submit" onClick={onSubmit}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default App;
```
src/index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render( < App / > , document.getElementById("root"));
```

## 16. Handling Form ( Complex State )
src/app.jsx
```javascript
import React, { useState } from "react";

const App = () => {
  // For changing the state
  const [FullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      // console.log(preValue);
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  return (
    <>
      <div className="main-div">
        <h1>
          Hello {FullName.fname} {FullName.lname}
        </h1>
        <form onSubmit={onSubmits}>
          <input
            type="text"
            placeholder="Enter your FirstName"
            name="fname"
            value={FullName.fname}
            onChange={inputEvent}
          />
          <input
            type="text"
            placeholder="Enter your LastName"
            name="lname"
            value={FullName.lname}
            onChange={inputEvent}
          />
          {/* <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={inputEvent}
          /> */}
          <button type="submit" onClick={onSubmits}>
            Click Me
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
```
src/index.css
```css
* {
  padding: 0;
  margin: 0;
}

.main-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  margin-left: 10px;
  margin-bottom: 10px;

}

button {
  margin-left: 120px;
  padding: 10px 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: lightcoral;
  font-size: 15px;
  font-weight: 500;
}

button:hover {
  background-color: #dde1e7;
}

h1 {
  text-align: center;
}
```
src/index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
```

## 17. Spread Operator in React JS
* It is denoted by three dots ```...```
* We can use the spread operator on iterables like a String or an array 
* Usage of Spread Operator
  * Copying an array
  * Concatenating or combining arrays
  * Combining objects
```javascript
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));

//Case 1: Use of Spread Operator (...)
const fullName = ["Naveen", "Babu"];

const bio = [1, ...fullName, 19, "male"];

console.log(fullName);
console.log(bio);

// Case 2 : In Spreads operator in object
const fullName = {
    fname:'Naveen',
    lastName : 'babu'
}

const biodata = {
    id:1,
    ...fullName,
    age:19,
    gender:male
};

console.log(fullName);
console.log(biodata);
```

## 18. Adding Bootstrap in ReactJs with the help of npm 
* What is npm ?
1. npm is the world's largest Software Registry.
2. The registry contains over 800,000 code packages. 
3. Full form of npm is node package manager

* Software package manager
1. All npm packages are defined in files called package.json. Ex: npm init
2. The content of package.json must be written in JSON.
3. At least two fields must be present in the defination file: name and version

* How to install bootstrap ?
1. Open the terminal and hit ```npm i bootstrap```
2. Import the bootstrap files ```import "../node_modules/bootstrap/dist/css/bootstrap.min.css";```
3. Now you are ready to access bootstrap classes

src/App.jsx
```javascript
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text-center mb-5 mt-2">Welcome to my WebPage</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/100/101"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/101/100"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/100/100"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
```
## 19. createContext()
* React Hooks provides a concept call **Context**
* React Context API allows you to easily access data at different level of the components tree, without passing props to every level
src/App.jsx
```javascript
import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Naveen"}>
        <LastName.Provider value={"Babu"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
```
src/ComA.jsx
```javascript
import React from "react";
import ComB from "./ComC";

const ComA = () => {
  return <ComB />;
};

export default ComA;
```

src/ComB
```javascript
import React from "react";
import ComC from "./ComC";

const ComB = () => {
  return <ComC />;
};

export default ComB;
```
src/ComC
```javascript
import React from "react";
import { FirstName, LastName } from "./App";

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My name is {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
```
## 20. useContext()
* Instead of using Consumer we can use useContext() to make code less and effective.
src/App.jsx
```javascript
import React, { createContext } from "react";
import ComB from "./ComB";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Naveen"}>
        <LastName.Provider value={"Babu"}>
          <ComB />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
```

src/ComB.jsx
```javascript
import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

const ComB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      My name is {fname}
      {lname}
    </h1>
  );
};

export default ComB;
```
