import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'
import { reduxForm } from 'redux-form'
import { LOGIN_FORM_NAME } from 'constants/formNames'

export default compose(
  // set proptypes used in HOCs
  setPropTypes({
    onSubmit: PropTypes.func.isRequired // eslint-disable-line react/no-unused-prop-types
  }),
  reduxForm({
    form: LOGIN_FORM_NAME
  })
)
