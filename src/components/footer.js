import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <span className="block">
      &copy; {new Date().getFullYear()} Rafterday.net
    </span>
    <span className="block">
      <small>
        Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
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
