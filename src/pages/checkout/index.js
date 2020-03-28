import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import {
  Grid,
  List,
  ListItem,
  Paper,
  TextField as MaterialTextField,
  Typography
} from '@material-ui/core'
import {
  Content,
  Footer,
  Title as UiTitle
} from 'ui'
import { singularOrPlural } from 'utils'
import { useOrder } from 'hooks'

function Checkout () {
  const { order } = useOrder()
  console.log('vem do useOrder', order)

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>

            <Title>Qual endereço para entrega?</Title>
            <PaperContainer>
              <Grid container spacing={2}>
                <TextField label='CEP' xs={12} md={6} sm={6} inputProps={{ autoFocus: true }} />
                <TextField label='Rua' xs={12} sm={9} />
                <TextField label='Número' xs={5} sm={3} />
                <TextField label='Complemento' xs={12} />
                <TextField label='Cidade' xs={12} sm={9} />
                <TextField label='Estado' xs={4} sm={3} />
              </Grid>
            </PaperContainer>

            <Title>Qual seu telefone</Title>
            <PaperContainer>
              <Grid item>
                <TextField label='Telefone' xs={12} sm={8} md={6} />
              </Grid>
            </PaperContainer>

          </Grid>

          <Grid item container xs={12} md={6} direction='column'>

            <Title>Informações do seu pedido:</Title>

            <PaperContainer>
              <List>
                {order.pizzas.map((pizza, index) => {
                  const { quantity, pizzaFlavours, pizzaSize } = pizza
                  const { name, size, flavours } = pizzaSize

                  return (
                    <ListItem key={index}>
                      <Typography>
                        {pizza.quantity} {' '}
                        {singularOrPlural(quantity, 'Pizza: ', 'Pizzas: ')} {' '}
                        <b>{name.toUpperCase()}</b> {' - '}
                        <b>{size}cm</b>, {' '}
                        {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}

                        <br />

                        {singularOrPlural(pizzaFlavours.length, 'Sabor: ', 'Sabores: ')}
                        <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
                      </Typography>
                    </ListItem>
                  )
                })}
              </List>
            </PaperContainer>

          </Grid>
        </Grid>
      </Content>
      <Footer>
        Footer Checkout
      </Footer>
    </>
  )
}

function TextField ({ sm, md, xs, ...props }) {
  return (
    <Grid item xs={xs} md={md} sm={sm}>
      <MaterialTextField
        fullWidth
        variant='outlined'
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  xs: t.number,
  md: t.number,
  sm: t.number
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`

const PaperContainer = styled(Paper)`
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
`

export default Checkout
