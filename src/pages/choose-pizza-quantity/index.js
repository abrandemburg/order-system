import React from 'react'
import styled from 'styled-components'
import { Grid, Input as MaterialInput } from '@material-ui/core'
import {
  H4,
  Content,
  Footer
} from 'ui'

function ChoosePizzaQuantity () {
  return (
    <>
      <Content>
        <Grid container direction='column' alignItems='center'>
          <H4>
            Quantas pizzas você gostaria<br />
          de pedir com esses sabores?
          </H4>
        </Grid>

        <MainContent>
          <Input defaultValue='1' autoFocus />
        </MainContent>
      </Content>
      <Footer buttons={{
        back: {
          children: 'Mudar tamanho'
        },
        action: {
          to: '/',
          children: 'Finalizar compra'
        }
      }}
      />
    </>
  )
}

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

export default ChoosePizzaQuantity
