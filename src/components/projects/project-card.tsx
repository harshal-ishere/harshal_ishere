import { FC } from "react";
import "../styles.css";
interface incProps{
    src:string;
    desHead:string;
    desTech:string;
    desMain:string;
}
let ProjectCard: FC<incProps> = (props) => {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img src={require("../../img/"+props.src)} alt="" />
            </div>
            <div className="project-card-descrip">
                <p className="desHead">{props.desHead}</p>
                <p className="desTech">{props.desTech}</p>
                <p className="desMain">{props.desMain}</p>

            </div>
        </div>
    )
}
export default ProjectCard;