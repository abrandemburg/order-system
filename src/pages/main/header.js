import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import {
  AppBar as MaterialAppBar,
  Toolbar as MaterialToolbar
} from '@material-ui/core'
import HeaderCommon from './header-common'
import HeaderCheckout from './header-checkout'
import { CHECKOUT } from 'routes'

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Switch>
          <Route path={CHECKOUT} component={HeaderCheckout} />
          <Route component={HeaderCommon} />
        </Switch>
      </Toolbar>
    </AppBar>
  )
}

const AppBar = styled(MaterialAppBar)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
`

const Toolbar = styled(MaterialToolbar)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  margin: 0 auto;
`

export default Header
