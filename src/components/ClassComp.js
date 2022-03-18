import React from 'react';
import FuncComp from './FuncComp';
class ClassComp extends React.Component{
    constructor(props){
        super(props);
        this.state={student :"Fatih", counter:0}
        // state ={student:"Fatih", counter:1}
    }
   increaseCounter= ()=> {
       this.setState({counter:this.state.counter+1})
   }
   decreaseCounter = ()=> {
       this.setState({counter:this.state.counter-1})
   }
    render(){
        const {old,car}=this.props;
        
        return (
            <div>
             <h1>Welcome to ReactJs from CC</h1>
            {/* <p>Age : {old}</p>
            <p>Car : {car}</p> */}
            {/* <p>Student :{this.state.student}</p> */}
            <p>Counter : {this.state.counter}</p>
            <button onClick={this.increaseCounter}>Increase</button>
            <button onClick={this.decreaseCounter}>Decrease</button>
            </div>
        )

    }
}
export default ClassComp;