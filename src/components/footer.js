import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <div className="footer">
  <span><a href="/about/">About Me</a></span>
    <span className="block">
      &copy; {new Date().getFullYear()} Rafterday.net
    </span>
    <span className="block">
      <small>
        Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsbyjs</a>
      </small>
    </span>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
