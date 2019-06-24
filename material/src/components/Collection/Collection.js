import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export const Collection = ({ collection, classes }) => (
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} component="h2">
          {collection.name || 'Collection'}
        </Typography>
        <div style={{ marginTop: '10rem' }}>
          <pre>{JSON.stringify(collection, null, 2)}</pre>
        </div>
      </CardContent>
    </Card>
  </div>
)

Collection.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
}

export default Collection
