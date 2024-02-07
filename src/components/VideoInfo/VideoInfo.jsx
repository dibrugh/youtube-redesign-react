import React from "react";

import './VideoInfo.css'

import logo from "./img/channel-logo.svg";

function VideoInfo() {
	return (
		<div className="video__additional">
			<div className="video__additional_desc">
				<img src={logo} alt="channel logo" className="desc__logo" />
				<div className="desc__text">
					<p className="desc__text_title">Food & Drink</p>
					<p className="desc__text_pub">Published on 14 Jun 2019</p>
					<p className="desc__text_content">
						A successful marketing plan relies heavily on the pulling-power of
						advertising copy. Writing result-oriented ad copy is difficult, as
						it must appeal to, entice, and convince consumers to take action.
						There is no magic formula to write perfect ad copy; it is based on a
						number of factors, including ad placement, demographic, even the
						consumer’s mood when they see your ad.{" "}
					</p>
                    <div className="desc__text_more">Show more</div>
				</div>
			</div>
			<button className="video__additional_sub">Subscribe 2.3m</button>
		</div>
	);
}

export default VideoInfo;
