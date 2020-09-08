import React from "react"
import { Container } from "react-bootstrap"
import BasicLayout from "../layouts/BasicLayout"
import ListSkills from "../components/ListSkills"
import {
  frontendSkills,
  frontendSkillsColor,
  backendSkills,
  backendSkillsColor,
  dbSkills,
  dbSkillsColor,
} from "../utils/skills"
import "./skills.scss"

export default function index() {
  return (
    <BasicLayout menuColor="#000">
      <Container class="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontendSkillsColor} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColor} />
        </div>
        <div className="skills__block">
          <h2>Database</h2>
          <ListSkills skills={dbSkills} colors={dbSkillsColor} />
        </div>
      </Container>
    </BasicLayout>
  )
}
