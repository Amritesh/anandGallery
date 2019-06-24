import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './CollectionPage.styles'

export default compose(withStyles(styles, { withTheme: true }))
