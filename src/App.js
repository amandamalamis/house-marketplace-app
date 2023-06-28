import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import LogIn from "./pages/LogIn";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} ></Route>
          <Route path="/offers" element={<Offers />} ></Route>
          <Route path="/profile" element={<LogIn />} ></Route>
          <Route path="/login" element={<LogIn />} ></Route>
          <Route path="/signup" element={<SignUp />} ></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />} ></Route>
        </Routes>
      </Router>
      <h1>App</h1>
    </>
  );
}

export default App;
