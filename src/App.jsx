import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/profilePage" element={<Profile></Profile>}></Route>
    </Routes>
  );
}

export default App;
