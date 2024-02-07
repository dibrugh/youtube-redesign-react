import React from "react";

import like from "../img/like.svg";
import dislike from "../img/dislike.svg";
import share from "../img/share.svg";
import more from "../img/more.svg";

import arrow from '../img/arrow.svg'

function PlayerInfo() {
	return (
		<div className="player__info_container">
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
						<img src={more} alt="more icon" className="btns__item_more" />
					</div>
				</div>
			</div>
			<img src={arrow} alt="arrow down" className="mobile__arrow" />
		</div>
	);
}

export default PlayerInfo;
