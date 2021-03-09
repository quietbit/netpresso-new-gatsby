import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="container mt-5">
        <div className="tile is-ancestor">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <div className="tile is-parent">
                <div className="card tile is-child" key={post.fields.slug}>
                  <div className="card-content">
                    <div className="subtitle">{title}</div>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>
                  <footer class="card-footer is-centered">
                    <div className="container has-text-centered p-3">
                      <button
                        className="button is-primary is-rounded has-text-black snipcart-add-item"
                        data-item-id={post.frontmatter.dataItemId}
                        data-item-price={post.frontmatter.dataItemPrice}
                        data-item-name={post.frontmatter.dataItemName}
                        data-item-description={
                          post.frontmatter.dataItemDescription
                        }
                        data-item-url={`https://netpresso.netlify.app`}
                      >
                        do koszyka
                      </button>
                    </div>
                  </footer>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
