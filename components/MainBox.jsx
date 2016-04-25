import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserActions from "../actions/user";
import CommonActions from "../actions/common";
import { Statue } from "../constants";
const assign = Object.assign;

class MainBox extends Component{
	constructor(...props){
		super(...props);
		this.getInfo.call(this);
	}

	getInfo(){
		const { actions, personInfo } = this.props; 
		actions.getInfo(personInfo.userid);
	}

	render(){
		return (
			<div></div>
		)
	}

}



function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return {		
		actions: 
			bindActionCreators(
				assign({}, UserActions, CommonActions), 
				dispatch
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBox);