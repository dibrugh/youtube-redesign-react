import React from "react";


import logo from "./img/youtube-logo.svg";
import search from "./img/search.svg";
import dots from "./img/dots.svg";
import camera from "./img/camera.svg";
import bell from "./img/bell.svg";
import userpic from "./img/userpic.svg";

import './Header.css'

function Header() {
	return (
		<header class="header">
			<div class="header__left">
				<div class="header__burger-menu">
					<span class="burger-line"></span>
					<span class="burger-line"></span>
					<span class="burger-line"></span>
				</div>
				<a href="#">
					<img class="header__logo" src={logo} alt="youtube logo" />
				</a>

				<div class="header__search search">
					<input type="text" class="search__input" placeholder="Search" />
					<img
						src={search}
						alt="search-icon"
						class="search__icon"
					/>
				</div>
			</div>
			<nav class="header__menu">
				<ul class="menu__list">
					<li class="menu__list_item">
						<a href="#">
							<img
								src={camera}
								alt="header menu icon"
								class="menu__list_item-img"
							/>
						</a>
					</li>
					<li class="menu__list_item">
						<a href="#">
							<img
								src={dots}
								alt="header menu icon"
								class="menu__list_item-img"
							/>
						</a>
					</li>
					<li class="menu__list_item">
						<a class="notification" href="#">
							<img
								src={bell}
								alt="header menu icon"
								class="menu__list_item-img"
							/>
							<span class="notification__missed">3</span>
						</a>
					</li>

					<li class="menu__list_item">
						<a href="#">
							<img
								src={userpic}
								alt="header menu icon"
								class="menu__list_item-img"
							/>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
