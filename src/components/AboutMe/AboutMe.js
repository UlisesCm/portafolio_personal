import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/Ulises-cv-2021.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Mi nombre es Ulises tengo 24 años, Soy egresado de la carrera Ing. en
        Sistemas Computacionales y actualmente trabajo como Freelancer creando
        soluciones Web, Anteriormente trabaje como Community Manager, Web Master
        y Profesor en un programa de educacion tecnologica para niños.
      </p>
      <p>
        Tengo aproximadamente un año de experiencia trabajando en tecnologias de
        Frontend como HTML, CSS y Javascript, Cuento con conocimientos en
        Framework/Librerias como React, Bootstrap, Next.js y Gatsby(Con el que
        esta construido este portafolio)
      </p>
      <p>
        Actualmente me encuentro en formacion en Tecnologias como Jest y
        profundizando mas en React
      </p>
      <hr />
      <a href={CV} target="_blank" rel="noreferrer">
        <Button> Descargar CV</Button>
      </a>
    </Container>
  )
}
