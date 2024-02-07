import React from "react";

import player from "./img/video-player.jpeg";

import progress from "./img/progress.svg";

import pause from "./img/pause.svg";
import next from "./img/next.svg";
import volume from "./img/volume.svg";

import subtitles from "./img/subtitles.svg";
import settings from "./img/settings.svg";
import size from "./img/size.svg";
import screen from "./img/screen.svg";

import like from "./img/like.svg";
import dislike from "./img/dislike.svg";
import share from "./img/share.svg";
import more from "./img/more.svg";

import "./Player.css";

function Player() {
	return (
		<div className="player__container">
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
			<div className="player__info">
				<div className="player__info_title">
					Dude You Re Getting A Telescope
				</div>
				<div className="player__info_additional">
					<p className="player__info_additional-views">123k views</p>
					<div className="player__info_additional-btns">
						<button className="btns__item">
							<img src={like} alt="like button" />
							<p>123k</p>
						</button>
						<button className="btns__item">
							<img src={dislike} alt="dislike button" />
							<p>435k</p>
						</button>
						<button className="btns__item">
							<img src={share} alt="share button" />
							<p>Share</p>
						</button>
						<img src={more} alt="more icon" className="btns__item_like" />
					</div>
				</div>
			</div>
			<span className="border__line"></span>
		</div>
	);
}

export default Player;
