import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LIST_PATH } from 'constants/paths'

export const Home = ({ classes }) => (
  <div className={classes.root}>
    <Link to={LIST_PATH}>Projects</Link>
  </div>
)

// eslint-disable-next-line react/no-typos
Home.proptypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default Home
