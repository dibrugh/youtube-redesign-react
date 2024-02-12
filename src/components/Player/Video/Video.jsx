import React from "react";

import player from "../img/video-player.jpeg";

import progress from "../img/progress.svg";

import pause from "../img/pause.svg";
import next from "../img/next.svg";
import volume from "../img/volume.svg";

import subtitles from "../img/subtitles.svg";
import settings from "../img/settings.svg";
import size from "../img/size.svg";
import screen from "../img/screen.svg";

function Video() {
	return (
		<div className="player">
			<img src={player} alt="" className="player__img" />
			<div className="timestamps">
				<div className="timestamps__text">
					<p className="timestamp__current">1:34</p>
					<p className="timestamp__total">19:00</p>
				</div>
				<img src={progress} alt="progress bar" />
			</div>
			<div className="controls">
				<div className="controls__left">
					<img src={pause} alt="pause" />
					<img src={next} alt="next" />
					<img src={volume} alt="volume" />
				</div>
				<div className="controls__right">
					<img src={subtitles} alt="subtitles" />
					<img src={settings} alt="settings" />
					<img src={size} alt="size" />
					<img src={screen} alt="screen" />
				</div>
			</div>
		</div>
	);
}

export default Video;
