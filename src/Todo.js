import React from 'react'




function Todo(props) {
    console.log(props);
    const styling ={
        
        
    }
    
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={()=>props.handleChange(props.item.id)} />

            <p style={props.item.completed?styling :{display:"none"}}>
                {props.item.text}
            <hr></hr>
            </p>

        </div>
    )
}


export default Todo