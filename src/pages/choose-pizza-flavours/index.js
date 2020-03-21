import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import {
  Grid,
  Card
} from '@material-ui/core'
import { H3, PizzasGrid } from 'ui'
import { singularOrPlural } from 'utils'
import { Redirect } from 'react-router-dom'

import pizzaFlavours from 'fake-data/pizza-flavours'
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

        <PizzasGrid>
          {pizzaFlavours.map((flavour) => {
            return (
              <Grid item key={flavour.id} xs>
                <Card>
                  {console.log(flavour)}
                </Card>
              </Grid>
            )
          })}
        </PizzasGrid>

      </Grid>
      <Img alt='heheh' src='/public/fake-data/images/bacon.svg' />
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

const Img = styled.img`
  width: 50px;
  height: 50px; 
`

export default ChoosePizzaFlavours
