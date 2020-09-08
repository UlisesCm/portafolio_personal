import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv-UlisesCipres.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
        nibh vitae ex congue suscipit. Phasellus pellentesque eu ipsum eget
        dignissim. In facilisis metus ac hendrerit mollis. Etiam tempor
        tristique tellus, at eleifend magna laoreet id. Quisque accumsan lacus
        nunc, quis interdum arcu gravida eu. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Maecenas quis
        molestie arcu. Proin suscipit libero non consequat faucibus. Nulla eget
        nunc vel nunc placerat vestibulum. Praesent semper turpis at nunc
        iaculis consectetur. Aliquam sodales nec ligula vel pellentesque.
        Vivamus et pulvinar lacus. Nullam a blandit turpis. Maecenas tincidunt
        convallis lacus sit amet mattis.
      </p>
      <hr />
      <a href={CV} target="_blank" rel="noreferrer">
        <Button> Descargar CV</Button>
      </a>
    </Container>
  )
}
