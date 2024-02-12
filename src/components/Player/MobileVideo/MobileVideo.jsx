import React from "react";

import player from "../img/video-player.jpeg";

import progress from "../img/progress.svg";

import pause from "../img/pause-mobile.svg";

import volume from "../img/volume-mobile.svg";

function MobileVideo() {
	return (
		<div className="player">
			<img src={player} alt="" className="player__img" />

			<div className="mobile__controls">
				<div className="mobile__controls_left">
					<img src={pause} alt="pause" />
				</div>
				<div className="mobile__timestamps">
					<p className="mobile__timestamp_current">1:34</p>
					<img src={progress} alt="progress bar" />
					<p className="mobile__timestamp_total">-10:00</p>
				</div>
				<div className="mobile__controls_right">
					<img src={volume} alt="volume" />
				</div>
			</div>
		</div>
	);
}

export default MobileVideo;
