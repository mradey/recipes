import React, {Component} from 'react';
import './App.css';

export default class Recipe extends Component{
  makeList = (elements) => {
      let li = []
      for (var x in elements) {
        li.push(<li>{elements[x]}</li>);
      }
      return li;
    }
	render(){
		return(
			<div className = "App">
        <h1>{this.props.name}</h1>
        <h2>instructions</h2>
        <ol>{this.makeList(this.props.instructions)}</ol>
        <h2>ingredients</h2>
        <ul>{this.makeList(this.props.ingredients)}</ul>
			</div>
		);
	}
}
