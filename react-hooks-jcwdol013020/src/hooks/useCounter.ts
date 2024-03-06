import { useState } from "react";

function useCounter(val: number, step: number){
    const [count, setCount] = useState<number>(val)

    function increment(){
        setCount(count+step);
    }

    function decrement(){
        setCount(count-step);
    }

    return [count, increment, decrement]
}

export function useTest(){
    return "use test"
}

export default useCounter;