import React, { Fragment } from 'react';

export default (props) => {
	const additionHeight = 100;
	return (
		<Fragment>
			<div className={"firstScreen"} style={{ height: props.screenHeight - additionHeight }}>
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
					<p>
						Almost famous - this is a film about a fictional teenager William, who became the fate of a journalist of the music magazine "Rolling Stone" while traveling with the rock band Stillwater with the aim of publishing the main article about this group. The film is based on the real experience of Cameron Crowe, which he received during a trip with the bands The Allman Brothers Band, Led Zeppelin, Eagles. In the subsequent publication in the Rolling Stone, William tells how he fell in love with the trip, lost his virginity, met his idols, almost died in a plane crash, and did not try drugs and other related events.
					</p>
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
