import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import classes from './LinkMenu.module.scss'

type Props = {
  label: string
  link: string
}

const LinkMenu: FC<Props> = ({ label, link }) => (
  <li className={classes.LinkMenu}>
    <Link to={link}>{label}</Link>
  </li>
)

export default LinkMenu
