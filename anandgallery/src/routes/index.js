import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import LoginRoute from './Login'

export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        {
        [
          LoginRoute
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
      </Switch>
    </CoreLayout>
  )
}