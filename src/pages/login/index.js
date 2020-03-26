import React from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { useAuth } from 'hooks'
import { ReactComponent as MainLogo } from '../../images/pizza-facil.svg'

function Login () {
  const { login } = useAuth()

  return (
    <Container>
      <Grid container justify='center' spacing={10}>

        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>
            Logar com GitHub
          </GitHubButton>
        </Grid>

      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`
const Logo = styled(MainLogo)`
  width: 100%;
`
const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 20px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
