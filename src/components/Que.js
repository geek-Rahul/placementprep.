import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { QueCard } from "./QueCard";
import facebook from "../assets/img/facebook.png";
import amazon from "../assets/img/amazon-logo.png";
import apple from "../assets/img/apple.png";
import microsoft from "../assets/img/microsoft.png";
import google from "../assets/img/google.png";
import netflix from "../assets/img/netflix.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Que = () => {


  // This array is given to projectCard. Title description
  // and img url will appear on hover

  
  const projects = [
    {
      title: "Facebook",
      description: "Design & Development",
      imgUrl: facebook,
      
    },
    {
      title: "Amazon",
      description: "Design & Development",
      imgUrl: amazon,
    },
    {
      title: "Apple",
      description: "Design & Development",
      imgUrl: apple,
    },
    {
      title: "Microsoft",
      description: "Design & Development",
      imgUrl: microsoft,
    },
    {
      title: "Google",
      description: "Design & Development",
      imgUrl: google,
    },
    {
      title: "Netflix",
      description: "Design & Development",
      imgUrl: netflix,
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
