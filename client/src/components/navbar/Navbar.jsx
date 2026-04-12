import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    const user = true;
    return (
        <nav>
        <div className="left"> 
        <a className="logo">
            <img className="img" src="home.png"  alt="logo" />
            <span> Sakhli </span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        </div>
        <div className="right"> 
            {user ? (
                <div className="user">
                    <img src="" alt="" />
                    <span>John doe</span>
                    <Link to ="/profile" className="profile">
                    <div className="notification">3</div>
                    <span>Profile</span></Link>
                </div>
                ) : ( 
                <>
                <a href="/">Sign in</a>
                <a href="/" className="register">
                    Sign up
                    </a>
                 </>
                )}
            <div className="menuIcon">
                <img src="iconi.png" alt="menu" onClick={() => setOpen(prev => !prev)} />
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Sign in</a>
                <a href="/">Sign up</a>
            </div>
            </div>
        </nav>
        
    )

}
export default Navbar;