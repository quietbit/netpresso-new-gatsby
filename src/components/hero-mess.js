import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 300px;
  overflow: hidden;
`

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const BgImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || "100vh"};
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || "cover"} !important;
    object-position: ${props => props.position || "50% 50%"} !important;
    font-family: "object-fit: ${props =>
      props.fit || "cover"} !important; object-position: ${props =>
      props.position || "50% 50%"} !important;";
  }
`

function Hero(props) {
  const { children } = props

  const data = useStaticQuery(
    graphql`
      query {
        heroimage: file(relativePath: { eq: "profile-pic.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const heroImage = getImage(data.heroimage)

  return (
    <Container>
      <BgImage image={heroImage} alt={"test"} />
      <Overlay>{children}</Overlay>
    </Container>
  )
}

export default Hero
