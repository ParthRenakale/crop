
import { Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/SignUp";
import Default from "./pages/Default";
import Forgot from "./pages/Forgot";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import MyCrops from "./pages/MyCrops";
import Footer from "./components/Footer";
import TwitterPlaceholder from "./components/Twitter";
import FinancialManagement from "./pages/Finance";
import FAQs from "./pages/Faq";
import AboutUs from "./pages/AboutUs";
import Progress from "./pages/Progress";
import CropGrowthTracker from "./pages/Progress";
import LoanSuggestion from "./pages/LoanSuggestion";

function App() {
 
  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/twitter" element={<TwitterPlaceholder/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        {/* {isUserSignedIn && <Route path="/account" element={<Account />} />} */}
        <Route
        path="/account"
        element={isUserSignedIn ? <Account /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard/:cropId"
        element={isUserSignedIn ? <Dashboard/>: <Navigate to="/login" />}
      />
      <Route
        path="/dashboard2"
        element={isUserSignedIn ? <Dashboard2/>: <Navigate to="/login" />}
      />
      <Route
        path="/mycrops"
        element={isUserSignedIn ? <MyCrops/>: <Navigate to="/login" />}
      />
      <Route
        path="/finance"
        element={isUserSignedIn ? <FinancialManagement /> : <Navigate to="/login" />}
      />
      <Route
        path={`crops/:cropId/progress`}
        element={isUserSignedIn ? <CropGrowthTracker /> : <Navigate to="/login" />}
      />
      <Route
        path={`/loan`}
        element={isUserSignedIn ? <LoanSuggestion/> : <Navigate to="/login" />}
      />
        <Route path="/forgot" element={<Forgot />} />
        
        <Route path="*" element={<Default />} />
      </Routes>
      <footer>
        <Footer/>
      </footer>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
