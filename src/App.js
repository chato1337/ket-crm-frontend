import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
// import "./styles/kuepastrap.scss";
import "./styles/master.scss";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Main />
			<Aside />
		</div>
	);
}

export default App;
