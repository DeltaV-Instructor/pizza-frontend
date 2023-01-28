import './App.css';
import React from 'react';

class App extends React.Component {


//add constructor
constructor(props){
  super(props);
  this.state = {
    //get a pizza object back from server
    pizzaData: {},
    //we are passing a pizzatype to our server
    pizzaType: '',
    //conditionaly render our api object that is returned to us
    showPizza: false
  }
}


//add helper functions
handleOnChange = (event) => {
  //is going to capture our input on change keystrokesss. to update state
// console.log(event.target.value);
this.setState({
pizzaType: event.target.value
});

};


handleOnSubmit = (event) => {
  event.preventDefault();
  console.log("🚀 ~ file: App.js:30 ~ App ~ event", event)
  
}

render(){
  //add form to allow user to request pizza types
  // conditional render when we have state updated.
  console.log(this.state.pizzaType); 
  return(

    <>
      <h1>hello Pizza world!</h1>
      <form onSubmit={this.handleOnSubmit}>
        <label>
          <input type="text"  onChange={this.handleOnChange}/>
        </label>
        <button type="submit">Get Pizza</button>
      </form>
    </>
  );
}

}
export default App;
