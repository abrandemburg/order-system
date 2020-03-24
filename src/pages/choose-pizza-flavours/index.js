import React, { useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Grid,
  Card as MaterialCard,
  Typography
} from '@material-ui/core'
import {
  CardLink,
  H3,
  PizzasGrid,
  Divider
} from 'ui'
import { singularOrPlural, checkboxesChecked } from 'utils'
import { Redirect } from 'react-router-dom'
import pizzaFlavours from 'fake-data/pizza-flavours'
import { HOME } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckBoxes] = useState(() => ({}))
  console.log('checkboxes', checkboxes)

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  console.log('location', location)

  const { flavours, id } = location.state

  const handleChangeCheckbox = (flavourId) => (e) => {
    console.log('checkboxes', checkboxes)
    console.log('target', e.target.checked)

    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }

    setCheckBoxes((checkboxes) => {
      return {
        ...checkboxes,
        [flavourId]: e.target.checked
      }
    })
  }

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
                <Card checked={!!checkboxes[flavour.id]}>
                  <FlavourLabel>
                    <Checkbox
                      checked={!!checkboxes[flavour.id]}
                      onChange={handleChangeCheckbox(flavour.id)}
                    />
                    <Img alt='heheh' src={flavour.image} />

                    <Divider />

                    <Typography>
                      {flavour.name}
                    </Typography>
                    <Typography>
                      {`R$: ${flavour.price[id]},00`}
                    </Typography>
                  </FlavourLabel>
                </Card>
              </Grid>
            )
          })}
        </PizzasGrid>

      </Grid>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : ''};
`

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const FlavourLabel = styled(CardLink).attrs({
  component: 'label'
})``

const Img = styled.img`
  width: 150px;
  padding: 5px;
`

export default ChoosePizzaFlavours
