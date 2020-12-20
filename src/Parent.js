
import { useReducer } from 'react';
import Child from './Child'
import CountValue from './ReducerState';

function Parent() {
    return(
        <div>
            <h3>Parent Component </h3>
            <Child />
        </div>
    );
}

export default Parent;