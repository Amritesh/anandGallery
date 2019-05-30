import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH, SIGNUP_PATH } from 'constants/paths'
import { Button } from 'antd';


const buttonStyle = {}


export const LoginMenu = () => (
  <div>
    <Button style={buttonStyle} >
      <Link to={SIGNUP_PATH}>Sign Up</Link>
    </Button>
    <Button style={buttonStyle} >
      <Link to={LOGIN_PATH}>Login</Link>
    </Button>
  </div>
)

export default LoginMenu