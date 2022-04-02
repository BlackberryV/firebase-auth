import "./index.css"
import {Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Reset from "./components/Reset";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/reset"} element={<Reset/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
        </Routes>
    );
}

export default App;
