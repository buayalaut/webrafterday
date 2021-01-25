import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <span className="block">
      &copy; {new Date().getFullYear()} rafterday.net
    </span>
    <span className="block">
      <small>
        Built with {` `}
        <a href="https://www.gatsbyjs.com" target="_blank">Gatsbyjs</a>
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
