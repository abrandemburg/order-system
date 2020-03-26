import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Typography,
  Grid
} from '@material-ui/core'
import {
  CardLink,
  Content,
  H3,
  H4,
  PizzasGrid,
  Divider
} from 'ui'
import { singularOrPlural } from 'utils'
import { useAuth } from 'hooks'
import pizzaSizes from '../../fake-data/pizzas-sizes'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()

  return (
    <Content>
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
                <CardLink to={{
                  pathname: CHOOSE_PIZZA_FLAVOURS,
                  state: {
                    pizzaSize: pizza
                  }
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
                </CardLink>
              </Card>
            </Grid>
          )
        })}
      </PizzasGrid>
    </Content>
  )
}

const Pizza = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  background: ${({ theme }) => theme.palette.common.white};
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
    background: ${({ theme }) => theme.palette.grey.A100};
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
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  width: 80px;
  z-index: 1;
`

export default ChoosePizzaSize
