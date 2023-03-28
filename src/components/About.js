import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rahul from "../assets/img/Rahul.jpeg";
import Mohit from "../assets/img/Mohit.jpeg";
import arijit from "../assets/img/Arijit.jpeg";
import shiva from "../assets/img/shiva.jpg";
import jagjeet from "../assets/img/jagjeet.jpeg";
import Abhishek from "../assets/img/Abhishek.jpg";
import colorSharp from "../assets/img/color-sharp.png"
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';


export const About = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 3024, min: 1464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill" id="About">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-">
                            <h2>
                                About us
                            </h2>
                            <p>Developers of this website</p>
                        </div>
                    </Col>



                    {/* For sliding images with buttons */}
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                        <div className="item">
                            <img src={Rahul} alt="Image" />


                            <h5>Rahul Gupta</h5>
                            {/* <h5>Head, Tech Team</h5> */}
                            <div className="icon1">
                                <a href="https://instagram.com/_itz__rahul_gupta?igshid=ZDdkNTZiNTM="><img src={navIcon3} alt="" /></a>
                                <a href="https://www.linkedin.com/in/rahul-gupta-28241a263"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>


                        <div className="item">
                        <img src={Mohit} alt="Image" />


                            <h5>Mohit Jakhmola</h5>
                            {/* <h5>Head, Tech Team</h5> */}
                            <div className="icon1">
                                <a href="https://instagram.com/sus_mohit?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
                                <a href="https://www.linkedin.com/in/novice-mohit-73354722b"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>


                        <div className="item">
                        <img src={arijit} alt="Image" />


                            <h5>Arijit Kar</h5>
                            {/* <h5>Head, Tech Team</h5> */}
                            <div className="icon1">
                                <a href="https://instagram.com/demonicak_1?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
                                <a href="https://www.linkedin.com/in/arijit-kar-21b091210/"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>


                        <div className="item">
                        <img src={shiva} alt="Image" />


                            <h5>Shiva Tripathi</h5>
                            {/* <h5>Head, Tech Team</h5> */}
                            <div className="icon1">
                                <a href="https://www.instagram.com/shiva_20254/"><img src={navIcon3} alt="" /></a>
                                <a href="https://www.linkedin.com/mwlite/in/shiva-tripathi-4186aa229"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>


                        <div className="item">
                        <img src={jagjeet} alt="Image" />


                            <h5>Jagjeet</h5>
                            {/* <h5>Head, Tech Team</h5> */}
                            <div className="icon1">
                                <a href="https://instagram.com/ja.gjeet4605?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
                                <a href="https://www.linkedin.com/in/jagjeet-singh-a21359252/"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>

                        <div className="item">
                        <img src={Abhishek} alt="Image" />


                            <h5>Abhishek</h5>
                            {/* <h5>Head, Tech Team</h5> */}
                            <div className="icon1">
                                <a href="http://instagram.com/abhi_pi_0"><img src={navIcon3} alt="" /></a>
                                <a href="https://www.linkedin.com/in/abhishek-80989726b"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>

                    </Carousel>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}