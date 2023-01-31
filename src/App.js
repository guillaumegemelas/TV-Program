import "./App.css";
import logo from "./pictures/logo.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="logo M6" />
        </div>
      </header>
      <main>
        <Section />
      </main>
    </div>
  );
}

export default App;
