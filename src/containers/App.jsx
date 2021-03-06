import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import LoginBox from "./LoginBox.jsx";
import MainBox from "./MainBox.jsx";
import { Statue } from "../constants";
import "../sources/style/sass/common.scss";

class App extends Component{
	render(){
		const { 
			statue
		} = this.props;
		// 通过statue切换登录组件和聊天主组件
		const isLogin = statue === Statue.LOGINED;
		return (
			<div className = "main" onClick = { this.onclick }>
				{ isLogin ? 
					<MainBox />: 
					<LoginBox />  
				}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		statue: state.statue
	};
}


export default connect(mapStateToProps)(App);