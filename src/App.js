import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import OrderPlaced from "./Pages/OrderDetails/OrderPlaced/OrderPlaced";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";

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
            <Route path="/register" element={<Register />}>
            </Route>

            <Route path="/service/:serviceId" element={<PrivateRoute><OrderPlaced /></PrivateRoute>}>




            </Route>

            {/* <Route path="/service/:orderPlaced" element={<OrderPlaced />}>
            </Route> */}
          </Routes>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
