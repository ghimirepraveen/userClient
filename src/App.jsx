import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpForm from "./components/signup";
import LoginForm from "./components/login";
import ProfilePage from "./components/profile";
import Footer from "./components/footer";
import Userlist from "./components/getallprofile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/users" element={<Userlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
