import React from 'react';
import AnimatedLink from '../../HOC/AnimatedLink'

export default (props) => <div className='project'
							   style={{ backgroundImage: `url(${props.image})`, backgroundColor: props.color }}>
	<div className="headers">
		<AnimatedLink to={`/${props.url}`}>
			<h1>{props.header}</h1>
		</AnimatedLink>
		<h5>{props.slogan}</h5>
	</div>
	<ul className="services">
		{props.services.map(item => {
			return <li key={item}>{item}</li>
		})}
	</ul>
</div>
