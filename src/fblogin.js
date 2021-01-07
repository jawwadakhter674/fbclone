import React from 'react';
import {fire,provider} from './firebase'
// import firebase from 'firebase'
// import  "firebase/auth"



class Facebook extends React.Component{

    signInWithPopup=()=>{
        fire.auth().signInWithPopup(provider)
        .then((result,error)=>{
            if(error){
                alert('error',error)
            }
            else{
                alert(result)
                console.log(result.user.displayName);
                console.log(result.user);
                
                // console.log(profile.name);
               
            }


             
            var photo = result.user.photoURL
            let name = document.getElementById('name');
        let div = document.createElement('div')
        var text = result.user.displayName;
        

        let img =document.createElement('img');
        img.setAttribute("src", result.user.photoURL);
        div.appendChild(img)
        name.appendChild(div)
        // div.appendChild(text)
        div.style.backgroundImage="https://graph.facebook.com/2472355193071969/picture"
        })
    }
    render(){
        return (
            <div id="name">
                {/* <p>{text}</p> */}

                <button onClick={this.signInWithPopup}>LogIn</button>


                {/* <img src={photo} /> */}
            </div>
           
        )
    }
}


export default Facebook;