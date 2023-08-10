import { FC } from "react";
import "./styles.css";
let Fotter: FC = () => {
    return (
        <div id="fotter">
            <div className="fotter-main">
                <p style={{ fontSize: "1.5rem" }}>I Like bringing like minded people Together!</p>
                <br />
                <p style={{marginBottom:"4px"}}>11.sync.er@gmail.com</p>
                <p>+91 77109 37556</p>
            </div>
            <div className="socials">
                <p>Socials</p>
                <br />
                <a href="https://twitter.com/harshal_ishere">twitter</a>
                <a href="https://github.com/harshal-ishere">github</a>
                <a href="https://www.linkedin.com/in/harshal-k-5b3354287/">linkdin</a>
            </div>
        </div>
    )
}
export default Fotter;