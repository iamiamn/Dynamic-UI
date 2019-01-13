// Import the react and reactdom libraries
import React from "react";
import ReactDom from "react-dom";
// every code we write in a file is a tiny universe. files can't share codes with each other.
//'react' is insider the node_module folder

// Create a react componet
//
// const App = function(){
// const App = () => {
//   return (
//     <div>
//       <label class="label" for="name">
//         Enter name:
//       </label>
//       <input id="name" type="text" />
//       <button style="background-color:blue; color:white;">
//         Submit
//       </button>
//     </div>
//   )
// };//this is a html code above, and we should change the style content so it can be
//be executed. as JSX
const App = () => {
  // const buttonText = [123456, 'Hi'];//element will be pushed together
  const buttonText = {text:'Click me'}
  const style = { backgroundColor: 'blue', color: 'white' }
  const text = 'Enter name';
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}

      </button>
    </div>
  );
};//here the curly braces means I want to reference a javascript variable
// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
