import { useContext, useState } from "react"; //state
import { DataContext } from "../App"; //context

const Menu = () => {
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1>Menu Component</h1>
            <button onClick={() => setAppState("quiz")}>Start Exam</button>
        </div>
    )
}

export default Menu;