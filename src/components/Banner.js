
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/headerImg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "DSA"];
  const period = 2000;



  // for typing animation in banner starts here

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  // typing animation in banner ends here

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">

        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>            // This fuction will provide the animation when we scroll
              <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                <span className="tagline">Lets Code</span>
                <h2>{`Welcome to placementPrep.`}<></> </h2>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "DSA" ]'><span className="wrap">{text}</span></span></h1>
                <p>placementprep. is a platform for learning tech related topics, enginnering syllabus, they have online as well as offline courses for on-demand topics like C++, Java programming, campus placement etc.</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <a className="text-white" href="#connect"><button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          
      </Row>
    </Container>
          </section >
)
}