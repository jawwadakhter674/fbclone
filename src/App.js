// import logo from './logo.svg';
// import { ReactComponent } from '*.svg';
import React  from 'react' 
import './App.css';
import Home from './home'
import Practice from './home'
import UsingState from './usestate'
import MemeGenerator from './meme/memeGenerator'
// import Styp from './home'
import apidata from './api'
// import Fblogin from './fblogin' 
import Facebook from "./fblogin"

// import Product from './product'




class MyApp extends React.Component {
  constructor(){
    super()
    this.state={
      count :0,
      isLoading :true,
      Messages:["Hello ","Jawwad"],
      loggin:false,
      character:{},
      event:"akhter"
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
handleChange(){
  // e.preventDefault();
  let event = document.getElementById("event")
  this.setState({
    event : event.value
  })

}
  // handleClick(){
  //  this.setState({
  //    count : (this.state.count +1)*2
  //  })
  // }
handleClick(){
  let logg=this.state.loggin
  logg=true
  this.setState({
    loggin:logg
  })
}
  
  
// }
  // static getDrivedStateFromProps(state,props){
  //   //return new updated props and state
  // }




componentDidMount(){
  //Get Data from api or other way
  setTimeout(() => {
    this.setState({
      isLoading:false
    })
  }, 3000);

}


// shouldComponentUpdate(nextprops,nextstate){
// //return true if update 
// }


// componentDidMount(){
//   fetch("https://api.github.com/users")
//     .then(response=>response.json())
//     .then(data=>{
//       console.log(data);
      
//       this.setState({
//         character:data
//       })
//     })
// }


// componentWillUnmount(){

// }

render(){

    // const apiData=apidata.map(joke=><Styp key={joke.id} question={joke.question} answer={joke.answer}/>)  
    // const apiData=apidata.map(item=><Product key={item.id} product={item}/>)  
    // let apiData =apidata.map(v=> <Product key={v.id} product={v}/>)
    
    // const productName=apidata.map(item=><Product key={item.id} product={item} />)
    let buttonTxt = this.state.loggin?"Log In":"LogOut"
    let displayTxt = this.state.loggin?"LogOut":"LogIn"
  return(
      <div>

        <Facebook />


   
   {/* <Product name ="jawwad"/> */}
  {/* {productName} */}
<Home/>

    <h1>Count</h1>
    <h1>{this.state.count}</h1>
     <button onClick={this.handleClick}>Change</button>
     <button onClick={()=>this.setState({count : (this.state.count -1)/2})}>back</button>
     
     <UsingState  isLoading={this.state.isLoading} />

     <h2>You have {this.state.Messages.length} Unread Messages</h2>


     <button onClick={this.handleClick}>{buttonTxt}</button>
    <h1>{displayTxt}</h1>



    <h1>{this.state.character.id}</h1>



    <form>
      <input id="event" type="text" placeholder="Enter Your Name"  />
      <button onClick={this.handleChange}>changeState</button>
      <h1>{this.state.event}</h1>
    </form>

   


   <MemeGenerator />
    </div>
  )
}
}

export default MyApp;



