import React from 'react';
import AnimatedLink from '../../HOC/AnimatedLink';

export const WorksList = ({ works, curr }) => {
	return works.map((item) => {
		return (`/${item.url}` !== curr) && (
				<li key={item.url}>
					<AnimatedLink to={`/${item.url}`}>
						<h2>{item.header}</h2>
						<h5 className="content_text">{item.slogan}</h5>
					</AnimatedLink>
				</li>
			)
	});
};
