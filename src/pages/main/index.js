import React, {
  lazy,
  Suspense
} from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'
import Header from './header'
import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = lazy(() => import('../choose-pizza-size'))
const ChoosePizzaFlavours = lazy(() => import('../choose-pizza-flavours'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Content>
        <Suspense fallback='Loading'>
          <Switch>
            <Route path={HOME} exact component={ChoosePizzaSize} />
            <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
          </Switch>
        </Suspense>
      </Content>
    </>
  )
}

const Content = styled.main`
  padding: 20px;
`

const Spacer = withStyles((theme) => {
  return {
    main: theme.mixins.toolbar
  }
})(({ classes }) => {
  return (
    <div className={classes.main} />
  )
})

export default Main
