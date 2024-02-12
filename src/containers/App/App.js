import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Player from "../../components/Player/Player";
import VideoInfo from "../../components/VideoInfo/VideoInfo";

import "./App.css";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import MobileFooter from "../../components/MobileFooter/MobileFooter";

function App() {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 580px)",
	});
	return (
		<div className="App">
			{isDesktopOrLaptop ? <Header /> : <MobileHeader />}
			<main className="main">
				<div className="main__left">
					<Player />
					<VideoInfo />
				</div>
				<SideBar />
			</main>
			{!isDesktopOrLaptop && <MobileFooter />}
		</div>
	);
}

export default App;
