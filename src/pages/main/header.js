import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar as MaterialAppBar,
  Toolbar as MaterialToolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from '../../images/pizza-facil.svg'
import { AuthContext } from '../../contexts/auth'

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Typography>
          Olá {userInfo.user.firstName}
        </Typography>

        <IconButton onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu
          open={!!anchorElement}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>
            Sair
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

const AppBar = styled(MaterialAppBar)`
  background-color: #DF3824;
`

const Toolbar = styled(MaterialToolbar)`
  background-color: #DF3824;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;
  & path {
    fill: #F5F5F5;
  }

  & line {
    stroke: #F5F5F5;
  }
`

export default Header
