import { readFileSync } from 'node:fs'
import { baseline, bench, group, run } from 'mitata'
import { destr } from 'destr'
import { destr as destrRs } from '..'

const pkg: string = readFileSync('./package.json', 'utf8')

group('package.json', () => {
  baseline('destr rs', () => destrRs(pkg))
  bench('destr', () => destr(pkg))
  bench('json parse', () => JSON.parse(pkg))
})

run()
