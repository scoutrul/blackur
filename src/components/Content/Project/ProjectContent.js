import React, { Fragment } from 'react';

export default (props) => {
	return (
		<Fragment>
			<div className={"firstScreen"} style={{ 'min-height': props.screenHeight }}>
				<div className="contentContainer">
					<h1>Epson Readyink</h1>
					<h2>Epson Readyink</h2>
					<h3>Epson Readyink</h3>
					<h4>Epson Readyink</h4>
					<h5>Epson Readyink</h5>
					<h6>Epson Readyink</h6>
				</div>
			</div>
			<div className="otherScreen">
				<div className="contentContainer">
					<h1>Epson Readyink</h1>
					<h2>Epson Readyink</h2>
					<h3>Epson Readyink</h3>
					<h4>Epson Readyink</h4>
					<h5>Epson Readyink</h5>
					<h6>Epson Readyink</h6>
				</div>
			</div>
		</Fragment>
	);
};
