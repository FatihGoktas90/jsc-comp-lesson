import React from 'react';
import FuncComp from './FuncComp';
class ClassComp extends React.Component{
    
    render(){
        
        return (
            <div>
             <h1>Welcome to ReactJs from CC</h1>
            <p>Age : {this.props.old}</p>
            <p>Car : {this.props.car}</p>
            
            </div>
        )

    }
}
export default ClassComp;