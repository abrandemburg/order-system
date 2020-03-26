import React, {
  lazy,
  Suspense
} from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Header from './header'
import * as routes from 'routes'

const ChoosePizzaSize = lazy(() => import('../choose-pizza-size'))
const ChoosePizzaFlavours = lazy(() => import('../choose-pizza-flavours'))
const ChoosePizzaQuantity = lazy(() => import('../choose-pizza-quantity'))

const Main = () => {
  return (
    <>
      <Header />

      <Spacer />

      <Suspense fallback='Loading'>
        <Switch>
          <Route path={routes.HOME} exact component={ChoosePizzaSize} />
          <Route path={routes.CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
          <Route path={routes.CHOOSE_PIZZA_QUANTITY} component={ChoosePizzaQuantity} />
        </Switch>
      </Suspense>
    </>
  )
}

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
