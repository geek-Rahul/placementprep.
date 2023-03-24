import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rahul from "../assets/img/Rahul.jpg";
import Mohit from "../assets/img/Mohit.jpeg";
import arijit from "../assets/img/Arijit.jpeg";
import shiva from "../assets/img/shiva.jpg";
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
                                About
                            </h2>
                            <p>Developers of this website</p>
                        </div>
                    </Col>



                    {/* For sliding images with buttons */}
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                        <div className="item">
                            <img src={Rahul} alt="Image" />


                            <h5>Rahul Gupta</h5>
                            <h5>Head, Tech Team</h5>
                            <div className="icon1">
                                <a href=""><img src={navIcon3} alt="" /></a>
                                <a href="#"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>


                        <div className="item">
                        <img src={Mohit} alt="Image" />


                            <h5>Mohit Jakhmola</h5>
                            <h5>Head, Tech Team</h5>
                            <div className="icon1">
                                <a href=""><img src={navIcon3} alt="" /></a>
                                <a href="#"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>


                        <div className="item">
                        <img src={arijit} alt="Image" />


                            <h5>Arijit Kar</h5>
                            <h5>Head, Tech Team</h5>
                            <div className="icon1">
                                <a href=""><img src={navIcon3} alt="" /></a>
                                <a href="#"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>


                        <div className="item">
                        <img src={shiva} alt="Image" />


                            <h5>Shiva Tripathi</h5>
                            <h5>Head, Tech Team</h5>
                            <div className="icon1">
                                <a href=""><img src={navIcon3} alt="" /></a>
                                <a href="#"><img src={navIcon1} alt="" /></a>
                            </div>
                        </div>

                    </Carousel>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}