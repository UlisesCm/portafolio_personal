import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/Ulises-cv-2020.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Mi nombre es Ulises tengo 23 años, Soy recien egresado de la carrera
        Ing. en Sistemas Computacionales y actualmente trabajo como Instructor
        en un programa de Innoacion Digital para niños y desarrollo Paginas Web
        de manera Freelance.
      </p>
      <p>
        Tengo experiencia en tecnologias de Frontend como HTML, CSS y
        Javascript, tambien cuento con algo de conocimientos en
        Librerias/Frameworks como JQuery, Bootstrap y Gatsby.js (con la cual fue
        construida esta pagina). No es mi especialidad pero tengo una ligera
        experiencia en manejo tecnologias de Backend como Node.js con Frameworks
        como Express.js y manejo de bases de datos como MongoDB y MySQL.
      </p>
      <p>
        Actualmente me encuentro en formacion en tecnologias como React.js,
        GraphQL y Sass.
      </p>
      <hr />
      <a href={CV} target="_blank" rel="noreferrer">
        <Button> Descargar CV</Button>
      </a>
    </Container>
  )
}
