import test from 'ava'
import sum from './sum'
import snapshot from 'snap-shot'

test('adds 1 + 2 to equal 3', t => {
  const result = sum(1, 2)
  t.is(result, 3)
})

test('adds 1 + 2 to equal 3 snapshot', t => {
  const result = sum(1, 2)
  snapshot(result)
})

// function asyncSum (a, b) {
//   return new Promise((resolve, reject) => {
//     resolve(sum(a, b))
//   })
// }
// test.skip('concat strings', async t => {
//   const result = await asyncSum('f', 'oo')
//   t.is(result, 'foo')
//   console.log(result)
//   snapshot(result)
// })
