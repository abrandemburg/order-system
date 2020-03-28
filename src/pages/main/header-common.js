import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useAuth } from 'hooks'
import { HOME } from 'routes'
import Logo from './logo'

function HeaderCommon () {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useAuth()

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }
  return (
    <>
      <LogoContainer>
        <Link to={HOME}>
          <Logo />
        </Link>
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
    </>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
`

export default HeaderCommon
