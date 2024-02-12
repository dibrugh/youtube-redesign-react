import React from "react";
import { useMediaQuery } from "react-responsive";

import Video from "./Video/Video";
import PlayerInfo from "./PlayerInfo/PlayerInfo";

import "./Player.css";
import MobileVideo from "./MobileVideo/MobileVideo";

function Player() {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 580px)",
	});
	return (
		<div className="player__container">
			{isDesktopOrLaptop ? <Video /> : <MobileVideo />}
			<PlayerInfo />
			<span className="border__line"></span>
		</div>
	);
}

export default Player;
