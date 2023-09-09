import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Forgot from "./components/Forgot";
import Reset from "./components/Reset";

function App() {
  return (
    <>
        <Router>
        <div>
            <ul>
                <li><a href="/">Home</a> </li>
                <li><a href="/Login">Login</a> </li>
                <li><a href="/SignUp">SignUp</a> </li>
            </ul>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route exact path='/login' element={<Login></Login>}></Route>
                <Route exact path='/signup' element={<SignUp></SignUp>}></Route>
                <Route exact path='/forgot' element={<Forgot></Forgot>}></Route>
                <Route exact path='/reset' element={<Reset></Reset>}></Route>
            </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
