import React, { Component } from 'react';
import './contacts.scss'
import { setTitle_action } from "../../../store/reducers/Content";
import { connect } from "react-redux";

const connectProps = (state) => {
	return {
		title: state.Content.pages.contacts.title,
	}
};
const connectDispatch = dispatch => {
	return {
		setTitle: (payload) => {
			dispatch(setTitle_action(payload))
		}
	}
};
@connect(connectProps, connectDispatch)
export default class extends Component {
	
	state = {
		email: '',
		message: ''
	};
	
	componentDidMount() {
		this.props.setTitle(this.props.title);
	}
	
	_send = () => {
		this.setState({
			email: '',
			message: ''
		})
	};
	
	_onChangeEmail = (e) => {
		this.setState({ email: e.target.value })
	};
	_onChangeMessage = (e) => {
		this.setState({ message: e.target.value })
	};
	
	render() {
		const { AnimationCss } = this.props;
		
		
		return (
			<div className={`contentContainer container page-contacts ${AnimationCss}`}>
				<div className="content">
					<h1><span>Tell us your</span></h1>
					<h1 className={'dark'}>black secrets.</h1>
					<form>
						
						<label>
							<h4 >enter your email</h4>
							<input value={this.state.email} onChange={e => this._onChangeEmail(e)} autoFocus/>
						</label>
						
						<label>
							<h4 style={{ opacity: this.state.message && 0 }}>type message</h4>
							<textarea rows={3} value={this.state.message} onChange={e => this._onChangeMessage(e)}/>
						</label>
						
						<h4 className={'send'} onClick={this._send}>
							<img src='images/icon_send.svg'/>
							<span>Send</span>
						</h4>
					</form>
				
				</div>
			
			</div>
		);
	}
}
