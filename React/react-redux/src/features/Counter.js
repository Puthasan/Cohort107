import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./counterSlice.js"

import { selectCount, increment, decrement } from "./counterSlice.js"

function Counter() {
  //reading the count state
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(1)



  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>

      <input type="number" 
      min="1" 
      step="1"
      value={incrementAmount}
      onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button onClick={() => dispatch(decrement())}>-</button>

      <br />

      <button onClick={() => dispatch(decrement(incrementAmount))}>-amount</button> 
    </div>
  );
}


export default Counter

