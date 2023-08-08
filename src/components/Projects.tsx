import { FC } from "react";
import "./styles.css";
import ProjectCard from "./projects/project-card";

let Projects: FC = () => {
    return (
        <section id="projects">
            <div className="header-line">
            <hr />
            </div>
            
            <p className="project-header">The Projects</p>
            <div className="project-group">
                <ProjectCard src="projectGPT.png" desHead="Chat-GPT Clone" desTech="React,JSX,CSS,JAVASCRIPT,BOOTSTRAP" desMain="It is a complete replica of chat gpt as close as possible" />
            </div>
        </section>
    )
}
export default Projects;