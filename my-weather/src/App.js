import logo from "./logo.svg";
import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Weather from "./components/Weather";
import SquareWidgets from "./components/SquareWidgets";



function App() {
  return (
    <div className="App">
      <Header/>
      <Weather/>
      <SquareWidgets/>
    </div>
  );
}

export default App;
