import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Parent = styled.div`
  position: relative;
  background-color: ${({ bc }) => bc};
`

const FakeBgImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  z-index: -1;

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const BackgroundImage = ({
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}) => {
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
    <Parent bc={overlayColor}>
      <FakeBgImage Image={heroImage} alt={`test`} />
      <Content className={className}>{children}</Content>
    </Parent>
  )
}

export default BackgroundImage
