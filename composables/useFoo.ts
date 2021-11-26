import { useState } from '#app'

export default () => {
  return useState('foo', () => 'this is foo')
}