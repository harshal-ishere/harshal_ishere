import { FC } from "react";
import "../styles.css";
interface incProps{
    src:string;
    desHead:string;
    desTech:string;
    desMain:string;
    visitLink:string;
}
let ProjectCard: FC<incProps> = (props) => {
    return (
        <div className="project-card">
            <div className="project-card-img">
               <a href="https://chat-gpt-harshal-ishere.vercel.app/"><img src={require("../../img/"+props.src)} alt="" /></a> 
            </div>
            <div className="project-card-descrip">
                <p className="desHead">{props.desHead}</p>
                <p className="desTech">{props.desTech}</p>
                <p className="desMain">{props.desMain}</p>
                <p className="desMain-2"><a href={props.visitLink}>Click here to Visit</a></p>
            </div>
        </div>
    )
}
export default ProjectCard;