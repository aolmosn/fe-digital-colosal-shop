import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Icon from '@material-ui/core/Icon'
import classes from './Menu.module.scss'
import LinkMenu from './LinkMenu'
import Logo from '../Logo/Logo'
// eslint-disable-next-line import/no-cycle

export interface MenuOption {
  label: string
  link: string
}

type Props = {
  options: MenuOption[]
  menuStatus: boolean
  handleMenuClose: () => void
}

const Menu: FC<Props> = ({ options, handleMenuClose, menuStatus }) => {
  // const { t } = useTranslation(['navigator'])
  const classList = [classes.Menu]
  const menuContainer = [classes.MenuContainer]

  if (!menuStatus) {
    classList.push(classes.Show)
    menuContainer.push(classes.HideMenu)
  }

  return (
    <div className={menuContainer.join(' ')}>
      <div className={classes.Layer} onClick={handleMenuClose} />
      <div className={classList.join(' ')}>
        <div className={classes.MenuOptions}>
          <ul>
            {options.map(option => (
              <LinkMenu label={option.label} link={option.link} />
            ))}
          </ul>
        </div>
        <div className={classes.MenuLogo}>
          <Logo color="#d66d6d" width={42} height={42} />
        </div>
      </div>
    </div>
    // <ul className={classList.join(' ')}>
    //   <div>Something biutiful</div>

    //   {options.map}

    //   {options.map(option =>
    //     typeof option.action === 'string' ? (
    //       <li>
    //         <Link key={`link-${option.label}`} to={option.action}>
    //           {option.label}
    //         </Link>
    //       </li>
    //     ) : (
    //       <>
    //         <li className={classes.SubMenuLink}>
    //           <a key={`link-${option.label}`}>{option.label}</a>
    //           <Icon>arrow_right</Icon>
    //         </li>
    //         <SubMenu options={option.action} />
    //       </>
    //     )
    //   )}
    //   {/* {options.map(option => (
    //     // <MenuLabel key={option.label} label={option.label} link={option.link} />
    //   ))} */}
    // </ul>
  )
}

export default Menu
