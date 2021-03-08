import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const BImage = () => {
  return (
    <StaticImage
      src="../images/profile-pic.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fullWidth"
    />
  )
}

export default BImage
