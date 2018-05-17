import invariant from 'invariant';

const { getPrototypeOf, assign, getOwnPropertyDescriptors } = Object;

invariant(getOwnPropertyDescriptors, 'get-prototype-descriptors requires Object.getOwnPropertyDescriptors. See https://github.com/taras/get-prototype-descriptors#compatibility')

export default function getPrototypeDescriptors(constructor) {
  let prototype = getPrototypeOf(constructor);
  if (prototype && prototype !== getPrototypeOf(Object)) {
    return assign(getPrototypeDescriptors(prototype), getOwnPropertyDescriptors(constructor.prototype));
  } else {
    return getOwnPropertyDescriptors(constructor.prototype);
  }
}