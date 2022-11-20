import "./App.css";
import HomePage from "./Pages/HomePage";
import ScrollToTop from "react-scroll-to-top";

function App() {
    return (
        <div className="App font-open">
            <ScrollToTop
                smooth
                color="#FE1A00"
                viewBox="0 0 150 250"
                style={{ borderRadius: "20%", right: 30, bottom: 100, }}
            />
            <HomePage />
        </div>
    );
}

export default App;
