import React, {useState} from 'react'

const Form = (props) => {
    const [input, setInput] = useState("")

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     props.recieveInput(input);
    //     setInput("");
    // }
    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = {
            task: input,
            complete: false
        }
        console.log(newTask)
        props.recieveInput(newTask);
        setInput("");
    }

    return (
        <div>
            <h1>To do list:</h1>
            <div className="container">
                <form onSubmit={submitHandler} className="row">
                    <input
                        type="text"
                        className="form-control col m-3"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    ></input>
                    <button className= "btn btn-primary col-sm-3 m-3">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form
