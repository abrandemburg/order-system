import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'
import AuthProvider from './contexts/auth'
import App from './app'

const theme = createMuiTheme()
console.log(theme)

function Root () {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <Router>
          <Route component={App} />
        </Router>
      </AuthProvider>
    </MuiThemeProvider>
  )
}

export default hot(module)(Root)
