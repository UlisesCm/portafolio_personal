import React from "react"
import SkillBar from "react-skills-bars"
import "./ListSkills.scss"

export default function ListSkills(props) {
  const { skills } = props
  return (
    <div className="list-skills">
      <SkillBar skills={skills} animation={0} animation={1000} />
    </div>
  )
}
