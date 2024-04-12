import { readFileSync } from 'node:fs'
import { baseline, bench, group, run } from 'mitata'
import { destr } from 'destr'
import { destr as destrRs } from '..'

const pkg: string = readFileSync('./package.json', 'utf8')

group('boolean', () => {
  const cases = ['true', 'false']
  baseline('destr rs', () => cases.map(destrRs))
  bench('destr', () => cases.map(c => destr(c)))
  bench('json parse', () => cases.map(c => JSON.parse(c)))
})

group('null', () => {
  const cases = ['null', 'undefined']
  baseline('destr rs', () => cases.map(destrRs))
  bench('destr', () => cases.map(c => destr(c)))
  bench('json parse', () => cases.map(c => JSON.parse(c)))
})

group('package.json', () => {
  baseline('destr rs', () => destrRs(pkg))
  bench('destr', () => destr(pkg))
  bench('json parse', () => JSON.parse(pkg))
})

run()
