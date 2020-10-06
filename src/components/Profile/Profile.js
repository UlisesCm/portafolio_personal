import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Social from "./Social"
import profileImage from "../../images/fotoperfil.jpg"
import "./Profile.scss"
import { personalData } from "../../utils/personalData"

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper"></div>
      <div className="dark"></div>
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} alt="Ulises Cipres" fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span> ¡Hola! </span>
            <p>Edgar Ulises Cipres Medina</p>
            <p>Frontend Developer</p>
            <hr />
            <div className="more-info">
              {personalData.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
