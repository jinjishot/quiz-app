import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
    const {score, setAppState, setScore} = useContext(DataContext)

    const reStartApp = () => {
        setScore(0)
        setAppState("menu")
    }

    return(
        <div className="score">
            <h1>Your Score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={reStartApp}>Back to Menu</button>
        </div>
    )
}

export default Score;