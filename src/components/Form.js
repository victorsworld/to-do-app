import { useState } from "react"

function Form({ handleNewTodo }) {
    const [input, setInput] = useState("")

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        handleNewTodo(input)
        setInput("")
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange= {(e) => setInput(e.target.value)}/>
                <button className="add">Add</button>
            </form>
        </div>
    )
}

export default Form