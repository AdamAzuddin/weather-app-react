import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import SquareWidgets from "./components/SquareWidgets";



function App() {
  return (
    <div className="App" >
      <Header/>
      <Weather/>
      <SquareWidgets/>
    </div>
  );
}

export default App;
