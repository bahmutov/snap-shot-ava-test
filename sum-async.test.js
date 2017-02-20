import test from 'ava'
import sum from './sum'
import snapshot from 'snap-shot'

function asyncSum (a, b) {
  return new Promise((resolve, reject) => {
    resolve(sum(a, b))
  })
}
test('async concat strings', async t => {
  const result = await asyncSum('f', 'oo')
  t.is(result, 'foo')
  console.log(result)
  snapshot(result)
})
