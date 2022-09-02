import { FC } from 'react'

import { Layout } from './Layout/Layout'
import { TestChart } from './Visualization/TestChart'

export const Welcome: FC = () => {
  return (
    <Layout>
      <h1>A Next.js + D3 Starter!</h1>
      <em>Integrates D3 and React following a React first approach:</em>
      <ul>
        <li>DOM is entirely handled by React.</li>
        <li>SVG elements and transitions are styled with CSS (modules).</li>
        <li>Resizes Charts based on the D3 margins convention.</li>
        <li>Tests with Jest and testing-library.</li>
      </ul>
      <div>
        <TestChart />
      </div>
    </Layout>
  )
}
