import React from "react";

import home from "./img/mobile-home.svg";
import lib from "./img/mobile-library.svg";
import sub from "./img/mobile-subscription.svg";
import trend from "./img/mobile-trending.svg";

import "./MobileFooter.css";

function MobileFooter() {
	return (
		<footer className="footer">
			<nav className="footer__nav">
				<ul className="nav__list">
					<li className="nav__list_item">
						<img src={home} alt="Home" />
						<p>Home</p>
					</li>
					<li className="nav__list_item">
						<img src={trend} alt="Trending" />
						<p>Trending</p>
					</li>
					<li className="nav__list_item">
						<img src={sub} alt="Subscription" />
						<p>Subscription</p>
					</li>
					<li className="nav__list_item">
						<img src={lib} alt="Library" />
						<p>Library</p>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default MobileFooter;
