import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("primary");
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "primary") {
      setMode("dark");
      setIsDarkMode("true");
      document.body.style.backgroundColor = "#404040";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtil Dark Mode";
    } else if (Mode === "dark") {
      setMode("primary");
      setIsDarkMode(() => false);
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtil Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={Mode}
          togglemode={toggleMode}
          isDarkMode={isDarkMode}
        />
        <Alerts alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Textform mode={Mode} showAlert={showAlert} />}
          />
          <Route path="/about" element={<About  mode={Mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
