import { FC } from 'react'

import { Layout } from './Layout/Layout'
import { TestChart } from './Visualization/TestChart'

export const Welcome: FC = () => {
  return (
    <Layout>
      <h1>A Next.js + D3 Starter!</h1>
      <p>Ready for all your visualization needs.</p>
      <div>
        <TestChart />
      </div>
    </Layout>
  )
}
