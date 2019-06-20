import React from 'react'
import PropTypes from 'prop-types'
import Card from 'containers/Card'

export const Home = ({ classes }) => (
  <div className={classes.root}>
    <Card />
  </div>
)

// eslint-disable-next-line react/no-typos
Home.proptypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default Home
