# xtacy
A state and action management library for javascript and compatible with any javascript framework or library.

after install de package with, nmp install xtacy

let's start importing and instantiating xtacy.

  import xtacy from "xtacy";

  export const myNewState = new xtacy(initialState);

here we are starting our new state and exporting it,
we must instance xtacy in a main file like the "App" component in react or the similar in vue, angular or any other framework,
if you are using vanilla javascript you can instance xtacy in "index.js" or any other main script

#Main Properties.
  myNewState.state: this property contains the current state.
  myNewState.prevState: this property contains the previous state (the initial value of this property is "null").

#Methods.
  myNewState.setState(newState): this method sets a new value to the state.
  
  myNewState.activateState((currentState)=>{setter(currentState)}): this method run a function (like a useState setter) when setState is executed and
  whose argument is the current state.
  
  myNewState.activatePrevState(): the same as "activateState" but with the previous state.
  
In the first step we have instantiated our state, now we go to use it.

##An example with react would be like this:

import { myNewState } from "./App.js";

function handleClick(){
  myNewState.setState(newState)
};

<button onClick={handleClick} />
//When the user clicks the button "activateState()" will be executed wherever it is.

##Now let's activate the state.

import { myNewState } from "./App.js";

const [state, setState] = useState(myNewState.state);

myNewState.activateState((currentState)=>{setState(currentState)});
// or just like myNewState.activatestate(setState);

function MyComponent(){
{state ? <div> is true </div> : <div> is false </div>}
};

##As easy as this, this is the easiest way to manage your global state, Happy hacking and see you latter in the next update, bye :D.
