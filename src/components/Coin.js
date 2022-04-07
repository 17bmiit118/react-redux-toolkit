import { useSelector } from "react-redux";

const Coin = () => {

    const count = useSelector((state)=>state.counter.count);

    return (
            <span>Count From Other Component: {count}</span>    
    )
}

export default Coin;