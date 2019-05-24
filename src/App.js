import React, {Component} from 'react';
import * as firebase from 'firebase';
import './App.css';
import Recipe from "./Recipe";
class App extends Component{
  constructor(){
		super();
		this.state = {
			speed: 10,
      obj: {},
      itemClicked: false,
      itemId: "",
      instructions: "",
      ingredients: ""
		};
	}
  componentDidMount(){
    const rootRef = firebase.database().ref();
    rootRef.on('value', snap => {
        this.setState({
          obj: snap.val()
        })
    });
  }

  handleClick(i){
    this.setState({
      itemClicked: true,
      itemId: i,
      instructions: this.state.obj[i]["instructions"],
      ingredients: this.state.obj[i]["ingredients"],
    });
  }
  createTable = () => {
      let table = []
      table.push(<tr><td>name</td><td>description</td></tr>)
      var i = 0;
      // Outer loop to create parent
      for (var x in this.state.obj) {

        let children = []
        children.push(<td>{x}</td>)
        children.push(<td>{this.state.obj[x]["description"]}</td>)
        //Create the parent and add the children
        table.push(<tr id={i} onClick={this.handleClick.bind(this,x)}>{children}</tr>)
        i=i+1;
      }
      return table
    }
  toggle = () => {
    this.setState({
      itemClicked: false,
      itemId: "",
      instructions: "",
      ingredients: ""
    });
  }
	render(){
		return(
			<div className = "App">
				{!this.state.itemClicked && <table border="1">{this.createTable()}</table>}
        {this.state.itemClicked &&
          <div>
            <Recipe name={this.state.itemId} instructions={this.state.instructions} ingredients={this.state.ingredients} />
            <button onClick={this.toggle} >Return to recipe list</button>
          </div>
        }
			</div>
		);
	}
}

export default App;
