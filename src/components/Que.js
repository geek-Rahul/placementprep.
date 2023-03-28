import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { QueCard } from "./QueCard";
import facebook from "../assets/img/facebook.png";
import amazon from "../assets/img/amazon-logo.png";
import adobe from "../assets/img/adobe.png";
import microsoft from "../assets/img/microsoft.png";
import google from "../assets/img/google.png";
import oracle from "../assets/img/oracle.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BsLink45Deg } from "react-icons/bs";



export const Que = () => {


  // This array is given to projectCard. Title description
  // and img url will appear on hover

  
  const projects = [
    {
      title: "Facebook",
      description: "Click on the link below",
      imgUrl: facebook,
      link: <a className="text-white" href="https://www.interviewbit.com/facebook-interview-questions/"><BsLink45Deg className="butt"/></a>,
    },
    {
      title: "Amazon",
      description:"Click on the link below",
      imgUrl: amazon,
      link: <a className="text-white" href="https://www.interviewbit.com/amazon-interview-questions/"><BsLink45Deg className="butt"/></a>,
    },
    {
      title: "Adobe",
      description: "Click on the link below",
      imgUrl: adobe,
      link: <a className="text-white" href="https://www.interviewbit.com/adobe-interview-questions/"><BsLink45Deg className="butt"/></a>
    },
    {
      title: "Microsoft",
      description: "Click on the link below",
      imgUrl: microsoft,
      link: <a className="text-white" href="https://www.interviewbit.com/microsoft-interview-questions/"><BsLink45Deg className="butt"/></a>
    },
    {
      title: "Google",
      description: "Click on the link below",
      imgUrl: google,
      link: <a className="text-white" href="https://www.interviewbit.com/google-interview-questions/"><BsLink45Deg className="butt"/></a>,
    },
    {
      title: "Oracle",
      description: "Click on the link below",
      imgUrl: oracle,
      link: <a className="text-white" href="https://www.interviewbit.com/oracle-interview-questions/"><BsLink45Deg className="butt"/></a>
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
        <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
            <h2>DSA Interview Qustions</h2>
            <p>Lets practice DSA question asked in interview</p>
              </div>}
            </TrackVisibility>

            {/* For creating tabs which canbe switched */}
            {/* defaultActiveKey is used for default selection tab 1 */}
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <QueCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                      <p>More material to be added soon.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>More material to be added soon.</p>
                    </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
        </section >
    )
} 
