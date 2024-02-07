import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Player from "../../components/Player/Player";
import "./App.css";
import VideoInfo from "../../components/VideoInfo/VideoInfo";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<div className="main__left">
					<Player />
					<VideoInfo />
				</div>

				<SideBar />
			</main>
		</div>
	);
}

export default App;
