import React from 'react'
import t from 'prop-types'
import { Grid } from '@material-ui/core'
import { H3 } from 'ui'
import { singularOrPlural } from 'utils'
import { Redirect } from 'react-router-dom'
import { HOME } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  console.log(location)

  const { flavours } = location.state
  return (
    <>
      <Grid container direction='column' alignItems='center'>

        <H3 variant='h5'>
          Escolha {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}:
        </H3>

      </Grid>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
