import { FC } from "react";
import "./styles.css";
import ProjectCard from "./projects/project-card";

let Projects: FC = () => {
    return (
        <section id="projects">
            <p className="project-header">Projects</p>
            <div className="project-group">
                <ProjectCard src="projectGPT.png" desHead="Chat-GPT Clone" desTech="REACT / JSX / CSS / JS / BOOTSTRAP" desMain="It is a complete replica of chat gpt as close as possible" />
            </div>
        </section>
    )
}
export default Projects;