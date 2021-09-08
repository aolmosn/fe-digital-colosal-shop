import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon'

// Components
import Menu, { MenuOption } from '../Menu'

import classes from './Navigator.module.scss'
import Logo from '../Logo/Logo'

const Navigator = () => {
  const [menu, setMenu] = useState<Array<MenuOption>>([
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Productos',
      link: '/products'
    }
  ])
  const [menuVisibilityStatus, setMenuVisibilityStatus] = useState<boolean>(false)
  const [menuIcon, setMenuIcon] = useState<string>(!menuVisibilityStatus ? 'menu' : 'menu_open')

  const handleMenuVisibilityStatus = () => {
    handleMenuIcon()
    setMenuVisibilityStatus(!menuVisibilityStatus)
  }

  const handleMenuIcon = () => {
    let mIcon = 'menu'
    if (!menuVisibilityStatus) mIcon = 'menu_open'
    setMenuIcon(mIcon)
  }

  const handleMenuClose = () => {
    setMenuIcon('menu')
    setMenuVisibilityStatus(false)
  }

  return (
    <nav className={classes.Navigator}>
      <span className={classes.MenuButton} onClick={handleMenuVisibilityStatus}>
        <Icon>{menuIcon}</Icon>
      </span>
      <Logo color="#d66d6d" width={42} height={42} />
      <Menu options={menu} handleMenuClose={handleMenuClose} menuStatus={menuVisibilityStatus} />
    </nav>
  )
}

export default Navigator
