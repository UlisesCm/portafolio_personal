import React from "react"
import { Container } from "react-bootstrap"
import BasicLayout from "../layouts/BasicLayout"
import ListSkills from "../components/ListSkills"
import "./skills.scss"

const skills = [
  { type: "Java", level: 85 },
  { type: "Javascript", level: 75 },
  { type: "Javascript", level: 30 },
  { type: "Javascript", level: 60 },
  { type: "Javascript", level: 40 },
  { type: "Javascript", level: 100 },
  { type: "Javascript", level: 5 },
  { type: "Javascript", level: 0 },
]

export default function index() {
  return (
    <BasicLayout menuColor="#000">
      <Container class="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={skills} />
        </div>
      </Container>
    </BasicLayout>
  )
}
