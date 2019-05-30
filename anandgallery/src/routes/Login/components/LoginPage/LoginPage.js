import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { SIGNUP_PATH } from 'constants/paths'
import LoginForm from '../LoginForm'
import {Card} from 'antd'

export const LoginPage = ({
  emailLogin,
  googleLogin,
  onSubmitFail
}) => (
  <div className='root'>
    <Card className='panel'>
      <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
    </Card>
    <div className='orLabel'>or</div>
    <div className='providers'>
      <GoogleButton onClick={googleLogin} />
    </div>
    <div className='signup'>
      <span className='signupLabel'>Need an account?</span>
      <Link className='signupLink' to={SIGNUP_PATH}>
        Sign Up
      </Link>
    </div>
  </div>
)

LoginPage.propTypes = {
  emailLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
  onSubmitFail: PropTypes.func.isRequired, // from enhancer (withHandlers)
  googleLogin: PropTypes.func.isRequired // from enhancer (withHandlers)
}

export default LoginPage
