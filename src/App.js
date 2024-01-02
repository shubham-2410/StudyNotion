import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "../src/componets/common/NavBar";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateRoute from "./componets/core/Auth/PrivateRoute";
import MyProfile from "./componets/core/Dashboard.js/MyProfile";
import EnrolledCourses from "./componets/core/Dashboard.js/EnrolledCourses";
import PurchaseHistory from "./componets/core/Dashboard.js/PurchaseHistory";
import Settings from "./componets/core/Dashboard.js/Settings";
import Error from './pages/Error';
import Cart from "./componets/core/Dashboard.js/Cart";

function App() {
  return (
    <div className="w-screen min-h-screen  bg-richblack-900 flex flex-col font-inter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/update-password/:id" element={<UpdatePassword />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        {/* nesting of routes */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" element={<MyProfile/>}></Route>
          <Route path="/dashboard/settings" element={<Settings/>}></Route>
          <Route path="/dashboard/cart" element={<Cart/>}></Route>
          <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses/>}></Route>
          <Route path="/dashboard/purchase-history" element={<PurchaseHistory/>}></Route>

        </Route>

        <Route path="*" element={<Error/>}/>



      </Routes>
    </div>
  );
}

export default App;