import { FC } from "react";
import "./styles.css";

let Home: FC = () => {
    return (
        <section id="home">
            <div className="home-main">
                <div className="home-intro">
                    <div className="nic-name">
                        <p className="nic-name-head">i go by sync</p>
                        <img src={require('../img/right-drawn-arrow.png')} alt="arrow" className="nic-name-arrow" />
                    </div>
                    <p className="home-intro-name">My name is Harshal</p>
                    <p className="home-intro-brief">I am an 18 years old aspiring web-dev<br /> Who wishes to make appealing websites.</p>
                </div>
                <div className="home-photo">
                    <img src={require('../img/boy.png')} alt="boy" className="home-photo-img" />
                </div>
            </div>
            <div className="home-sec">
                <p className="home-sec-head">Technologies</p>
                <img src={require('../img/right-arrow.png')} alt="arrow" className="green-arrow" />
                <div className="tech-list">
                    <img src={require('../img/physics.png')} alt="" />
                    <img src={require('../img/html-5.png')} alt="" />
                    <img src={require('../img/css-3.png')} alt="" />
                    <img src={require('../img/js.png')} alt="" />
                    <img src={require('../img/bootstrap.png')} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Home;