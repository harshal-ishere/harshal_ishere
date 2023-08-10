import { FC } from "react";
import "./styles.css";

let About: FC = () => {
    return (
        <section id="about">
            <p className="about-header">About</p>
            <div className="about-details">
                <p>Hello Mates i reside in Mumbai📍</p>
                <p>I am a student at VJTI Mumbai pursing btech in IT 🏫</p>
                <p>I am intrested in AI/ML/Robotics and Drones 🤖</p>
                <p>Currently learning Web Development and DSA 📖</p>
                <p>I Like to actively participate in group projects and produce necessary outcomes 🙋</p>
            </div>

        </section>
    );
}
export default About;