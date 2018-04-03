import React, { Component } from 'react';
import './about.scss';
import { connect } from 'react-redux';
import { setTitle_action } from '../../../store/reducers/Content';

const connectDispatch = (dispatch) => {
	return {
		setTitle: (payload) => {
			dispatch(setTitle_action(payload));
		}
	};
};
const connectProps = (state) => {
	return {
		content: state.Content.pages.about.content
	};
};

@connect(connectProps, connectDispatch)
export default class extends Component {
	componentDidMount() {
		this.props.setTitle('We help products find their place in digital void.');
	}

	render() {
		const { AnimationCss } = this.props;

		const { header_white, header_black, paragraphs_top, paragraphs_bottom, slogans, contacts } = this.props.content;
		return (
			<div className={`contentContainer page-about ${AnimationCss}`}>
				<div className="content">
					<h1>{header_white}</h1>
					<h1 className={'dark'}>{header_black}</h1>
					<div className="column content_text">{paragraphs_top.map((p,i) => <div key={i}>{p}</div>)}</div>
					<h3>
						{slogans.map((slogan, i) => (
							<span key={i}>
								{slogan}
								<br />
							</span>
						))}
					</h3>
					<div className="column content_text">
						{paragraphs_bottom.map((p,i) => <div key={i}>{p}</div>)}
					</div>

					<h3 className="dark">
						{contacts.slogan}
						<a href={`mailto:${contacts.email}`} className={'mail'}>
							<span>{contacts.email}</span>
						</a>
					</h3>
				</div>
			</div>
		);
	}
}
