import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import BasicLayout from "../layouts/BasicLayout"
import projects from "../utils/projects"
import Seo from "../components/seo"
import "./projects.scss"

export default function Projects() {
  return (
    <BasicLayout menuColor="#000">
      <Seo
        title="Proyectos"
        Description="Proyectos desarrollados de manera freelance por Ulises Cipres"
      />
      <Container className="projects">
        <h1>Proyectos</h1>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={12} md={4} className="project">
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a
                    href={project.url}
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    <Button varian="primary">Ver proyecto</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BasicLayout>
  )
}
