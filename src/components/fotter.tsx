import { FC } from "react";
import "./styles.css";
let Fotter: FC = () => {
    return (
        <div id="fotter">
            <div className="fotter-main">
                <p style={{ fontSize: "1.2rem" }} className="nicuee">I Like bringing like minded people Together!</p>
                <br />
                <p style={{marginBottom:"4px",color:"grey"}}>11.sync.er@gmail.com</p>
            </div>
            <div className="socials">
                <p className="nicuee">Socials</p>
                <br />
                <a href="https://twitter.com/harshal_ishere">twitter</a>
                <a href="https://github.com/harshal-ishere">github</a>
                <a href="https://www.linkedin.com/in/harshal-k-5b3354287/">linkedin</a>
            </div>
        </div>
    )
}
export default Fotter;