

import { useReducer } from "react";
import CountValue from "./ReducerState";

function Child() {
    let [state, dispatch] = useReducer(CountValue, 10);
    return(
        <div>
            <h3>Child Component {state}</h3>
            <button onClick={ ()=> {dispatch("INCREMENT");}}>Increment</button>
            <button onClick={ ()=> {dispatch("DECREMENT");}}>Decrement</button>
        </div>
    );
}

export default Child;