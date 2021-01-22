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
              <span>About the Author
          </span>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/">
              <span>About the Author
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
