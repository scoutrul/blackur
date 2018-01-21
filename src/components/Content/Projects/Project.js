import React, { Component } from "react";
import "./project.scss";

import { ProjectContent } from './index'

export default class extends Component {
	render() {
		const {AnimationCss} = this.props;
		return (
			<div className={`project ${AnimationCss}`}>
				<ProjectContent/>
			</div>
		);
	}
}
