import { describe, expect, it } from 'vitest'
import packageJson from '../package.json'
import { destr } from '..'

describe('destr', () => {
  it('parses valid JSON texts', () => {
    const testCases = [
      { input: '{}', output: {} },
      { input: JSON.stringify(packageJson), output: packageJson },
    ]

    for (const testCase of testCases)
      expect(destr(testCase.input)).toStrictEqual(testCase.output)
  })
})
