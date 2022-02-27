import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import DashHome from "./components/dashHome";
import Library from "./components/library";
import Songs from "./components/songs";
import Login from "./components/login";
import Signup from "./components/signup";
import Search from "./components/search"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashHome />} />
        <Route path="search" element={<Search />} />
        <Route path="library" element={<Library />} />
        <Route path="songs" element={<Songs />} />
      </Route>
    </Routes>
  );
}

export default App;
