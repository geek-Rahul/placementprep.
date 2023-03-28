import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { ResourcesCard } from "./ResourcesCard";
import projImg1 from "../assets/img/DSA1.jpg";
import projImg2 from "../assets/img/DSA2.jpg";
import projImg3 from "../assets/img/DSA3.jpeg";
import webD1 from "../assets/img/webD1.jpg";
import webD2 from "../assets/img/webD2.jpg";
import webD3 from "../assets/img/webD3.jpg";
import aiml1 from "../assets/img/aiml1.jpg";
import aiml2 from "../assets/img/aiml2.jpg";
import aiml3 from "../assets/img/aiml3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BsYoutube } from "react-icons/bs";



export const Resources = () => {


  // This array is given to ResourcesCard. Title description
  // and img url will appear on hover

  
  const resources1 = [
    {
      title: "DSA",
      description: "Love babbar",
      imgUrl: projImg1,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"><BsYoutube className="butt"/></a>
    },
    {
      title: "DSA",
      description: "Code with Harry",
      imgUrl: projImg2,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"><BsYoutube className="butt"/></a>
    },
    {
      title: "DSA",
      description: "Apna College",
      imgUrl: projImg3,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"><BsYoutube className="butt"/></a>
    },
  ];


  const resources2 = [
    {
      title: "Web D",
      description: "Apna College",
      imgUrl: webD1,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"><BsYoutube className="butt"/></a>
    },
    {
      title: "Web D",
      description: "Code with Harry",
      imgUrl: webD2,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"><BsYoutube className="butt"/></a>
    },
    {
      title: "Web D",
      description: "Thapa Technical",
      imgUrl: webD3,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=9KzVUOF-M8w&list=PLwGdqUZWnOp2jmYb2TQGYgBYp0xGwj9V1"><BsYoutube className="butt"/></a>
    },
  ];

  const resources3 = [
    {
      title: "AI-ML",
      description: "Krish Naik",
      imgUrl: aiml1,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=bPrmA1SEN2k&list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe"><BsYoutube className="butt"/></a>
    },
    {
      title: "AI-ML",
      description: "Free code Camp",
      imgUrl: aiml2,
      link: <a className="text-white" href="https://youtu.be/NWONeJKn6kc"><BsYoutube className="butt"/></a>
    },
    {
      title: "AI-ML",
      description: "Codebasics",
      imgUrl: aiml3,
      link: <a className="text-white" href="https://www.youtube.com/watch?v=gmvvaobm7eQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw"><BsYoutube className="butt"/></a>
    },
  ];



  return (
    <section className="project" id="Resources">
      <Container>
        <Row>
        <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
            <h2>Resources</h2>
            <p>Here are some resources for your placement preperation. These all resources are completely free.</p>
              </div>}
            </TrackVisibility>

            {/* For creating tabs which canbe switched */}
            {/* defaultActiveKey is used for default selection tab 1 */}
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">DSA</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="secondTab" eventKey="second">Web Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">AI-ML</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    resources1.map((project, index) => {
                      return (
                        <ResourcesCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Row>
                  {
                    resources2.map((project, index) => {
                      return (
                        <ResourcesCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    {/* <p>More material to be added soon.</p> */}
                    <Row>
                  {
                    resources3.map((project, index) => {
                      return (
                        <ResourcesCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
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
