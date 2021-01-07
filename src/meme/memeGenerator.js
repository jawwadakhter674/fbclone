import React from 'react';
import  Generator from './generator';
import Header from './Header'

class MemeGenerator extends React.Component{
    render(){
        return(
            <div>

                <Header/>

                <Generator />

                
            </div>
        )
    }
}


export default MemeGenerator;