import { Col } from "react-bootstrap";

export const ResourcesCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h6>{link}</h6>
          
        </div>
      </div>
    </Col>
  )
}