import * as React from "react"
import { Link } from "gatsby"
import BackgroundImage from "../components/BackgroundImage"
import StaticImage from "../components/StaticImage"
import Hero from "../components/hero"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Hero>
        <div>
          <div> askdjaskdasdas hero test</div>
          <div> askdjaskdasdas hero test</div>
          <div> askdjaskdasdas hero test</div>
          <div> askdjaskdasdas hero test</div>
          <div> askdjaskdasdas hero test</div>
          <div> askdjaskdasdas hero test</div>
        </div>
      </Hero>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
