import React from "react";

import video_1 from "./img/video-1.jpg";
import video_2 from "./img/video-2.jpg";
import video_3 from "./img/video-3.jpg";
import video_4 from "./img/video-4.jpg";
import toggler from './img/toggler.svg'
import "./SideBar.css";

const videos = [
	{
		img: video_1,
		title: "Baby Monitor Technology",
		views: "123k views",
		author: "Dollie Blair",
	},
	{
		img: video_2,
		title: "A Good Autoresponder",
		views: "123k views",
		author: "Dollie Blair",
	},
	{
		img: video_3,
		title: "Selecting The Right Hotel",
		views: "123k views",
		author: "Dollie Blair",
	},
	{
		img: video_4,
		title: "Selecting The Right Hotel",
		views: "123k views",
		author: "Dollie Blair",
	},
];

function SideBar() {
	return (
		<div className="sidebar__container">
			<div className="sidebar__header">
				<p className="sidebar__title">Next</p>
				<div className="sidebar__toggle">
					<p>Autoplay</p>
                    <img src={toggler} alt="toggler" />
				</div>
			</div>
			<ul className="videos__list">
				{videos.map((el, index) => (
					<li key={index + el.title} className="videos__list_item">
						<img className="video__img" src={el.img} alt={el.title} />
						<p className="video__title">{el.title}</p>
						<div className="additional">
							<p>{el.views}</p>
							<p>{el.author}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SideBar;
