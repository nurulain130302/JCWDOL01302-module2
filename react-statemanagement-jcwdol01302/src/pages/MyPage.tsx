import { createContext, useContext, useState } from "react";
import "./MyPage.module.css"

interface ITheme{
    theme: string;
}

const ThemeContext = createContext<null | undefined | string>(null)

export default function MyPage(){
    const [theme, setTheme] = useState<string>("light");

    return(
        <ThemeContext.Provider value={theme}>
        <Form theme={theme}></Form>
        <button
        onClick={()=>{
            setTheme("dark");
        }}>
            {" "}
            Set Theme{" "}
        </button>
        </ThemeContext.Provider>
    )
}

function Form(props:ITheme){

    const theme = useContext(ThemeContext)
    return(
        <form style={{border: "1px solid black"}} className={theme}>
            <div>{theme}</div>
            <div>
                <input type="text" name="name" />
                <Button theme={props.theme} />
            </div>
        </form>
    )
}


function Button(props:ITheme){

    const theme = useContext(ThemeContext)
    
    return(
        <button className={theme} type="submit"> 
        {" "}
        Submit 
        </button>
    )
}