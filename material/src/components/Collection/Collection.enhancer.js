import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { firebaseConnect } from 'react-redux-firebase'
import { withStyles } from '@material-ui/core/styles'
import { setPropTypes } from 'recompose'
import { spinnerWhileLoading } from 'utils/components'
import styles from './Collection.styles'

export default compose(
  setPropTypes({
    collection: PropTypes.string.isRequired
  }),
  firebaseConnect(({ collection }) => [{ path: `collections/${collection}` }]),
  connect(({ firebase: { data } }, { collection }) => ({
    collection: get(data, `collections.${collection}`)
  })),
  // Show loading spinner while collection is loading
  spinnerWhileLoading(['collection']),
  withStyles(styles)
)
