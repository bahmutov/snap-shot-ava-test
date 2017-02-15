# snap-shot-jest-test

> Jest compatibility with [snap-shot][snap-shot] test project

[![Build status][ci-image] ][ci-url]

JSX / React test example in [Link.test.js](Link.test.js) and to debug it
use `npm run debug`

```js
import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import snapshot from 'snap-shot'

// removes Function values (and other non-serializable stuff)
const strip = o => JSON.parse(JSON.stringify(o))

test('Link changes the class when hovered', () => {
  // snapshot does not know how to handle JSX
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  snapshot(strip(tree))

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  snapshot(strip(tree))

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  snapshot(strip(tree))
});
```

[snap-shot]: https://github.com/bahmutov/snap-shot
[ci-image]: https://travis-ci.org/bahmutov/snap-shot-jest-test.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/snap-shot-jest-test
