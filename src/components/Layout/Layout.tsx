import { FC, ReactElement } from 'react'

import styles from '../../../styles/Layout.module.css'
import { Head } from '../Head/Head'

export const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
