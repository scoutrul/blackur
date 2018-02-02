import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnimatedLink from '../../HOC/AnimatedLink'
import './works.scss';
import { setTitle_action } from "../../../store/reducers/Content";

const connectProps = (state) => {
	return {
		works: state.Content.works,
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
	
		componentDidMount() {
			this.props.setTitle(this.props.title);
		}
		
	render() {
		const WorksList = () => this.props.works.map(item =>
			<li key={item.url}>
				<AnimatedLink to={`/${item.url}`}>
					<h2>{item.header}</h2>
					<span>{item.slogan}</span>
				</AnimatedLink>
			</li>);
		
		const { AnimationCss } = this.props;
		return (
			<div className={`works contentContainer ${AnimationCss}`}>
				<ul className="list content">
					<WorksList/>
				</ul>
			</div>
		);
	}
}
