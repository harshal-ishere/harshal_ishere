import { FC } from "react";
import "./styles.css"
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCancelCircle} from "react-icons/im";
let Navbar: FC = () => {
    let [hamToggle,setHamToggle]=useState<boolean>(false);
    return (
        <nav className="fixed-top">
            <div className="nav-heading">
                <p>@harshal.ishere</p>
                <div className={hamToggle?"nav-items-toggle":"invincible"}>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
            </div>
            </div>
            <div className="nav-items">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
            </div>
            <div className="nav-bar-img-div">
                <a href="https://twitter.com/harshal_ishere" > <img src={require('../img/twitter.png')} alt="twitter" className="nav-bar-imgs" /></a>
                <a href="https://github.com/harshal-ishere" > <img src={require('../img/github.png')} alt="github" className="nav-bar-imgs" /></a>
                <a href="https://www.linkedin.com/in/harshal-k-5b3354287/" > <img src={require('../img/linkedin.png')} alt="linkedin" className="nav-bar-imgs" /></a>
            </div>
            
            {hamToggle?<ImCancelCircle onClick={()=>setHamToggle(!hamToggle)} />:<GiHamburgerMenu className="hamburger" onClick={()=>setHamToggle(!hamToggle)} />}
        </nav>
    )
}
export default Navbar;