import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import LogIn from "./pages/LogIn";
import Offers from "./pages/Offers";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} ></Route>
          <Route path="/offers" element={<Offers />} ></Route>
          <Route path="/category/:categoryname" element={<Category />} ></Route>

          {/* //nested route */}
          <Route path="/profile" element={<PrivateRoute />} >
            <Route path="/profile" element={<Profile />} ></Route>
          </Route>

          <Route path="/login" element={<LogIn />} ></Route>
          <Route path="/signup" element={<SignUp />} ></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />} ></Route>
          <Route path="/createlisting" element={<CreateListing />} ></Route>
          <Route path="/editlisting/:listingId" element={<EditListing />} ></Route>
          <Route path="/category/:categoryname/:listingId" element={<Listing />} ></Route>
          <Route path="/contact/:landlordId" element={<Contact />} ></Route>

        </Routes>
        <Navbar></Navbar>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
