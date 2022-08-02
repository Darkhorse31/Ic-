import "./App.scss";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import Wel from "./components/WelcomePage/Wel";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/welcome" element={<Wel />} />
      </Routes>
    </div>
  );
}

export default App;
