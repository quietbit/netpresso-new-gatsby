import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

function Hero(props) {
  const { children } = props

  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/hero.md/" }) {
          html
          frontmatter {
            title
            subtitle
            featuredImageClass
            heroBackgroundColor
            buttonText
            useMarkdownTitle
            featuredImage {
              childImageSharp {
                gatsbyImageData(height: 350, placeholder: BLURRED)
              }
            }
            heroBackgroundImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `
  )

  const {
    title,
    subtitle,
    heroBackgroundColor,
    featuredImageClass,
    featuredImageBackground,
    buttonText,
    useMarkdownTitle,
  } = data.markdownRemark.frontmatter

  const markdownTitle = data.markdownRemark.html
  const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImage)
  const heroBackgroundImage = getImage(
    data.markdownRemark.frontmatter.heroBackgroundImage
  )

  return (
    <section className="hero hero-section is-flex is-justify-content-center">
      <GatsbyImage
        objectFit="cover"
        objectPosition="center center"
        image={heroBackgroundImage}
        alt={`featured product / idea description`}
      />

      {/* <div className="hero-gradient"></div> */}

      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="subtitle is-6 has-text-grey-darker is-uppercase">
                {subtitle}
              </p>
              {useMarkdownTitle ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: markdownTitle,
                  }}
                />
              ) : (
                <p className="title is-1 has-text-black m-0">{title}</p>
              )}

              <button className="button is-primary is-rounded is-large has-text-black mt-4 is-uppercase">
                <div className="subtitle is-6 has-text-weight-semibold">
                  {buttonText}
                </div>
              </button>
            </div>
            <div className="column">
              <GatsbyImage image={featuredImage} alt={`test`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
