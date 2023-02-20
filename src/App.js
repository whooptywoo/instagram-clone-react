import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	return (
		<div className="flex h-screen w-screen justify-between">
			<Sidebar />
			<div className="main flex">
				<div className="content flex-grow">
				</div>
				<div className="infobar border-2"></div>
			</div>
		</div>
	);
}

export default App;
