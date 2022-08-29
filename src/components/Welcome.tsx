import { FC } from 'react'

import { Layout } from './Layout/Layout'
import { TestChart } from './Visualization/TestChart'

export const Welcome: FC = () => {
  return (
    <Layout>
      <h1>Welcome to Next.js D3 Starter!</h1>
      <div>
        <TestChart />
      </div>
    </Layout>
  )
}
