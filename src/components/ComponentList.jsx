import React, {useState} from 'react'



const List = (props) => {
    
    const [checked, setChecked] = useState(false);
    
    const checkHandler = (e) =>{
        console.log(e.target.getAttribute("index"))
        const index = e.target.getAttribute("index");
        let tempList = [...props.taskList];
        tempList[index].complete? tempList[index].complete=false: tempList[index].complete=true;
        console.log(tempList[index].complete)
        props.newList(tempList)
    }

    return (
        
        
        <div>
            {
                props.taskList.map((task, i) => {
                    return (<div key={i} className="container d-flex my-2 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            {
                                task.complete?
                                <h4 index={i} style={{textDecoration: "line-through"}}>{task.task}</h4>:<h4 index={i} >{task.task}</h4>
                            }
                            <input index={i} 
                            type="checkbox" 
                            className="mx-3" 
                            name={task.task} 
                            id={task.task} 
                            checked= {task.complete}
                            onChange= {checkHandler}
                            />
                        </div>
                        <button index={i} className="btn btn-danger"
                            onClick={e => { props.deleteItem(i) }}
                        >Delete</button>
                    </div>)
                })
            }
        </div>
    )

}

export default List


