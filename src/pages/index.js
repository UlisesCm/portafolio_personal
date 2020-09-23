import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import Profile from "../components/Profile"
import AboutMe from "../components/AboutMe"
import "./index.scss"
import Seo from "../components/seo"
import imagePerfil from "../images/fotoperfil.jpg"

export default function index() {
  return (
    <BasicLayout>
      <Seo
        title="Home"
        description="Portafolio Personal de Ulises Cipres, programador web freelance"
        image={imagePerfil}
      />
      <Profile />
      <AboutMe />
    </BasicLayout>
  )
}
