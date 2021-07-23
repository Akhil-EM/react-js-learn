
import React, { Component } from 'react';
// import LifeCycle from './components/LifeCycle';
import Hooks from './components/Hooks';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color:'black',
       showLifeCycle:true
    }
  }

  // ChangeColor=()=>{
  //   this.setState({color:'yellow'});
  // }
  
  // hideLifeCycle=()=>{
  //     this.setState({showLifeCycle:false})
  // }

  render() {
    // let component;
    // if(this.state.showLifeCycle){
    //    component=<LifeCycle color={this.state.color}/>
    // }else{

    // }
  //   return (
  //     <div className="App">
  //           {component}
  //           <button onClick={this.ChangeColor}>Click me</button>
  //           <button onClick={this.hideLifeCycle}>Hide Component</button>
  //     </div>
  //   );
  // }

  return(
     <div className='App'>
         <Hooks/>
     </div>)

  }
}

export default App;

