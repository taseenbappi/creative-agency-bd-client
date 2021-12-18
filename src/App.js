import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
          </Routes>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
