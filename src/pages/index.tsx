import React, { FC, ReactNode } from 'react'

// Components
import Navigator from '../components/Navigator'

// type Props = {
//   children: ReactNode
// }

const Layout: FC = ({ children }) => {
  return (
    <div className="App">
      <Navigator />
      {/* <h2>{t('title', { name: 'Andres' })}</h2>
      <h3>{t('greetings')}</h3> */}

      {children}
    </div>
  )
}

export default Layout
