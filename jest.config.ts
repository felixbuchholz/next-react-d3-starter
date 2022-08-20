import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: { global: { lines: 90 } },
  coverageReporters: ['text', 'json-summary'],
  preset: 'ts-jest',
  resetModules: true,
  testEnvironment: 'node',
  verbose: true,
}

export default config
