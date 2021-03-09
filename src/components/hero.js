import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

function Hero(props) {
  const { children } = props

  const data = useStaticQuery(
    graphql`
      query {
        heroimage: file(relativePath: { eq: "hero-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `
  )
  const heroImage = getImage(data.heroimage)
  const heroTitleMain = "bla bla"
  const heroTitleSub = "bla bla"

  return (
    <section className="hero hero-section">
      <GatsbyImage
        className="hero-image"
        objectFit="none"
        objectPosition="center bottom"
        image={heroImage}
        alt={`test`}
      />
      <div className="hero-body">
        <div>
          <p className="subtitle is-6 has-text-grey-darker">{heroTitleSub}</p>
          <p className="title is-1 has-text-black">{heroTitleMain}</p>
          <button className="button is-primary is-rounded is-large has-text-black mt-4 is-uppercase">
            <div className="subtitle is-6">zakupuj teraz</div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
