import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card,
  CardActionArea as MaterialCardActionArea,
  Divider as MaterialDivider,
  Typography,
  Grid
} from '@material-ui/core'
import { H3, H4 } from 'ui'
import { singularOrPlural } from 'utils'
import { AuthContext } from '../../contexts/auth'
import pizzaSizes from '../../fake-data/pizzas-sizes'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <H4 variant='h4'>
          O que vai ser hoje {userInfo.user.firstName}?
        </H4>
        <H3 variant='h5'>
          Escolha o tamanho da Pizza:
        </H3>

      </Grid>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => {
          return (
            <Grid item key={pizza.id} xs>
              <Card>
                <CardActionArea to={{
                  pathname: CHOOSE_PIZZA_FLAVOURS,
                  state: pizza
                }}
                >
                  <Pizza>
                    <PizzaSize>
                      {pizza.size}cm
                    </PizzaSize>
                  </Pizza>
                  <Divider />
                  <Typography variant='h5'>{pizza.name}</Typography>
                  <Typography>
                    {pizza.slices} fatias, {pizza.flavours} {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </PizzasGrid>
    </>
  )
}

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px;
`

const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`

const Pizza = styled.div`
  border: 1px solid #ccc;
  background: #fff;
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: #ccc;
    content: '';
    position: absolute;
    transform: rotate(45deg)
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`

const PizzaSize = styled(Typography).attrs({
  variant: 'h5'
})`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  width: 80px;
  z-index: 1;
`

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

export default ChoosePizzaSize
