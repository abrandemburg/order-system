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
  Content,
  H3,
  PizzasGrid,
  Divider,
  Footer
} from 'ui'
import {
  singularOrPlural,
  toMoney
} from 'utils'
import { Redirect } from 'react-router-dom'
import pizzasFlavours from 'fake-data/pizzas-flavours'
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckBoxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  console.log('location', location)

  const { flavours, id } = location.state.pizzaSize

  const handleChangeCheckbox = (flavourId) => (e) => {
    console.log('checkboxes', checkboxes)
    console.log('target', e.target.checked)
    console.log('target', e.target)

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
      <Content>
        <Grid container direction='column' alignItems='center'>

          <H3 variant='h5'>
            Escolha {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}:
          </H3>

          <PizzasGrid>
            {pizzasFlavours.map((flavour) => {
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
                        {`${toMoney(flavour.price[id])}`}
                      </Typography>
                    </FlavourLabel>
                  </Card>
                </Grid>
              )
            })}
          </PizzasGrid>
        </Grid>
      </Content>
      <Footer buttons={{
        back: {
          children: 'Mudar tamanho'
        },
        action: {
          to: {
            pathname: CHOOSE_PIZZA_QUANTITY,
            state: {
              ...location.state,
              pizzaFlavours: getFlavourIdAndName(checkboxes)
            }
          },
          children: 'Quantas pizzas?',
          disabled: checkboxesChecked(checkboxes).length === 0
        }
      }}
      />
    </>
  )
}

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(c => !!c)
}

function getFlavourIdAndName (checkboxes) {
  return Object.entries(checkboxes)
    .filter(([_, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzasFlavours.find((flavour) => flavour.id === id).name
    }))
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
