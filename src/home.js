import React from 'react'

import Todo from './Todo'
import apidata from './api'

class  Home extends React.Component {
 constructor(){
    super();
    this.state={
       todos:apidata
    }
 }
 handleChange=(id)=>{
    console.log("changed",id);
    const updated=this.state.todos.map((todo)=>{

      if(todo.id===id){
         todo.completed=!todo.completed
      }
      return todo;
    })
    this.setState({
       todos:updated
    })
    
 }
 
   render(){

      
      const todoitem = this.state.todos.map(item => <Todo key={item.id} item ={item} handleChange={this.handleChange}/>)
      return (
         
         <div className="mainTodo">
         <h1 style={{textAlign:'center' ,color:"black"}}>TODO LIST</h1>
      {todoitem}
      

      </div>
   )
}
}
export default Home;




// function Practice(props) {
//    console.log(props);
   
//    return (
//       <div className="mainTodo">
//          <div>
//             <h1>Jawwad Akhter
//                &
//                {props.Name}
//                {props.Phone}

//             </h1>
//             <p>Name : "Jawwad Akhter"</p>
//             <p>Email : "jawwadakhter674@gmail.com"</p>
//          </div>

//       </div>
//    )
// }

// export default Practice;









// function Styp(props){
//    console.log(props);
   
//    return(
//       <div>
//          <h2 style={{display:!props.question &&"none"}}>Question:{props.question}</h2>
//          <h2 style={{color:!props.question && "#888888"}}> Answer : {props.answer}</h2>
//          <hr/>
//       </div>
//    )
// }
// export default Styp;


