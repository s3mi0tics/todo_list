import React, {useState} from 'react'
import Form from './ComponentForm'
import List from './ComponentList'

const Container = () => {
    
    const [taskList, settaskList] = useState([])

    const recieveInput = (input)=>{
        console.log(input)
        settaskList([...taskList, input])
    }

    const newList = (tempList) => {
        settaskList(tempList)
    }

    const deleteItem = (idx) =>{
        console.log(idx)
        const newList = taskList.filter((taskList, i) => {
            return i !== idx})
        settaskList(newList)
    }
    
    return (
        <div className="p-3">
            <Form recieveInput={recieveInput}/>
            <List taskList={taskList} newList={newList} deleteItem={deleteItem}/>
        </div>
    )
}

export default Container
