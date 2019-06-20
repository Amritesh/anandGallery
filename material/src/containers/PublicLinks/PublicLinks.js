import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import {
  HOME_PATH,
  ACCOUNT_PATH,
  NUMISMATICS_PATH,
  PHILATELY_PATH,
  GARDENING_PATH
} from 'constants/paths'

import { Link } from 'react-router-dom'

export const PublicLinks = ({ classes }) => (
  <div>
    <ListItem component={Link} to={HOME_PATH} className={classes.listItem}>
      <Typography>Home</Typography>
    </ListItem>
    <ListItem component={Link} to={ACCOUNT_PATH} className={classes.listItem}>
      <Typography>Account</Typography>
    </ListItem>
    <ListItem
      component={Link}
      to={NUMISMATICS_PATH}
      className={classes.listItem}>
      <Typography>Numismatics</Typography>
    </ListItem>
    <ListItem component={Link} to={PHILATELY_PATH} className={classes.listItem}>
      <Typography>Philately</Typography>
    </ListItem>
    <ListItem component={Link} to={GARDENING_PATH} className={classes.listItem}>
      <Typography>Gardening</Typography>
    </ListItem>
  </div>
)

export default PublicLinks
