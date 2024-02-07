import React from "react";

import logo from "./img/mobile-logo.svg";
import search from "./img/mobile-search.svg";
import dots from "./img/mobile-dots.svg";

import "./MobileHeader.css";

function MobileHeader() {
	return (
		<header className="header">
			<div className="header__left">
				<img src={logo} alt="youtube logo" />
			</div>
			<div className="menu__list">
				<img src={search} alt="search icon" className="menu__list_item"/>
				<img src={dots} alt="dots icon" />
			</div>
		</header>
	);
}

export default MobileHeader;
