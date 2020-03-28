import React, { useState } from 'react'
import t from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Grid,
  Input as MaterialInput
} from '@material-ui/core'
import {
  Content,
  H4,
  Footer
} from 'ui'
import { HOME, CHECKOUT } from 'routes'
import { useOrder } from 'hooks'

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1)
  const { addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const handleChange = (e) => {
    const { value } = e.target

    if (value >= 1) {
      setQuantity(value)
    }
  }

  function addPizzas () {
    addPizzaToOrder({
      ...location.state,
      quantity
    })
  }

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
          <Input value={quantity} onChange={handleChange} autoFocus />
          <Button to={HOME} variant='contained' color='secondary' component={Link} onClick={addPizzas}>
            Adicionar e montar outra pizza
          </Button>
        </MainContent>
      </Content>
      <Footer buttons={{
        back: {
          children: 'Mudar tamanho'
        },
        action: {
          to: CHECKOUT,
          onClick: addPizzas,
          children: 'Finalizar compra'
        }
      }}
      />
    </>
  )
}

ChoosePizzaQuantity.propTypes = {
  location: t.object.isRequired
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }

  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

export default ChoosePizzaQuantity
