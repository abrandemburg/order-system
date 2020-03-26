import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { Button as MaterialButton, Container, Typography, Grid } from '@material-ui/core'
import { useAuth } from 'hooks'
import { singularOrPlural } from 'utils'

function Footer ({ buttons, location, history }) {
  const { userInfo } = useAuth()

  const { pizzaSize, pizzaFlavours } = location.state
  const { flavours, name, slices } = pizzaSize

  console.log('pizza flavours:', pizzaFlavours)

  return (
    <FooterContent>
      <Container>
        <Grid container>
          <OrderContainer>
            <Typography>
              <b>{userInfo.user.firstName}</b>, seu pedido é:
            </Typography>

            <Typography>
              Pizza <b>{name.toUpperCase()}</b> - {slices} fatias, {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}
            </Typography>

            {pizzaFlavours && (
              <Typography>
                {singularOrPlural(pizzaFlavours.length, 'Sabor - ', 'Sabores - ')}{' '}
                <b>{pizzaFlavours.map(({ name }) => name).join(' | ')}</b>
              </Typography>
            )}
          </OrderContainer>

          <ButtonsContainer>
            <Button
              {...buttons.back}
              component='a'
              onClick={(e) => {
                e.preventDefault()
                history.goBack()
              }}
            />

            <Button
              {...buttons.action}
              component={Link}
              color='primary'
            />
          </ButtonsContainer>
        </Grid>
      </Container>
    </FooterContent>
  )
}

Footer.propTypes = {
  location: t.object.isRequired,
  history: t.object.isRequired,
  buttons: t.object.isRequired
}

const FooterContent = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey[400]};
  padding: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`

const ButtonsContainer = styled(Grid).attrs({
  item: true
})`
  && {
    align-items: center;
    display: flex;
  }
`

const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export default withRouter(Footer)
