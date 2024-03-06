import type { RootState } from "../app/store";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../app/features/counterSlice";

export default function CounterAgain(){

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=> dispatch}></button>
        </div>
    )
}