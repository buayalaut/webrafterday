import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"

const Header = ({ avatar }) => (
  <header>
    <Location>
      {({ location }) => {
        return location.pathname == "/" ? (
          <div>
            <Link to="/about/">
              <span>About Me
          </span></Link>
          <Link to="/qr-code/">
              <span>QR Code
          </span>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/">
              <span>Back Home
          </span>
            </Link>
          </div>
        )
      }}
    </Location>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

Header.defaultProps = {
  avatar: ``,
}

export default Header
