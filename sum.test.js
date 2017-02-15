import test from 'ava'
import sum from './sum'
import snapshot from 'snap-shot'

test('adds 1 + 2 to equal 3', t => {
  const result = sum(1, 2)
  t.is(result, 3)
})

// test('concat strings', () => {
//   const result = sum('f', 'oo')
//   expect(result).toMatchSnapshot()
// })
