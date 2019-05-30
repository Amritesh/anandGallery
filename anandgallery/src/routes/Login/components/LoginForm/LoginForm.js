import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { required, validateEmail } from 'utils/form'
import {Button, Input} from 'antd'

const LoginForm = ({ pristine, submitting, handleSubmit }) => (
  <form className='root' onSubmit={handleSubmit}>
    <Field
      name="email"
      component={Input}
      label="Email"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      component={Input}
      label="Password"
      type="password"
      validate={required}
    />
    <div className="submit">
      <Button
        color="primary"
        type="submit"
        variant="contained"
        disabled={pristine || submitting}>
        {submitting ? 'Loading' : 'Login'}
      </Button>
    </div>
  </form>
)

LoginForm.propTypes = {
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default LoginForm
