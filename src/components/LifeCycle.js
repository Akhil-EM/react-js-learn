import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color:'green'
        }
        console.log('constructor');
    }
     
    // static getDerivedStateFromProps(props, state) {
    //     console.log('get derived state from props');
    //     return {color:props.color};
    // }

    // componentDidMount(){
    //     console.log('component did mount');
    //     ///called after render place to call api 
    //     this.setState({color:'blue'})
    // }

    ///updating
     static getDerivedStateFromProps(props, state) {
        console.log('get derived state from props');
        return {color:props.color};
     }
    //  shouldComponentUpdate(){
    //     console.log('should component update')
    //     return true;///states whether component should update or not on prop or state change
    //                  ///if it is false component will not re-render on update
    //  }
    // getSnapshotBeforeUpdate(preState,preProps){
    //     console.log(preProps,'get snapshot before update')
    //     //here we can get the previous props or state right before update
    //     return null;
    // }
    // componentDidUpdate(){
    //     console.log(this.props,'component did update')
    //     //must use if we are using getSnapshotBeforeUpdate.
    // }
   
    componentWillUnmount(){
        console.log('component unmounted from screen');
        // called when the component taken away from dom
    }


    render() {
        console.log('Render');
        return (
            <div>
                I like {this.state.color}
            </div>
        );
    }
}

export default LifeCycle;


//mounting 
// 1.constructor
// 2.getDerivedStateFromProps
// 3.render
// 4.componentDidMount

//updating
// 1.getDerivedStateFromProps
// 2.shouldComponentUpdate
// 3.render
// 4.getSnapshotBeforeUpdate 
// 5.componentDidUpdate

// un mounting
// 1.componentWillUnmount