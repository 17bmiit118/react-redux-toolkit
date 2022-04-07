import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from '../features/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
         <button onClick={()=> dispatch(increment())}>+</button>
          {count}
          <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}

export default Counter;