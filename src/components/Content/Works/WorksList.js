import React, { Component } from 'react';
import AnimatedLink from '../../HOC/AnimatedLink';


class WorkList extends Component {

	componentDidMount() {
		// console.log(this)
	}
	render() {
		const { works, curr } = this.props;

		return works.map((item) => {
			return (`/${item.url}` !== curr) && (
				<li key={item.url} className={'workList_item opacity_hover'} >
					<AnimatedLink to={`/${item.url}`}>
						<div>
							<h2>{item.header}</h2>
						</div>
						<div>
							<h5 className="content_text">{item.subheader}</h5>
						</div>
					</AnimatedLink>
				</li>
			)
		});
	}
}

export default WorkList;