import React from 'react'
import PropTypes from 'prop-types'
import Collection from 'components/Collection'

export const CollectionPage = ({ path, classes }) => (
  <div className={classes.root}>
    <Collection collection={path.slice(1)} />
  </div>
)

CollectionPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default CollectionPage
