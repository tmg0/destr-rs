import { describe, expect, it } from 'vitest'
import packageJson from '../package.json'
import { destr } from '..'

describe('destr', () => {
  it('parses string \'true\' as boolean `true` case-insensitively', () => {
    expect(destr('true')).toStrictEqual(true)
    expect(destr('TRUE')).toStrictEqual(true)
  })

  it('parses string \'false\' as boolean `false` case-insensitively', () => {
    expect(destr('false')).toStrictEqual(false)
    expect(destr('FALSE')).toStrictEqual(false)
  })

  it('parses string \'null\' as `null`', () => {
    expect(destr('null')).toBeNull()
    expect(destr('NULL')).toBeNull()
  })

  it('parses valid JSON texts', () => {
    const testCases = [
      { input: '{}', output: {} },
      { input: JSON.stringify(packageJson), output: packageJson },
    ]

    for (const testCase of testCases)
      expect(destr(testCase.input)).toStrictEqual(testCase.output)
  })
})
