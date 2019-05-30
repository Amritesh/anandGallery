import React from 'react'
import PropTypes from 'prop-types'

export const LoadingSpinner = ({ size }) => (
  <div className='root'>
    <div className='progress'>
      <p>CircularProgress</p>
    </div>
  </div>
)

LoadingSpinner.propTypes = {
  size: PropTypes.number
}

export default LoadingSpinner