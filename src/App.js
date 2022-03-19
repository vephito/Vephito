import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Intro.js";
import About from "./components/Aboutme.js";
function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Intro />
        {/* <About />*/}
      </div>
    </div>
  );
}

export default App;
