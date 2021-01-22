import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"

const Header = ({ avatar }) => (
  <header className="logo">
    <Location>
      {({ location }) => {
        return location.pathname == "/" ? (
          <div>
              <img src={avatar} className="logo-avatar" />
          <Link to="/about/">
            <br><span>About the Author</span>
          </Link>
          </div>
        ) : (
          <div>
              <img src={avatar} className="logo-avatar" />
          <Link to="/">
            <span>Back Home</span>
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
